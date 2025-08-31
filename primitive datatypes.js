//N=NULL
//N=NUMBER
//S=SYMBOL
//B=BoOLEAN
//B=BIGINT
//U=UNDEFINED

let a = null;
let b= 345;
let c  =true;
let d = BigInt("567") + BigInt("3")
let e ="Morning"
let f =Symbol("I am nice symbol")
let g = undefined

console.log(a,b,c,d,e,f)
console.log(typeof d)
console.log(typeof c)

//object in js
   const item ={
    "Harry": true,
    "Shubh":false,
    "Lovish":67,
    "Rohan":undefined
   }

console.log(item["Harry"])
console.log(item["sda"])
console.log(item["Shubh"])
console.log(item["Lovish"])
console.log(item["Rohan"])