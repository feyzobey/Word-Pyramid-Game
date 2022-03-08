import { Game } from "./game.js"

import { JSDOM } from "jsdom"
export const randoms = new Game()
const dom = new JSDOM(``, { src: "./keyboard.ejs" })
console.log(dom.window.document.querySelector("div.row.key"))
