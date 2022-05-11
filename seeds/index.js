const sequelize = require("../config/connection")
const {User,Post,Category,Topic} = require("../models")


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

const topics = [
    {
        title: "Favorite Villagers",
        text: "this is text content",
        category_id: "1"
    },
    {
        title: "Farm Layout Ideas",
        text: "this is text content",
        category_id: "1"
    },
    {
        title: "Best Crops",
        text: "this is text content",
        category_id: "1"
    }
]

const feedSeed = async () => {
    await sequelize.sync({force:true})
    try{
        await sequelize.sync({force:true})
        await Category.bulkCreate(category);
        process.exit(0);
    } catch (err){
        console.log(err);
    }
}

feedSeed()