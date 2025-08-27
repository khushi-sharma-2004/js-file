const marvelHeros=["thor","Ironman","spiderman"]
const dc = ["superman","flash","batman"]
//marvelHeros.push(dc);
/*console.log(marvelHeros);//this method will give a 2-D array
console.log(marvelHeros[3]);///this returns a whole array
console.log(marvelHeros[3][1]);//this returns the first element of the nested array;

/*to avoid nested array and 2 d array problem we uses concat operation */
/* const myArr=marvelHeros.concat(dc);
console.log(marvelHeros);
console.log(myArr);
console.log(myArr[4]);*/


/***********spread op************ */

//const a_New_Arr=[...marvelHeros,...dc]
//console.log(a_New_Arr);

const Arr=[1,2,3,[4,5,6],7,[6,7[4,5]]]
const dummyArr=Arr.flat(Infinity)
console.log(dummyArr);
console.log(Array.isArray("khushi"));
console.log(Array.from("khushi"));
//console.log(Array.from({name:khushi}));// give empty array 
/*need to specify array from key or value*/



let sc1= 100;
let sc2 = 200;
let sc3=300;
console.log(Array.of(sc1,sc2,sc3));





