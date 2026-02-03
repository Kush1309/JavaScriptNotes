// MAp : Map is a key or value like structure in this method only unique values are present 

//arr ke andar bahut saaare object ho sakte hai

const map = new Map();
map.set('USA', "United state of America");
map.set("IN","India");
// console.log(map);
// for (const key of map) {
//     console.log(key)
// }

// for(const [key,value] of map){
//     console.log(key + ":-"+ value);
// }

//its is similar like array 

//lekin for of iterater object me nahi chalta hai

// const ObjMap=[
//     name="Kushagra",
//     college="LPU" 
// ]
// for (const i of ObjMap) {
//     console.log(i);
// }


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// for in object me work karta hai
//for in arr me bhi work karta hai
//map me for in work nahi karta haii


const myObj={
    name:"Kushagar",
    section: "K@#BE",
    package:"12000000"
}
for (const i in myObj) {
    // console.log(`${i} is the details ${myObj[i]}`);
}

const arr=["gfg","work","python"]
// for (const key in arr) {
//     console.log(key)    //isme sirf key dega 0,1,2
// }

// for (const key in arr) {
//     console.log(arr[key])
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for each most important hota hai

const coding=["java","c++","python","c#"]
// coding.forEach(function add(){
//                                         //for each function callback hota hai to iska koi name nahi hota hai
// })

coding.forEach(function (val){ //yaha val li jagah kuch bhi likh sakte ho any name
    // console.log(val);
});

coding.forEach((val)=>{  //ye arrow function 
    // console.log(val);
})

function printMe(items){
    // console.log(items);
}
coding.forEach(printMe) //functiono se for each loop chala sakte hai isme reference dete hai excute nahi kar rahe hai 
 
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// arrow function me sirf item ya var ka hi nahi balki index or array ka bhi access hota hai

coding.forEach( (val,index,arr)=>{
    // console.log(val,index,arr)
} )

// ++++++++++++++++++++++++++++++++++++++++++++++++++
// array object

const myArr=[
    {
        language:"javascript",
        sigh:"js"
    },
    {
        language:"java",
        sigh:"javaa"
    },
]

myArr.forEach( (items) =>{
    console.log(items.language);
} )

// ++++++++++++++++++++++++++++++++++++++++++++
// for each koi value return nahi karta hai ye undefined dega
