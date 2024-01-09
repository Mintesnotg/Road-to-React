 async function fetchdata   (url) {

  const response = await fetch(url);
   if (!response.ok) {
      
    throw Error(`error is here :-  ${response.status}`)
   } else {
    const data = await response.json()
    console.log(data)
  
   }

}
export default fetchdata
