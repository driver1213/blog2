'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('players', [{
      firstName: 'Austin',
      lastName: '',
      age: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Alina',
      lastName: '',
      age: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Jaye',
      lastName: '',
      age: 33,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Daniel',
      lastName: '',
      age: 44,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'John',
      lastName: '',
      age: 55,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});


    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
