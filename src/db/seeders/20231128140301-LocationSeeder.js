'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Locations',
      [
        {
          name: 'Hangry Harapan Indah',
          lat: -6.168727,
          lng: 106.973034,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Hangry Kelapa Gading',
          lat: -6.159937,
          lng: 106.902482,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Locations', null, {});
  },
};
