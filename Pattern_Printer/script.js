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

let nums = [3,7,2,9,4];
let sum = null;

for(let num of nums){
    sum += num;
}

console.log(sum);