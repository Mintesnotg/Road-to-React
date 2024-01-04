function mapper ( arr ) {
   
      return arr.map( ( ar) =>{
     
       return ar * 2
      }).filter( (a)=> {
        return a >10
      }).reduce ( (prev,curr,currindx) => {
      
       return prev+=curr
      })
}

console.log(mapper([10,20,5,30]))

//10*2=20
//20*2=40
//5*2=10
//30*2=60

