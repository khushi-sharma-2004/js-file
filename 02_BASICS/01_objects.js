//using constructor we ca create singleton objects only
//creating object by literals ,we cannot create singleton object
//object by literals
const mySym = Symbol("key")
const JsUser={
    name:"khushi",
    "full name":"khushi sharma",
    [mySym] :"myKey1",
    age:22,
    location:"Meerut",
    email:"khushi@gmail.com",
    isLoggedIn: true,
    LastLoginDays:["Monnday", "Saturday"]
}
JsUser.email="khushi@222"
Object.freeze(JsUser)
JsUser.age=34
//console.log(JsUser.age);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);//this cannot be accessed using JsUser.email method
//console.log(JsUser[mySym]);
//console.log(JsUser);



