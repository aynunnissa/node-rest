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
      'Menus',
      [
        {
          name: 'Butter Chicken Big Bowl (Contain: Ayam Tikka)',
          price: 69900,
          image: 'https://assets.hangry/butter-chicken-1212.png',
          description:
            'Potongan ayam yang juicy dimasak sama bumbu kari tomat dan butter yang creamy dan smooth abisss',
          availability: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Extra Japanese Nori Rice',
          price: 14000,
          image: 'https://assets.hangry/jpn-nori-1212.png',
          description: 'Nasi yang dibumbui dengan rumput laut dan wijen.',
          availability: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Meteor Chicken Rice',
          price: 46500,
          image: 'https://assets.hangry/meteor-chicken-1212.png',
          description:
            'Popcorn Chicken (boneless) + Nasi + Telur Mata Sapi + Extra Mayo.',
          availability: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Korean Strawberry Milk',
          price: 15000,
          image: 'https://assets.hangry/koren-str-1212.png',
          description: 'Es susu strawberry ala Korea yang fruity dan creamy.',
          availability: 1,
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
  },
};
