let student1={
    name:'Naveen',
    age:21,
    "additional info":
    {
        address:"Palamaner",
        phone:4567890987
    }
}
let student2={
    name:'Naveen1',
    age:21,
    "additional info":
    {
        address:"Gundugallu",
        phone:4567890987
    }
}
// In above lines of code we are resuing the code for object creation
console.log(student1)

// same thing we can done via constructor function

function Define(name,age,mob,Add)
{
    this.n=name,
    this.age=age,
    this.data=function()
    {
        console.log("data")
    },
    this.additionalinfo={
    mobile:mob,
    address:Add
    }
    
}
let k=new Define("Naveen",21,9182,"guns")
console.log(k.additionalinfo.mobile)