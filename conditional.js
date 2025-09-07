// To run this code in Node.js, install prompt-sync first:
// npm install prompt-sync

const prompt = require('prompt-sync')();
let a = prompt("Hey whats your age?");
a = Number.parseInt(a);
if(a < 0){
  console.log("This is a invalid age");
}
else if(a < 9){
  console.log("You are not allowed to drive");
}
else if(a<18){
  console.log("You are allowed to drive");
}

else{
  console.log("This is an invalid age");
}
