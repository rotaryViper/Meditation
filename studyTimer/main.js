/* https://www.geeksforgeeks.org/how-to-create-stopwatch-using-html-css-and-javascript/
First Created: 9/12/2023 23:49
Last Updated: 10/12/2023 00:19
*/

"use strict"

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 1;
let minute = 0;
let second = 0;

let timer = false;

startBtn.addEventListener('click', function () {
	hour = parseInt(document.getElementById('hr').value);
	minute = parseInt(document.getElementById('min').value);
	second = parseInt(document.getElementById('sec').value);
	if ((second + minute + hour) > 0 ) {
		timer = true;
		stopWatch();
	}
});

stopBtn.addEventListener('click', function () {
	timer = false;
});

resetBtn.addEventListener('click', function () {
	hour = minute = second = 0;
	document.getElementById('hr').value = "01";
	document.getElementById('min').value = "00";
	document.getElementById('sec').value = "00";
	timer = false;
});

function stopWatch() {
	if (timer) {
		if ( (second + minute + hour) > 0 ) {
		second--;

		if (second < 0) {
			minute--;
			second = 59;
		}

		if (minute < 0) {
			hour--;
			minute = second = 59;
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

		document.getElementById('hr').value = hrString;
		document.getElementById('min').value = minString;
		document.getElementById('sec').value = secString;
		setTimeout(stopWatch, 1000);
		} else {
			document.getElementById('hr').value = "S";
			document.getElementById('min').value = "T0";
			document.getElementById('sec').value = "P";
		}
	}
}
