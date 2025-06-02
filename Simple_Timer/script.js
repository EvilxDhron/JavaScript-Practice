/* Simple Timer Project */

let seconds = 10;
let timerid = document.getElementById("time");

const timer = setInterval(() => {
    timerid.innerHTML = seconds;
    console.log(`Timer: ${seconds}`);
    if(seconds == 0){
        clearInterval(timer);
        console.log(`Time stopped at ${seconds}`);
    }
    seconds --;
}, 1000);