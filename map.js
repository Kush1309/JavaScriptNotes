// MAp : Map is a key or value like structure in this method only unique values are present 

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

const myObj={
    name:"Kushagar",
    section: "K@#BE",
    package:"12000000"
}
for (const i in myObj) {
    console.log(`${i} is the details ${myObj[i]}`);
}