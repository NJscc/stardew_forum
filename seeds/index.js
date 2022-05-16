const sequelize = require("../config/connection")
const {User,Post,Category,Topic} = require("../models")

const topic = [
    {
        title: "Favorite Villagers",
        text: "What's your reasoning on your favorite villager?",
        category_id: "1",
        user_id: "1"
    },
    {
        title: "Farm Layout Ideas",
        text: "Show everyone your plans for your farm!",
        category_id: "1",
        user_id: "1"
    },
    {
        title: "Best Crops",
        text: "Share your thoughts on your favorite crops!",
        category_id: "1",
        user_id: "1"
    },
    {
        title: "Favorite mods",
        text: "Tell everyone about your favorite mods!",
        category_id: "4",
        user_id: "2"
    },
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
    },
    {
        text: "pros and cons of your favorite mods??!",
        user_id: "2",
        topic_id: "4"
    },
    {
        text: "I love starfruit",
        user_id: "2",
        topic_id: "1"
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