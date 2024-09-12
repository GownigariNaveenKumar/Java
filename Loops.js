for(let a=1;a<=4;a++) // starting and ending nuumber know then for loop we can 
    console.log(a)

let k=5;
for(i=1;i<=10;i++)
    console.log(`${k} * ${i} =${k*i}`)
let a=1 ,b=5
for(i=a;i<=b;i++)
    for(j=1;j<=10;j++){
console.log(`${i} * ${j} = ${i*j}`)

}
 let number=1234;
 let p;
let result=0;//expected is 4321
while(number>0)
{
    let di=number%10;
    let val=parseInt(number/10)
    number=val
    console.log(di)
    result=result*10+di
}
console.log(result)

do{
    console.log("naveen")
}while(false)

let s=[1,2,3,4,5,7]
for(k of s)
{
    console.log(k)
}
let student={
    age:20,
    sex:'male'
}
for(k in student)
{
    console.log(student[k])
}
let values=[{name:"naveen",age:24},{
    name:"maonj",age:27
}]
console.log(values.length)
for(s in values)
{
    console.log(values[s].age)
}
