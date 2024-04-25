const name = " abhishek "
const repoCount = 3

console.log( ` Hello my name is ${name} and my repo count is ${repoCount}`)

// Another way to declare
const gameName = new String ("abhishek-kumar-abhi")

console.log( gameName[0] );
console.log(gameName.__proto__)


console.log( gameName.length)
console.log( gameName.toUpperCase())
console.log( gameName.charAt(3))
console.log( gameName.indexOf('e'))

const newString = gameName.substring(0, 4)
console.log(newString)


const anotherString = gameName.slice(-6, 4)
console.log(anotherString)


const newStringOne = "    abhishek    "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://abhi.com/abhi%20kumar"
console.log(url.replace('%20', '-'))


console.log(url.includes('abhi'))
console.log(url.includes('abhishek'))


console.log(gameName.split('-'))