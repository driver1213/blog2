'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      firstName: 'Javascript',
      lastName: '',
      email: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Node',
      lastName: '',
      email: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'CSS',
      lastName: '',
      email: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'HTML',
      lastName: '',
      email: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Bootstrap4',
      lastName: '',
      email: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'APIs',
      lastName: '',
      email: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'React',
      lastName: '',
      email: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
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
