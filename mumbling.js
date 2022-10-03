let str1 = "abcd"
function accum(str){
    str = str.toLowerCase();
    let numArray = [];
    let myString = [];
    let strArray = [];
    for(let i = 0; i < 26; i++){
        numArray[i] = i + 1;
    }
    let i = 0;
    while(i < str.length){
        let char = str[i];
        let num = numArray[i];
        myString[i] = char.repeat(num)

        i++;
    }
    for(let i = 0; i < myString.length; i ++){
        
        myString[i] = myString[i].charAt(0).toUpperCase() +  myString[i].slice(1);;
;

    }
    
    
    return myString.join("-");
}

console.log(accum("ZpglnRxqenU"));