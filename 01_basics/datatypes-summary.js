// Primitive

//  7 Categories : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')      // Symbol
const anotherId = Symbol("123")
console.log(id == anotherId)

const bigNumber = 32432455442n   // bigInt


// Reference or Non Primitive Datatype

// 3 Types: Array, Objects, 

 const heros = ["shaktiman", "naagraj", "doga"]   // Array

//   Object
 let myObj = {
    name: "abhishek",
    age: 21,
 }

console.log(myObj)

//   Function
const myFunction = function(){
    console.log("Hello World")
}


console.log(typeof outsideTemp)
console.log(typeof myFunction)
console.log(typeof heros)
console.log(typeof bigNumber)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Types Of Memory 
// 1. Stack Memory ( Primitive )
// 2. Heap Memory ( Non Primitive )

// Stack Memory
let myName = " Abhishek "

let anotherName = " Kumar "
anotherName = " Escanor "

console.log(myName)
console.log(anotherName)

let userOne = {
    email: "user1@gmail.com",
    upi: "user1@ybl",
}

let userTwo = userOne

userTwo.email = "abhi@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)







