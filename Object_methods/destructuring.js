const user ={
    fname:'minte',
    age:10,
    isdeveloper:true
}

const  { fname,age,isdeveloper}= user

const address = {
     ...user,
     city:'Addis Ababa'
}


console.log(fname)
console.log(age)
console.log(address)