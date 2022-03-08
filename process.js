import { digit_3_Words, digit_5_Words, digit_4_Words, digit_6_Words, digitCheck } from "./game.js"
import { JSDOM } from "jsdom";

const dom = new JSDOM(``, { src: "./keyboard.ejs" })
console.log(dom.window.document.querySelector(".row"))
