let a=100,b=12,c=15
if(a>b&&a>c)
{
    console.log("a is big")
}
else if(b>c)
{
    console.log("b is large")
}
else
{
    console.log("c is large")
}
let m=101
let result=m%2==0?"true":"false"
console.log(result)
m>1100&&console.log("m is large")

switch(true)
{
    case a>b && a>c:console.log("a is large")
    break;
    case b>c:console.log(" b is large")
    break;
    default:console.log("c is large")

}
let day="thur"
switch(day)
{
    case "sun": console.log("sun")
    break;
    case "mon":console.log("mon")
    break;
    case "tue":console.log("tue")
    break;
    case "wed":console.log("wed")
    break;
    case "thur":console.log("thur")
    break;
    default:console.log("wrong")
    
}