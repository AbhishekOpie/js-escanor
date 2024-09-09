const marvel =["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

//marvel.push(dc)

//console.log(marvel)
//console.log(marvel[3][2])

const all_heros = marvel.concat(dc)
console.log(all_heros)

const all_new = [...marvel, ...dc]
console.log(all_new)

const arr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_arr = arr1.flat(Infinity)

console.log(real_arr)

console.log(Array.isArray("abhi"))
console.log(Array.from("abhi"))

let score1 = 1
let score2 = 2
let score3 = 3

console.log(Array.of(score1, score2, score3))