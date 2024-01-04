const IsEven = (numb)=> {

    

    return numb %2==0 ? true :false
}

const Falsy =(value)=> {

    return value || 'welcome'
}

 console.log( IsEven(5))
 console.log( Falsy(true))