let a={
    name:'naveen',
    'age k':24,
    laptop:{
        name:'lenovo',
        ram:'16GB',
        price:20
    }

}
for(let k in a)
{
   console.log(k)
}
//adding properties two object
a.amount=100;
 a['amount1']
 a.laptop.color="red"
console.log(a)
//delete the propericies from the object 
delete a["age k"]
console.log(a)
a.cal=function()
{
console.log("red")
}
a.cal()