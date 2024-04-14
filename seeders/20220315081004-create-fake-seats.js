"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"seats",
			[
				{
					//1
					name: "Ghế 1",
					status: "chưa đặt",
					floor: 1,
					type: "bed",
					price: 200000,
					vehicleId: 1,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					//2
					name: "Ghế 2",
					status: "chưa đặt",
					floor: 1,
					type: "bed",
					price: 200000,
					vehicleId: 1,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					//3
					name: "Ghế 3",
					status: "chưa đặt",
					floor: 1,
					type: "bed",
					price: 200000,
					vehicleId: 1,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					//4
					name: "Ghế 4",
					status: "chưa đặt",
					floor: 1,
					type: "bed",
					price: 200000,
					vehicleId: 1,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					//5
					name: "Ghế 5",
					status: "đã đặt",
					floor: 1,
					type: "seat",
					price: 200000,
					vehicleId: 1,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					//6
					name: "Ghế 6",
					status: "chưa đặt",
					floor: 2,
					type: "bed",
					price: 200000,
					vehicleId: 1,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					//7
					name: "Ghế 7",
					status: "chưa đặt",
					floor: 2,
					type: "seat",
					price: 200000,
					vehicleId: 1,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					//8
					name: "Ghế 8",
					status: "chưa đặt",
					floor: 2,
					type: "bed",
					price: 200000,
					vehicleId: 1,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					//9
					name: "Ghế 9",
					status: "chưa đặt",
					floor: 2,
					type: "bed",
					price: 200000,
					vehicleId: 1,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					//10
					name: "Ghế 10",
					status: "đã đặt",
					floor: 2,
					type: "seat",
					price: 200000,
					vehicleId: 1,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 1",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 2,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 2",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 2,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 3",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 2,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 4",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 2,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 5",
					status: "đã đặt",
					floor: 1,
					type: "bed",
					price: 350000,
					vehicleId: 2,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 6",
					status: "chưa đặt",
					floor: 2,
					type: "bed",
					price: 200000,
					vehicleId: 2,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 7",
					status: "chưa đặt",
					floor: 2,
					type: "bed",
					price: 300000,
					vehicleId: 2,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 8",
					status: "chưa đặt",
					floor: 2,
					type: "bed",
					price: 300000,
					vehicleId: 2,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 9",
					status: "chưa đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 2,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 10",
					status: "đã đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 2,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 1",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 3,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 2",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 3,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 3",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 3,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 4",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 3,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 5",
					status: "đã đặt",
					floor: 1,
					type: "bed",
					price: 350000,
					vehicleId: 3,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 6",
					status: "chưa đặt",
					floor: 2,
					type: "bed",
					price: 200000,
					vehicleId: 3,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 7",
					status: "chưa đặt",
					floor: 2,
					type: "bed",
					price: 300000,
					vehicleId: 3,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 8",
					status: "chưa đặt",
					floor: 2,
					type: "bed",
					price: 300000,
					vehicleId: 3,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 9",
					status: "chưa đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 3,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 10",
					status: "đã đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 3,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 1",
					status: "đã đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 4,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 2",
					status: "đã đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 4,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 3",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 4,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 4",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 4,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 5",
					status: "đã đặt",
					floor: 1,
					type: "bed",
					price: 350000,
					vehicleId: 4,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 6",
					status: "chưa đặt",
					floor: 2,
					type: "bed",
					price: 200000,
					vehicleId: 4,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 7",
					status: "chưa đặt",
					floor: 2,
					type: "bed",
					price: 300000,
					vehicleId: 4,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 8",
					status: "chưa đặt",
					floor: 2,
					type: "bed",
					price: 300000,
					vehicleId: 4,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 9",
					status: "chưa đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 4,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 10",
					status: "đã đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 4,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 1",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 5,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 2",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 5,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 3",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 5,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 4",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 5,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 5",
					status: "đã đặt",
					floor: 1,
					type: "seat",
					price: 350000,
					vehicleId: 5,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 6",
					status: "chưa đặt",
					floor: 2,
					type: "seat",
					price: 200000,
					vehicleId: 5,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 7",
					status: "chưa đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 5,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 8",
					status: "chưa đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 5,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 9",
					status: "chưa đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 5,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 10",
					status: "đã đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 5,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 1",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 6,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 2",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 6,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 3",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 6,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 4",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 6,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 5",
					status: "đã đặt",
					floor: 1,
					type: "seat",
					price: 350000,
					vehicleId: 6,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 6",
					status: "chưa đặt",
					floor: 2,
					type: "seat",
					price: 200000,
					vehicleId: 6,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 7",
					status: "chưa đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 6,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 8",
					status: "chưa đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 6,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 9",
					status: "chưa đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 6,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 10",
					status: "đã đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 7,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 1",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 7,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 2",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 7,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 3",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 7,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 4",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 7,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 5",
					status: "đã đặt",
					floor: 1,
					type: "seat",
					price: 350000,
					vehicleId: 7,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 6",
					status: "chưa đặt",
					floor: 2,
					type: "seat",
					price: 200000,
					vehicleId: 7,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 7",
					status: "chưa đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 7,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 8",
					status: "chưa đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 7,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 9",
					status: "chưa đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 7,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 10",
					status: "đã đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 7,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 1",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 8,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 2",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 8,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 3",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 8,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 4",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 8,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 5",
					status: "đã đặt",
					floor: 1,
					type: "seat",
					price: 350000,
					vehicleId: 8,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 6",
					status: "chưa đặt",
					floor: 2,
					type: "seat",
					price: 200000,
					vehicleId: 8,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 7",
					status: "chưa đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 8,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 8",
					status: "chưa đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 8,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 9",
					status: "chưa đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 8,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 10",
					status: "đã đặt",
					floor: 2,
					type: "seat",
					price: 300000,
					vehicleId: 8,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 1",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 9,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 2",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 9,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 3",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 9,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 4",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 9,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 5",
					status: "đã đặt",
					floor: 1,
					type: "seat",
					price: 350000,
					vehicleId: 9,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 6",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 200000,
					vehicleId: 9,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 7",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 9,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 8",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 9,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 9",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 9,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 10",
					status: "đã đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 9,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 1",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 10,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 2",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 10,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 3",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 10,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 4",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 10,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 5",
					status: "đã đặt",
					floor: 1,
					type: "seat",
					price: 350000,
					vehicleId: 10,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 6",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 200000,
					vehicleId: 10,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 7",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 10,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 8",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 10,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 9",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 10,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 10",
					status: "đã đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 10,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 1",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 11,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 2",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 11,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 3",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 11,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 4",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 11,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 5",
					status: "đã đặt",
					floor: 1,
					type: "seat",
					price: 350000,
					vehicleId: 11,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 6",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 200000,
					vehicleId: 11,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 7",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 11,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 8",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 11,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 9",
					status: "chưa đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 11,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
				{
					name: "Ghế 10",
					status: "đã đặt",
					floor: 1,
					type: "seat",
					price: 300000,
					vehicleId: 11,
					  createdAt: "2024-03-20 07:57:23",updatedAt: "2024-04-30 07:57:23",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("seats", null, {});
	},
};
