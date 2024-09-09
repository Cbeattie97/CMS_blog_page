// Import Sequelize and the database connection
const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

// Import the models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Define relationships between models
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE', // When a user is deleted, delete their posts as well
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE', // When a post is deleted, delete associated comments as well
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

// Export the models and the Sequelize connection
module.exports = {
  User,
  Post,
  Comment,
  sequelize,
};
