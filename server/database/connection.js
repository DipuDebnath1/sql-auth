const { Sequelize } = require("sequelize")
const mysql2 = require("mysql2")

const sequelize = new Sequelize(
    {
        dialect: "mysql",
        database: "auth",
        username: "root",
        password: "",
        host: "localhost"
    }
)

sequelize.authenticate(() => console.log("DB Connected")).catch(console.log)
sequelize.sync()
module.exports = sequelize