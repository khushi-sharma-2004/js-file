/*******************STACK//HEAP ***********************/
//PRIMITIVE:STACK
//NONPRIMITIVE:HEAP
let num1=123
let num2=num1
num2=124
console.log(num1);
console.log(num2);///since it is a stack memory



let myobj={
    name: "Riya",
    age:24,
}
let yourobj=myobj
yourobj.age=25
console.log(myobj);
console.log(yourobj);///since it points toward heap memory


