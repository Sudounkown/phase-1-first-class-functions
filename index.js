//takes a call back function as an argument and calls it 
function receivesAFunction(returnsAnAnonymousFunction){
    return returnsAnAnonymousFunction();
    
}


//returns a named function
function returnsANamedFunction(){
    return receivesAFunction
}

//this is an arrow function with no parameters returning an anonymous function
const returnsAnAnonymousFunction = () => {
    return function() {console.log("This function is anonymous")}
}
