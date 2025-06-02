/* Simple Timer Project */

let seconds = 0;

const timer = setInterval(() => {
    seconds ++;
    console.log(`Timer: ${seconds}`);
    if(seconds == 10){
        seconds ++;
        clearInterval(timer);
        console.log(`Time stopped at ${seconds}`);
    }
}, 1000);