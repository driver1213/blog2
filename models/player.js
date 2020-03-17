'use strict';
module.exports = (sequelize, DataTypes) => {
  const player = sequelize.define('player', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  player.associate = function(models) {
        player.hasMany(models.team, { foreignKey: 'playerID' });

    // associations can be defined here
  };
  return player;
};


// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const author = sequelize.define('author', {
//     name: DataTypes.STRING,
//     bio: DataTypes.STRING,
//     imageURL: DataTypes.STRING
//   }, {});
//   author.associate = function (models) {
//     // associations can be defined here
//     author.hasMany(models.blogs, { foreignKey: authorID });
//   };
//   return author;
// };