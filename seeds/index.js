const sequelize = require("../config/connection")
const {User,Post,Category} = require("../models")

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

const feedSeed = async () => {
    try{
        await sequelize.sync({force:true})
        await Category.bulkCreate(category);
        process.exit(0);
    } catch (err){
        console.log(err);
    }
}

feedSeed()