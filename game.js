import fs from 'fs'
let myArray = []
//converting txt file to array 
fs.readFile('./allWords-EN.txt', (err, data) => {
    if (err) throw err
    myArray = data.toString().replace(/\r\n/g, '\n').split('\n')
})

const digit_3_Words = []
const digit_4_Words = []
const digit_5_Words = []
const digit_6_Words = []

export class Game {

    constructor() {
        this.digitCheck()
        this.random3 = digit_3_Words[this.getRandomInt(digit_3_Words.length)]
        this.random4 = digit_4_Words[this.getRandomInt(digit_4_Words.length)]
        this.random5 = digit_5_Words[this.getRandomInt(digit_5_Words.length)]
        this.random6 = digit_6_Words[this.getRandomInt(digit_6_Words.length)]
    }
    
    getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }
    digitCheck() {
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
}
