/* Mini Pattern Printer Project */

let height = 10;

for(let i = 0; i <= height; i++){
    let row = "";

    for(let j = 0; j <= height -i; j++){
        row += " ";
    }
    for(let k = 0; k < 2 * i - 1; k++){
        row += "*";
    }
    console.log(row);
};

for(let i = height - 1; i >=1; i--){
    let row = "";
    for(let j = 0; j <= height - i; j++){
        row += " ";
    }
    for(let k = 0; k < 2 * i - 1; k++){
        row += "*";
    }
    console.log(row)
};

// Printing sum of an array

let nums = [3,7,2,9,4];
let sum = null;

for(let num of nums){
    sum += num;
}

console.log(sum);


// Reversing a string

let str = "Hello! World";

let reverse = () => {
    let reversed = "";
    for(let st = str.length - 1; st >= 0; st--){
        reversed += str[st];
    }
    return reversed;
}

console.log(reverse());


// 2D array sum

let arr2D = [
    [2,3,4],
    [5,6,7],
    [8,9,0]
];

let arrsum = 0;

for(let row of arr2D){
    for(let digit of row){
        arrsum += digit;
    }
}

console.log(arrsum);

// Making a copy of Map function

const mapcopy = [2,3,4,5,6];

console.log(mapcopy.map((num) => num + 2));

let mapCopy = (arr, fn) => {
    for(let num of arr){
        
    }
}