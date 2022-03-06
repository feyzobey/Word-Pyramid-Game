import {Game} from "./game.js"
import express from "express";
import morgan from "morgan";
import ejs from "ejs"

const app = express()
app.use(morgan("dev"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    Game()
})

app.get("/admin", (req, res) => { 
    res.render(word)
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

word.digitCheck()


