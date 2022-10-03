myNum = 9119;

function squareDigits(num){
    let myString = String(num);
    let myArray = [];
    for(let i = 0; i < myString.length; i++){
        myArray[i] = Number(myString[i]);
    }
    for(let i = 0; i < myArray.length; i++){
        myArray[i] = Math.pow(myArray[i],2);
    }
    return Number(myArray.join(""));

}


console.log(squareDigits(myNum));