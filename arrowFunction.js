//function
function product(a,b){
  return a * b
}

let result = product(7,7)
console.log(result)

console.log("alternatives")

//alternative of function is arrow function
product = (a,b) => {
  return a+b
}

var res = product(7,2)
console.log(res)

console.log("alternatives")

//alternative of function is arrow function in 1 line
product = (a,b) => a*b

var multi = product (2,10)
console.log(multi)
