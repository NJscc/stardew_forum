const sequelize = require("../config/connection")
const {User,Post,Category,Topic} = require("../models")

const topic = [
    {
        title: "Favorite Villagers",
        text: "this is text content",
        category_id: "1",
        user_id: "1"
    },
    {
        title: "Farm Layout Ideas",
        text: "this is text content",
        category_id: "1",
        user_id: "1"
    },
    {
        title: "Best Crops",
        text: "this is text content",
        category_id: "1",
        user_id: "1"
    }
]

const user = [
    {
        username: "oatmeal",
        password: "password",
        user_avatar:"",
        user_bio:"hello world"
    },
    {
        username: "seval",
        password: "password2",
        user_avatar:"",
        user_bio:"hello world2"
    }

]
const category = [
    {
        title: "Game Discussion"
    },
    {
        title: "Guides and Resources"
    },
    {
        title: "Questions"
    },
    {
        title: "Modding"
    },
    {
        title: "Bugs"
    },
]

const post = [
    {
        text: "I don't like Pierre!",
        user_id: "1",
        topic_id: "1",
    },
    {
        text: "Penny is the best.",
        user_id: "1",
        topic_id: "1"
    },
    {
        text: "I love growing cranberries!",
        user_id: "1",
        topic_id: "3"
    }
]

const feedSeed = async () => {
    await sequelize.sync({force:true})
    try{
        await User.bulkCreate(user);
        await Category.bulkCreate(category);
        await Topic.bulkCreate(topic);
        await Post.bulkCreate(post);
        process.exit(0);
    } catch (err){
        console.log(err);
    }
}

feedSeed()