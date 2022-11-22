"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        firstName: "Albert",
        lastName: "Einstein",
        address: "Makati",
        postCode: "1772",
        phoneNumber: "09123456790",
        emailAddress: "admin_albert@yopmail.com",
        userName: "albert",
        password: "12345678",
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        firstName: "Joshua",
        lastName: "Lopez",
        address: "Manila",
        postCode: "1006",
        phoneNumber: "09123456791",
        emailAddress: "admin_joshua@yopmail.com",
        userName: "joshua",
        password: "12345678",
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        firstName: "Paul",
        lastName: "Smith",
        address: "Muntinlupa",
        postCode: "1771",
        phoneNumber: "09123456792",
        emailAddress: "admin_paul@yopmail.com",
        userName: "paul",
        password: "12345678",
        createdAt: new Date(),
         updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users',{},null)
  },
};
