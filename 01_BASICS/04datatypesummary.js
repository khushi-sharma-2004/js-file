//primitive
//7 types: Strings,Number,Boolean,null,underdefined,symbol,bigint



const score=100//return type:number
const scorevalue=100.3//return type:number



const isLoggedIn=false//return type:boolean
const outSideTemp=null//return type:null
let userEmail;//return type:undefined
const id =Symbol('123')//return type:symbol
const id2=Symbol('123')//return type:symbol
//console.log(id===id2)
const bigNumber= 3456555556688899n//return type:bigint



///refrence or non primitive datatypes
//ARRAYS,OBJECTS,FUNCTION
 
const heros=["shaktiman","naagraj","doga"]//return type:object
let myObj={//return type:object
    name:"khushi",
    age : 21,
}
const myFunction = function(){//RETURN TYPE:OBJECTfunction

    console.log("hello")
}
console.log(typeof heros)
