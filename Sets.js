let a=[12,13,12,3,4,5,6,7,78,8,8,"naveen","naveen","virat"]
let b=new Set(a)
console.log(b)
let s= new Set()
s.add(12).add(13).add(12).add("naveen").add("Virat").add("13") //adding elements to the set
s.delete("naveen") //deleting element from the set 
console.log(s)
console.log(s.has("naveen"))//has method  is used to check the element is present or not 
let ss={
    name:"nxdvch",
    age:20
}

