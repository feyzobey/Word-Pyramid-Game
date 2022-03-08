import { Game } from "./game.js"
import {randoms} from "./process.js"
import express from "express"
import morgan from "morgan"
import ejs from "ejs"

const app = express()

app.use(morgan("dev"))
app.use(express.static("public")) //public klasörüne erişim
app.set("view engine", "ejs")
app.listen(3000, console.log("server is listening"))

app.get("/", (req, res) => {
    res.render("home", { title: "Home" })
})

app.get("/admin", (req, res) => {
    
    res.render("admin", { title: "Admin", words: randoms })
})

app.use((req, res) => res.status(404).render("404", { title: "404 Not Found"}))