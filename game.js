import * as fs from 'fs'

let myArray = fs.readFileSync('./allWords-EN.txt', 'utf8').split('\n')

export const digit_3_Words = []
export const digit_4_Words = []
export const digit_5_Words = []
export const digit_6_Words = []

export function digitCheck() {
    myArray.forEach(element => {
        if (element.match(" ") === null) {
            switch (element.length) {
                case 3:
                    digit_3_Words.push(element.toLowerCase())
                    break
                case 4:
                    digit_4_Words.push(element.toLowerCase())
                    break
                case 5:
                    digit_5_Words.push(element.toLowerCase())
                    break
                case 6:
                    digit_6_Words.push(element.toLowerCase())
                    break
            }
        }
    })
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

export function Game() {
    console.log(digit_3_Words[getRandomInt(digit_3_Words.length)])
    console.log(digit_4_Words[getRandomInt(digit_4_Words.length)])
    console.log(digit_5_Words[getRandomInt(digit_5_Words.length)])
    console.log(digit_6_Words[getRandomInt(digit_6_Words.length)])
}