let a=[23,554,67,78,89];
for(let i=0;i<a.length;i++)
{
    for(let j=0;j<a.length;j++)
    {
        if(a[i]<a[j])
        {
           let v=a[i];
           a[i]=a[j];
           a[j]=v;
        }
       
    }
}
console.log(a)

let Name="Hi this is Naveen";
let s=Name.split(" ")
console.log(s)
let removeSpace="     Naveen   Kumar  "
console.log(removeSpace.trim())
let subString1="Naveen kumar"
console.log(subString1.substring(1,5))
let ss=subString1.repeat(3)
console.log(ss)
let sr="naveen"
let p=sr.replace('n',"fsvh")
console.log(p)
