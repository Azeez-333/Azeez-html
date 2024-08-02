const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() //- elapsedTime;
        timer = setInterval(update, 10); // every 10 milliseconds it will call the update function
        isRunning = true;
    }
}

function stop() {
    clearInterval(timer);
    // display.textContent =;
    isRunning = false;
    
}

function reset() {
    clearInterval(timer); 
    isRunning = false;
    // elapsedTime = 0;
    display.textContent = '0:0:0:0';     // Reset display
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
