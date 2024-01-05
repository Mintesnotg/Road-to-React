const Array_funcs = (arr) =>
 {
   return  arr.map ( (ar) =>{
        return  ar *2
   }).filter ( (fil)=> {
      return fil>10
   }).reduce ( (prev,curr)=> {
         
      return    prev+=curr
   })
}

console.log(Array_funcs([5,10,15,20]))


// 10,20,30,40