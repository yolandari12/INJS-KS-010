'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   let arr = [
     {
       name: "Yolanda",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: "Tari",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: "Hafid",
       createdAt: new Date(),
       updatedAt: new Date()
     },
   ]
   await queryInterface.bulkInsert("Users", arr, {})
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
