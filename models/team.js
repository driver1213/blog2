'use strict';
module.exports = (sequelize, DataTypes) => {
  const team = sequelize.define('team', {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  team.associate = function(models) {
    team.belongsTo(models.player, { foreignKey: 'playerID' });
    team.belongsTo(models.user, { foreignKey: 'userID' });
    // associations can be defined here
  };
  return team;
};


// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const blogs = sequelize.define('blogs', {
//     title: DataTypes.STRING,
//     body: DataTypes.STRING
//   }, {});
//   blogs.associate = function (models) {
//     // associations can be defined here
//     blogs.belongsTo(models.author, { foreignKey: authorID });
//     blogs.belongsTo(models.categories, { foreignKey: categoryID });
//   };
//   return blogs;
// };