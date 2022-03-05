import * as word from "./wordAdjustment.js"

function getRandomInt(max) {
   return Math.floor(Math.random() * max)
}
word.digitCheck()

function Game() {
    console.log(word.digit_3_Words[getRandomInt(word.digit_3_Words.length)])
    console.log(word.digit_4_Words[getRandomInt(word.digit_4_Words.length)])
    console.log(word.digit_5_Words[getRandomInt(word.digit_5_Words.length)])
}
Game()
