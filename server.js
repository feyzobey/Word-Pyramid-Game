import * as game from "./game.js"
import express from "express";
import morgan from "morgan";
import ejs from "ejs"

const app = express()
app.use(morgan("dev"))
app.set("view engine", "ejs")
app.listen(3000, () => console.log("server is listening"))
app.get("/", (req, res) => {
    game.digitCheck()
    game.Game()
})

app.get("/admin", (req, res) => { 
    res.render(word)
})