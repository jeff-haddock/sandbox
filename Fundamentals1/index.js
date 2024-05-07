// let nameElementFirst = document.getElementById("name");
// console.log("first grab", nameElementFirst)

// function nameClickEvent(){
//     let nameElement = document.getElementById("name");
    
//     let pTagElement = document.getElementById("p-name-tag");
//     pTagElement.innerHTML = "Name: " + nameElement.value;
// }


// SPREAD OPERATORS

let myArray = ['a', 'b', 'c']
let myNumArray = [1, 2, 3]

let combinedArray = [ ...myArray, ...myNumArray]
console.log(combinedArray)