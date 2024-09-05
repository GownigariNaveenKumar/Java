let a=10;
let student={
    name:"Naveen",
    age:21,
    sex:'M',
    toprint:function()
    {
        let pp=12
        console.log(pp)

    }
}
student.toprint()
let laptop1={
    name:"lenovo",
    more:{
        color:"red",
        price:15000,
        ram:12
    }
}
let laptop2={
    name:"dell",
    more:
    {
        color:"white",
        price:20000,
        ram:4
    }
}
let result =fastcal(laptop1,laptop2)

function fastcal(k,l)
{
    if(k.more.ram>l.more.ram)
        return "laptop 1 is fast"
    return "laptop 2 is fast"
}
console.log(result)
let laptop5={
    name:"dell",
    more:
    {
        color:"white",
        price:20000,
        ram:400
    }
}
let laptop4={
    name:"dell",
    more:
    {
        color:"white2",
        price:20000,
        ram:40
    },
    compare:function(Na)
    {
       if(Na.more.ram>laptop4.more.ram)
        console.log(" laptop 5 is fast")
    else 
    console.log("laptop 4 is fats")
    }
}
laptop4.compare(laptop5)

