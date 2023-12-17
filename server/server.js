require('dotenv').config()
const User = require('./models/User')
const express = require('express');
const cors = require('cors')
const app = express()
const bcrypt = require("bcrypt")

const middlewares = [
    express.json(),
    cors()
]
app.use(middlewares)

app.get("/health", (req, res) => res.send("It's fine"))


app.post("/auth/signup", async (req, res) => {
    try {
        const exist = await User.findOne({ where: { email: req.body?.email } })
        if (exist) throw Error("User already exist!")

        const hashed_password = await bcrypt.hash(req.body?.password, 9)
        const user = await User.create({ ...req.body, password: hashed_password })
        user.password = undefined
        res.json(user)
    } catch (error) {
        res.status(400).json({ message: error?.message })
    }
})

app.post("/auth/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } })
        if (!user) throw Error("not Found!")
        const isMatched = await bcrypt.compare(password, user.password)
        if (!isMatched) throw Error("Invalid Password")
        res.json(user)
    } catch (error) {
        res.json({ message: error?.message })
    }
})

app.listen(1000, () => console.log("Server running...")) 