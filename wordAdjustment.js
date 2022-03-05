import * as fs from 'fs'

let myArray = fs.readFileSync('20k.txt', 'utf8').split('\n')
myArray = myArray.filter(len => !(len < 3 || len > 5))

export const digit_3_Words = []
export const digit_4_Words = []
export const digit_5_Words = []
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
            }
        }
    })
}
