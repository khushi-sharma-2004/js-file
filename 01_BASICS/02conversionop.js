//let score= null, //here the type is object on conersion into num it gives 0 as value
//let score=undefined // here in undefined case it will give nan as value 
/* let score="khushi"//gives nan after conversion
//let score =true//gives 1 after conversion
//let score=false//gives 0// after conversion
console.log(typeof score);
console.log(typeof(score));
let valueInNum=Number(score)
console.log(typeof valueInNum);
console.log(valueInNum);//js is not that strict */


//let isLoggedIn=1
let isLoggedIn="KHUSHI"
let booleanIsLoggedIn =Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn)
/* EMPTY STRING -AFTER CONVERSION-FASLSE
STRING -AFTER CONV - TRUE
1-AFTER  CONV -TRUE
0-FALSE
*/
let someNum=33
let stringNum=String(someNum)
//console.log(stringNum);
//console.log(typeof stringNum);
                                                                                                                                                                                                                                                                                                                                                                
// ******************************Operations*********************
let value=3
let negValue=-value
//console.log(negValue);
/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%2);*/
let str1="hello"
let str2="khushi"
let str3= str1+" "+str2
/*console.log(str3);
console.log("1"+2);//op= 12
console.log("1"+2+2);// o/p= 122 : due to preffered guidlines
console.log(1+2+"2");// o/p = 32 :due to preferred guidelines*/
//console.log((3+4)*5%3);//always use paranthesis
  


/***************************some special but not good practise conversion****************/
//console.log(+true);
//console.log(true+);
//console.log(+"");
let gamecounter=100
gamecounter++;
console.log(gamecounter);









