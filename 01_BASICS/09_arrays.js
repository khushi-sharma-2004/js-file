//arrays
const myArr=[0,1,2,3,4,5]//arrays in js are resizeable
//console.log(myArr[0]);
//myArr.push(6);
//myArr.pop()//push and pop from end
//myArr.unshift(9)
//myArr.shift()//shift unshift from begninng
//console.log(myArr.includes(9));
////console.log(myArr.includes(3));
console.log(myArr.indexOf(3));
const newArr=myArr.join()//it binds+convert it into string
console.log(newArr);///prototype:object array
console.log(typeof newArr);


//slice,spice
console.log("A ",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);//slice : gives output by slicing elements from (start,end-1),do not change original arrays 

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("c ",myArr);//splice :manipulate original array,removes element(start,end)



