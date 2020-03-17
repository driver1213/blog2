'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  user.associate = function(models) {
        user.hasMany(models.team, { foreignKey: 'userID' });

    // associations can be defined here
  };
  return user;
};


// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const categories = sequelize.define('categories', {
//     name: DataTypes.STRING
//   }, {});
//   categories.associate = function (models) {
//     // associations can be defined here
//     categories.hasMany(models.blogs, { foreignKey: categoryID });
//   };
//   return categories;
// };