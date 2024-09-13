//object literal 
let s={name:"virat",age:20}
s.name2="naveen"
s["age2"]=20;
console.log(s)
//object method
let p=new Object()
p.age=20;
p["name"]="king"
console.log(p)
//object creating by using constructor function
function Team(name,age)
{
    this.name=name;
    this.age=age;
    this.name1=function()
    {
    console.log(this.name ,this.age)
    }

}
let s1=new Team("naveem",20)
console.log(Object.entries(s1))

let student={
    name:"naveen",
    age:20
}
let student1=Object.create(student,{name:{
    value:"ssw",

},
age:{
    value:20
}})
console.log(student1 
)