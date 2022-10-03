num1 = -640;
num2 = 1000;
num3 = 7005;
num4 = 89;
function getSum(num1, num2){
    let myArray = [];
    let count = 0;
    let sum = 0;
    if(num1 <= num2){
        n1 = num1;
        n2 = num2;

    }
    else if(num1 > num2){
        n1 = num2;
        n2 = num1;
    }
    for(let i = n1; i <= n2; i++){
       
        myArray[count] = i;
        count++;

    }
    for(let i = 0; i < myArray.length; i++){
   
        sum = sum + myArray[i];
        }

    
    return sum; 
}

console.log(getSum(num2, num4));