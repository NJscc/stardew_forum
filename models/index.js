const User = require("./User");
const Post = require("./Post");
const Topic = require("./Topic");
const Category = require("./Category");

User.hasMany(Post,{foreignKey: "user_id"}),
Post.belongsTo(User),

User.hasMany(Topic,{foreignKey: "user_id"}),
Topic.belongsTo(User),

Category.hasMany(Post),
Category.hasMany(Topic,{foreignKey: "category_id"});
Post.belongsTo(Category),

Topic.hasMany(Post,{foreignKey: "topic_id"}),
Post.belongsTo(Topic),

module.exports = {
    User,
    Post,
    Topic,
    Category
}
