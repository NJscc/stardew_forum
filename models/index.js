const User = require("./User");
const Post = require("./Post");
const Topic = require("./Topic");
const Category = require("./Category");

User.hasMany(Post),
Post.belongsTo(User),

User.hasMany(Topic),
Topic.belongsTo(User),

Category.hasMany(Post),
Category.hasMany(Topic,{foreignKey: "category_id"});
Post.belongsTo(Category),

Topic.hasMany(Post),
Post.belongsTo(Topic),

module.exports = {
    User,
    Post,
    Topic,
    Category
}
