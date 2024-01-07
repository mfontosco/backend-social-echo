module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      password:{
        type:DataTypes.STRING
      }
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        tableName: 'users',
        timestamps: true,
        paranoid: true,
        underscored: true,
    });
  
    // User.associate =(models)=>{
    //         User.hasMany(models.Post,
    //           {
    //           as: "posts",
    //           foreignKey: "user_id"
    //         });
   
  
    return User;
  };
  