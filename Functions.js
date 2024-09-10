
// function add(a,b)
// {
//     console.log(k)
//     return a+b;
// }
// let a=add(2,3)
// var k=23
// console.log(a)
// let kk=function()
// {
//     return "Hello"
// }
// console.log(kk())
// let sum=0;
// function add1(a,b,...c)
// {
//  sum= a+b
//  for(k in c)
//  {
//    sum+= Number(c[k])
//  }
//  return sum
// }
// let kkk=add1(1,2,3,4,7)
// console.log(kkk)
// let aa='i3';
// if(aa<'i5')
// {
//     console.log("i 5 is bigger")
// }

function scope()
{

    let a=10;
    {
        let k=10;
        var p=20;
        console.log(k)
        console.log(p)
    }
    console.log(p)
}scope()
console.log(p)