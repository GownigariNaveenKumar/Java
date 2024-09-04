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

