//console.log("hello"+" "+"world"):this is how you concatenate
const name="KHUSHI"
const repoCount=50

//console.log(name+repoCount+"value");//automatically convert number to string
console.log(`HELLO MY NAME IS ${name} AND MY REPOCOUNT IS ${50}`);


const gameName= new String('takken3_your__gm')///string is an object ,have key vakue pair{0:t,1:a,2:k,3:k,4:e,5:n,6:3},length:7
/*console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));*/
console.log(gameName.indexOf('n'));
const newString=gameName.substring(0,4)
console.log(newString);
const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="     khushi     "
console.log(newStringOne);
console.log(newStringOne.trim());
const url ="https://techi.com/khushi"
console.log(url.replace('hi','__'));
console.log(url.includes('khushi'));
console.log(gameName.split('_'));




