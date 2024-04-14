const paymentController = async (req1, res2) => {
	// Lấy thông tin từ request body
	const {totalAmount, passenger} = req1.body;
	try {
		// Các thông tin cần thiết cho việc tạo yêu cầu thanh toán
		var partnerCode = "MOMOS9RM20220403";
		var accessKey = "FuDjG1pMnaxTUCwR";
		var secretkey = "v1jzHpgbyyzOfrMBy33ywii1mPxqV3Er";
		var requestId = partnerCode + new Date().getTime();
		var orderId = requestId;
		var orderInfo = `Đặt vé xe nhà xe ${passenger.name}`;
		var redirectUrl = "http://localhost:3000/";
		var ipnUrl = "https://callback.url/notify";
		var amount = totalAmount;
		var requestType = "captureWallet";
		var extraData = ""; // Pass empty value if your merchant does not have stores

		// Tạo chuỗi rawSignature trước khi ký HMAC SHA256
		var rawSignature = "accessKey=" + accessKey + "&amount=" + amount + "&extraData=" + extraData + "&ipnUrl=" + ipnUrl + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&partnerCode=" + partnerCode + "&redirectUrl=" + redirectUrl + "&requestId=" + requestId + "&requestType=" + requestType;

		// In ra rawSignature
		console.log("---------------------RAW SIGNATURE--------------------");
		console.log(rawSignature);

		// Tạo chữ ký (signature) bằng HMAC SHA256
		const crypto = require("crypto");
		var signature = crypto.createHmac("sha256", secretkey).update(rawSignature).digest("hex");

		// In ra signature
		console.log("-------------SIGNATURE-----------------");
		console.log(signature);

		// Tạo body cho request thanh toán
		const requestBody = JSON.stringify({
			partnerCode: partnerCode,
			accessKey: accessKey,
			requestId: requestId,
			amount: amount,
			orderId: orderId,
			orderInfo: orderInfo,
			redirectUrl: redirectUrl,
			ipnUrl: ipnUrl,
			extraData: extraData,
			requestType: requestType,
			signature: signature,
			lang: "en",
		});

		// Cấu hình các tùy chọn cho request gửi đến server thanh toán
		const options = {
			hostname: "test-payment.momo.vn",
			port: 443,
			path: "/v2/gateway/api/create",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Content-Length": Buffer.byteLength(requestBody),
			},
		};

		// Gửi request thanh toán thông qua giao thức HTTPS
		const https = require("https");
		const req = https.request(options, (res) => {
			console.log(`Status: ${res.statusCode}`);
			console.log(`Headers: ${JSON.stringify(res.headers)}`);

			// Xử lý dữ liệu trả về từ server thanh toán
			res.setEncoding("utf8");
			res.on("data", (body) => {
				console.log("Body: ");
				console.log(body);
				console.log("payUrl: ");
				res2.status(200).send(body);
			});
			res.on("end", () => {
				console.log("No more data in response");
			});
		});

		// Xử lý lỗi khi gửi request
		req.on("error", (e) => {
			console.log(`Problem with request: ${e.message}`);
		});

		// Ghi dữ liệu vào body của request
		console.log("Sending.......");
		req.write(requestBody);
		req.end();
	} catch (error) {
		console.log(error);
	}
};

// Xuất hàm controller thanh toán
module.exports = {
	paymentController,
};
