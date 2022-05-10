const sequelize = require("../config/connection")
const {User,Blog,Category} = require("../models")

const categories = [
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

const feedSeed = async () => {
    try{
        await Category.bulkCreate(categories);
        process.exit(0);
    } catch (err){
        console.log(err);
    }
}

feedSeed()