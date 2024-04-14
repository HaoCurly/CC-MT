const paymentController = async (req, res) => {
    const { totalAmount, passenger } = req.body;

    try {
        // Các thông tin cần thiết để tạo request thanh toán
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
        var extraData = "";

        // Chuỗi cần ký bằng HMAC SHA256
        var rawSignature = `accessKey=${accessKey}&amount=${amount}&extraData=${extraData}&ipnUrl=${ipnUrl}&orderId=${orderId}&orderInfo=${orderInfo}&partnerCode=${partnerCode}&redirectUrl=${redirectUrl}&requestId=${requestId}&requestType=${requestType}`;

        // Tạo chữ ký bằng HMAC SHA256
        const crypto = require("crypto");
        var signature = crypto.createHmac("sha256", secretkey).update(rawSignature).digest("hex");

        // Tạo body của request
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

        const https = require("https");

        const req = https.request(options, (res) => {
            console.log(`Status: ${res.statusCode}`);
            console.log(`Headers: ${JSON.stringify(res.headers)}`);
            res.setEncoding("utf8");
            res.on("data", (body) => {
                console.log("Body: ");
                console.log(body);
                console.log("payUrl: ");
                res.status(200).send(body);
            });
            res.on("end", () => {
                console.log("No more data in response.");
            });
        });

        req.on("error", (e) => {
            console.log(`Problem with request: ${e.message}`);
        });

        // Gửi request
        console.log("Sending....");
        req.write(requestBody);
        req.end();
    } catch (error) {
        // Xử lý lỗi nếu có
    }
};

module.exports = {
    paymentController,
};
