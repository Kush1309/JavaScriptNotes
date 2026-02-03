// filter is like a for each function

const arr=[1,2,8,10,4]

 const like=arr.filter((num)=>(num>4)) // jab hum bracket ke condition likh te hai to return karne ki koi jarurt nahi hai explicit or implicit ka rule hota hai
// console.log(like)

const num=arr.filter( (i)=>{
    return i>4
} )
// console.log(num);

// using for each function

const newNum=[]
arr.forEach((num)=>{
    if(num>4){
        newNum.push(num)
    }
})
// console.log(newNum)

// ++++++++++++++++++++++++++++++++++++++++++++++++
const newSum=arr.map((num)=> num+10)
// console.log(newSum)


// +++++++++++++++++++++++++++++++++++++++++++++++

// chaning :-means method ke kai method lagana for example .map().map().filter()


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++'+/
// Reduce me do Accumulator am nsore karta Hai

const myNumber =[1,3,4,6]
const sumacc=myNumber.reduce( (acc,curr)=> acc+curr,0)
console.log(sumacc)


