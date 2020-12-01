'use strict';

function clock() {
    const timeObj = new Date();
    const timeStr = timeObj.toLocaleTimeString();
    return timeStr;
}

function clockWrite() {
    document.querySelector('.main__clock').innerHTML = clock();
}

const clockRefresh = setInterval(clockWrite, 500);