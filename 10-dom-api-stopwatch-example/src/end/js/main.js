/*
Timer Fundamentals
1. select all of the button elements and the lap elements
2. add an event listener for the start button
3. create variables for the currentTime, an isStopWatchRunning and the timerInterval
4. create a function named "startTimer" to start the interval
    - set the isStopWatchRunning to true
    - use setInterval to set the "timerInterval" variable
        - set the "time interval" or "delay" to 10ms
    - in the setInterval callback function, increment the time
5. create function named setTimerValue that will display the time on the page
    - call this function in the setInterval callback from the previous step
    - make it more readable (i.e. seconds:hundredths of seconds)
6. in the stop button listener, set the isStopWatchRunning to false and clear the interval
    - observe the page how the timer stops
    - if you click start, the timer continues
7. create a function to add new lap
    - get the lap time which is the current lap time minus the last lap time
    - display it on the page with the following html (in all laps section)
         <li class="list-group-item">Lap CURRENT LAP: CURRENT LAP TIME</li>
    - increase the currentLap
    - add the lastLapTime
8. in the add lap event listener, call the function above
*/
(function () {
    let stopButton = document.querySelector('.stop');
    let startButton = document.querySelector('.start');
    let lapButton = document.querySelector('.lap');
    let timerSeconds = document.querySelector('.timer-value');
    let allLaps = document.querySelector('.all-laps');

    let timerInterval;
    let currentTime = 0;
    let currentLap = 1;
    let lastLapTime = 0;
    let isStopWatchRunning = false;

    startButton.addEventListener('click', () => {
        if (!isStopWatchRunning) {
            startTimer();
        }
    });

    stopButton.addEventListener('click', () => {
        if (isStopWatchRunning) {
            clearInterval(timerInterval);
            isStopWatchRunning = false;
        }
    });

    lapButton.addEventListener('click', () => {
        addNewLap();
    });

    function addNewLap() {
        let lapTime = currentTime - lastLapTime;

        // use DOM API to create a new li and textNode to append
        let li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        // li.classList.add('list-group-item');
        // li.className = 'list-group-item';
        // etc.
        let text = document.createTextNode(`Lap ${currentLap}: ${getReadableTime(lapTime)}`);

        li.appendChild(text);
        allLaps.appendChild(li);

        // old innerHTML technique
        //allLaps.innerHTML += `<li class="list-group-item">Lap ${currentLap}: ${getReadableTime(lapTime)}</li>`;

        lastLapTime = currentTime;
        currentLap += 1;
    }

    function getReadableTime(time) {
        return `${Math.floor(time / 100)}:${time % 100}`;
    }

    function setTimerValue(time) {
        timerSeconds.innerHTML = getReadableTime(time);
    }

    function startTimer() {
        isStopWatchRunning = true;
        timerInterval = setInterval(() => {
            currentTime += 1;
            setTimerValue(currentTime);
        }, 10); // every 10ms
    }
})();