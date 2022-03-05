import fs from "fs"
let myArray = fs.readFileSync('20k.txt', 'utf8').split('\n')
myArray = myArray.filter(word => (word.length < 3 || word.length > 5))
myArray.forEach(el => {
    let newText = el.replace(el, '')
    fs.writeFileSync('20k.txt', newText, 'utf8')
})
