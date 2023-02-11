const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    
    const reply = sequelize.define('reply', {
      post_id: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
      },
      writer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
    });
  
    return reply;
  };