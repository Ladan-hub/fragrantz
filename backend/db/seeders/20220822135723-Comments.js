'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Comments'; 
      return queryInterface.bulkInsert(options, [
        {
          userId: 1,
          perfumeId: 1,
          comment: 'Creed Aventus is a great fragrance, but there are so many clones of it nowadays and everyone is wearing it that the $400 price tag is no longer justified.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          perfumeId: 5,
          comment: 'Simply one of the best date night fragrances out there.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          perfumeId: 11,
          comment: 'It smells a little synthetic in my opinion',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          perfumeId: 16,
          comment: 'Like a splash of cold water in your face on a hot summer day!',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          perfumeId: 20,
          comment: 'Too hyped and too expensive for no apparent reason',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'Comments';  
      return queryInterface.bulkDelete(options, null, {});
  }
};
