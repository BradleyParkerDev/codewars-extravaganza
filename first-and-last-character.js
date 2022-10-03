myString = "Bradley";

function removeChar(str){
    let newString = '';
    //if(str.length >= 3){
        for(let i = 0; i < str.length-1; i++){
            if(i >=1){
                newString = newString + str[i];
            }
        }
        return newString;
    //}


}

console.log(removeChar(myString));