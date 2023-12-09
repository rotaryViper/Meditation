/* https://www.geeksforgeeks.org/how-to-create-stopwatch-using-html-css-and-javascript/
First Created: 9/12/2023 23:49
Last Updated: 10/12/2023 00:19
*/

"use strict"

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 0;
let minute = 0;
let second = 0;

let timer = false;

startBtn.addEventListener('click', function () {
	timer = true;
	stopWatch();
});

stopBtn.addEventListener('click', function () {
	timer = false;
});

resetBtn.addEventListener('click', function () {
	timer = false;
	hour = minute = second = 0;
	document.getElementById('hr').innerHTML = "00";
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
});

function stopWatch() {
	if (timer) {
		second++;

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = second = 0;
		}

		let hrString = hour;
		let minString = minute;
		let secString = second;

		if (hour < 10) {
			hrString = "0" + hour;
		}

		if (minute < 10) {
			minString = "0" + minute;
		}

		if (second < 10) {
			secString = "0" + second;
		}

		document.getElementById('hr').innerHTML = hrString;
		document.getElementById('min').innerHTML = minString;
		document.getElementById('sec').innerHTML = secString;
		setTimeout(stopWatch, 1000);
	}
}
