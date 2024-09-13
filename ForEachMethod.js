let a=[10,20,30,40]
console.log(`before increment ${a}`)
a.forEach((element,index,array)=>{
    a[index]= element+element*0.1;
})
console.log(`after increment ${a}`)