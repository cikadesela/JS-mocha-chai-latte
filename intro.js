
//Variable and constants
var name='Cika'
console.log('Name is:'+name)

var age= 30
//age=23
console.log('Age is' + age)

let pretty= true


//Conditional Operator
if(age<=21)
  {
    pretty=true
  }else {pretty=false}

console.log('Cika is pretty? ' + pretty)

if(age<=21?true:false)
console.log('hi, please check below')
console.log('pretty age check' + age)

//loops
let i = 0
while(i<5){
  console.log('i is now: ' + i)
  i++
}

console.log('now using for')

for(i=0;i<5;i++){
  console.log("i in for now is: "+i)
}

//function
function product(a,b){
  return a * b
}

let result = product(7,7)
console.log(result)
