function generateDateString() {
	const currentDate = new Date();
	const currentDay = currentDate.getDate() > 9 ? currentDate.getDate() : `0${currentDate.getDate()}`;
	const currentYear = currentDate.getFullYear();
	const currentHour = currentDate.getHours();
	const currentMinute = currentDate.getMinutes() > 9 ? currentDate.getMinutes() : `0${currentDate.getMinutes()}`;

	const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const dayName = dayNames[currentDate.getDay()];

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const currentMonth = months[currentDate.getMonth()];
	document.querySelector('.discountDate').innerHTML = `(${currentMonth}-${currentDay}-${currentYear})`
	return `${currentHour}:${currentMinute}, ${currentDay} ${currentMonth} ${currentYear}, ${dayName}`;
}
document.querySelector('.date').textContent = generateDateString();

function generateRandomCode() {
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	let result = '';
	for (let i = 0; i < 4; i++) {
		const randomIndex = Math.floor(Math.random() * letters.length);
		result += letters[randomIndex];
	}
	return result;
}
var code = document.querySelectorAll('.code1');
code.forEach(item => {
	item.textContent = generateRandomCode();
})

var scan = document.querySelectorAll(".scan-text span");
var scanList = document.querySelectorAll(".scan-list .scan");
var scanIndex = 0;
var cont1 = document.querySelector("#cont1")
var cont3 = document.querySelector("#cont3")

function progress() {
	scanned()
	var box = document.querySelector('.progress')
	var bar = document.querySelector(".bar");
	let index = 0
	var flag = false
	scan[index].style.display = "block";
	//进度条上显示的数字，调整其内容
	var a = window.getComputedStyle(box).width; //最终宽度
	let b = a.indexOf("p")
	var w = a.substring(0, b)
	var times; //计时器
	var wSmall = 0; //初始宽度为0
	times = setInterval(function() {
		wSmall += w / 120; //每次加20
		bar.style.width = wSmall + 'px'; //宽度改变
		if (wSmall >= w) { //如果宽度超过最终宽度
			clearInterval(times); //清空定时器
			bar.style.width = 100 + '%'; //宽度改变
			document.querySelector('.dialog1-scan').style.display = 'none';
			document.querySelector('.scan-text').style.display = 'none';
			document.querySelector('.results').style.display = 'block';
			document.querySelector(".head-text1").style.display = 'none';
			document.querySelector(".head-text2").style.display = 'block';
			scanned(true)
			setTimeout(() => {
				document.querySelector('body').classList.add('mask')
				document.querySelector('.dialog2').style.display = 'block';
			}, 1000)
		} else {
			index++
			scanText(index)
			//  progress
			if (Math.ceil(wSmall / w * 100) === 26 && !flag) {
				flag = true
				console.log(flag);
				bar.style.background = '#CA1B06'
				document.querySelector(".dialog1-head").style.background = '#CA1B06'
				showScanList()
				showScan()
			}
		}
	}, 80);
}

function scanText(index) {
	if (index % 2 === 0) {
		scan[index / 2 - 1].style.display = "none";
		scan[index / 2].style.display = "block";
	}
}
var time2

function scanned(end) {
	if (end) {
		clearInterval(time2)
		return
	}
	let num = 1,
		sum = 1
	let cont = document.querySelector('#cont')
	time2 = setInterval(() => {
		num++
		sum = num + sum
		cont.innerText = sum;
	}, 15)

}
var i = 0;

//show Total security risks detected
function showScan() {
	i++
	if (i < 5) {
		setTimeout(() => {
			showScanList()
			showScan()
		}, i * 100 + 1200);
	}
}

function showScanList() {
	scanList[scanIndex].style.display = 'flex'
	scanIndex++
	cont1.innerHTML = scanIndex
	cont3.innerHTML = scanIndex
	cont1.style.color = '#CA1B06'
	cont3.style.color = '#CA1B06'
}

//toggele page
function toPage2() {
	document.querySelector('.page1').style.display = 'none'
	document.querySelector('.page2').style.display = 'block'
}

function toPage3() {
	document.querySelector('.page2').style.display = 'none'
	document.querySelector('.page3').style.display = 'block'
	progress()
}