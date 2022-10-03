const myArray = [1,-4,7,12];

function positiveSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>=0){
            sum = sum + arr[i];
        }
    }
    return sum; 
}

console.log(positiveSum(myArray));