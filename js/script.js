'use strict';

/*==================================== sticky header ====================================*/
/*==================================== sticky header ====================================*/

window.onscroll = function () { makeSticky() };

let header = document.querySelector('.header');
let main = document.querySelector('.main');
// let sticky = header.offsetTop;
function makeSticky() {
	if (window.pageYOffset > 110) {
		header.classList.add("header--sticky");
		main.classList.add('main--sticky');
	} else {
		header.classList.remove("header--sticky");
		main.classList.remove('main--sticky');
	}
}



/*==================================== shapes calculator ====================================*/
/*==================================== shapes calculator ====================================*/

; (function () {

	/*------------------------------ square ------------------------------*/

	let squareSide = document.querySelector('#square-side');
	let squareBtn = document.querySelector('#square-btn');
	let squareArea = document.querySelector('#square-area');
	let squarePerimeter = document.querySelector('#square-perimeter');

	squareBtn.addEventListener('click', function () {
		squareArea.textContent = squareSide.value ** 2;
		squarePerimeter.textContent = squareSide.value * 4;
	});

	/*------------------------------ rectangle ------------------------------*/

	let rectangleSide1 = document.querySelector('#rectangle-side1');
	let rectangleSide2 = document.querySelector('#rectangle-side2');
	let rectangleBtn = document.querySelector('#rectangle-btn');
	let rectanglePerimeter = document.querySelector('#rectangle-perimeter');
	let rectangleArea = document.querySelector('#rectangle-area');

	rectangleBtn.addEventListener('click', function () {
		rectanglePerimeter.textContent = 2 * rectangleSide1.value + 2 * rectangleSide2.value;
		rectangleArea.textContent = rectangleSide1.value * rectangleSide2.value;
	});

	/*------------------------------ circle ------------------------------*/

	let circleRadius = document.querySelector('#circle-radius');
	let circleBtn = document.querySelector('#circle-btn');
	let circleArea = document.querySelector('#circle-area');
	let circleLength = document.querySelector('#circle-length');

	circleBtn.addEventListener('click', function () {
		circleArea.textContent = (3.1415926 * (circleRadius.value ** 2)).toFixed(2);
		circleLength.textContent = (2 * 3.1415926 * circleRadius.value).toFixed(2);
	});

	/*------------------------------ triangle ------------------------------*/

	let triangleSide1 = document.querySelector('#triangle-side1');
	let triangleSide2 = document.querySelector('#triangle-side2');
	let triangleSide3 = document.querySelector('#triangle-side3');
	let triangleBtn = document.querySelector('#triangle-btn');
	let triangleArea = document.querySelector('#triangle-area');

	triangleBtn.addEventListener('click', function () {
		let a = +triangleSide1.value;
		let b = +triangleSide2.value;
		let c = +triangleSide3.value;
		let p = (a + b + c) / 2;
		triangleArea.textContent = (Math.sqrt(p * (p - a) * (p - b) * (p - c))).toFixed(2);
	});
})();



/*==================================== math calculators ====================================*/
/*==================================== math calculators ====================================*/

; (function () {

	/*------------------------------ square equation ------------------------------*/

	let coef1 = document.querySelector('#coef1');
	let coef2 = document.querySelector('#coef2');
	let coef3 = document.querySelector('#coef3');
	let squareEquationBtn = document.querySelector('#square-equation-btn');
	let root1 = document.querySelector('#root1');
	let root2 = document.querySelector('#root2');

	squareEquationBtn.addEventListener('click', function () {
		let a = +coef1.value;
		let b = +coef2.value;
		let c = +coef3.value;

		let d = b ** 2 - 4 * a * c;

		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);

		root1.textContent = x1;
		root2.textContent = x2;

	});

	/*------------------------------ Pythagoras Three ------------------------------*/

	let pythNum1 = document.querySelector('#pyth-num1');
	let pythNum2 = document.querySelector('#pyth-num2');
	let pythNum3 = document.querySelector('#pyth-num3');
	let pythBtn = document.querySelector('#pyth-btn');
	let pythResult = document.querySelector('#pyth-result');

	pythBtn.addEventListener('click', function () {
		let a = +pythNum1.value;
		let b = +pythNum2.value;
		let c = +pythNum3.value;
		if (a ** 2 + b ** 2 == c ** 2) {
			pythResult.textContent = 'Данные числа являются тройкой Пифагора';
			pythResult.style.color = 'green';
		} else {
			pythResult.textContent = 'Данные числа не являются тройкой Пифагора';
			pythResult.style.color = 'red';
		}
	});

	/*------------------------------ Divisors ------------------------------*/

	let divNum = document.querySelector('#div-num');
	let divBtn = document.querySelector('#div-btn');
	let divRes = document.querySelector('#div-result');

	function getDivisors(num) {
		let divisors = [];

		for (let i = 1; i <= num; i++) {
			if (num % i == 0) {
				divisors.push(i);
			}
		}
		return divisors;
	}

	divBtn.addEventListener('click', function () {
		divRes.textContent = getDivisors(+divNum.value).join(', ');
	});


	/*------------------------------ Common Divisors ------------------------------*/

	let comDivNum1 = document.querySelector('#com-div-num1');
	let comDivNum2 = document.querySelector('#com-div-num2');
	let comDivBtn = document.querySelector('#com-div-btn');
	let comDivRes = document.querySelector('#com-div-result');

	function getCommonDivisors(num1, num2) {
		let divisors1 = getDivisors(num1);
		let divisors2 = getDivisors(num2);
		let commonDivisors = [];

		for (let i = 0; i < divisors1.length; i++) {
			for (let j = 0; j < divisors2.length; j++) {
				if (divisors2[j] == divisors1[i]) {
					commonDivisors.push(divisors2[j]);
				}
			}
		}
		return commonDivisors;
	}

	comDivBtn.addEventListener('click', function () {
		comDivRes.textContent = getCommonDivisors(comDivNum1.value, comDivNum2.value).join(', ');
	});


	/*------------------------------ biggest common divisor ------------------------------*/

	let maxComDivNum1 = document.querySelector('#max-com-div-num1');
	let maxComDivNum2 = document.querySelector('#max-com-div-num2');
	let maxComDivBtn = document.querySelector('#max-com-div-btn');
	let maxComDivRes = document.querySelector('#max-com-div-result');

	maxComDivBtn.addEventListener('click', function () {
		maxComDivRes.textContent = Math.max(...getCommonDivisors(maxComDivNum1.value, maxComDivNum2.value))
	});


	/*------------------------------ least common multiple ------------------------------*/

	let minComMultNum1 = document.querySelector('#min-com-mult-num1');
	let minComMultNum2 = document.querySelector('#min-com-mult-num2');
	let minComMultBtn = document.querySelector('#min-com-mult-btn');
	let minComMultRes = document.querySelector('#min-com-mult-result');

	function getMultiples(num) {
		let multiples = [];
		for (let i = num; i < 10000; i++) {
			if (i % num == 0) {
				multiples.push(i);
			}
		}
		return multiples;
	}

	function getLeastCommonMultiple(num1, num2) {
		let commonMultiples = [];
		let multiples1 = getMultiples(num1);
		let multiples2 = getMultiples(num2);

		for (let i = 0; i < multiples1.length; i++) {
			for (let j = 0; j < multiples2.length; j++) {
				if (multiples2[j] == multiples1[i]) {
					commonMultiples.push(multiples2[j]);
				}
			}
		}
		return Math.min(...commonMultiples);
	}

	minComMultBtn.addEventListener('click', function () {
		minComMultRes.textContent = getLeastCommonMultiple(+minComMultNum1.value, +minComMultNum2.value);
	});


})();



/*==================================== guess number ====================================*/
/*==================================== guess number ====================================*/

; (function () {

	let generateButton = document.querySelector('#generate-button');
	let guessButton = document.querySelector('#guess-button');
	let guessNumber = document.querySelector('#guess-input');
	let guessOutput = document.querySelector('#guess-output');


	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	let generatedNumber;
	generateButton.addEventListener('click', function () {
		generatedNumber = getRandomInt(1, 100);
	});

	guessButton.addEventListener('click', function () {
		let number = guessNumber.value;
		if (number > generatedNumber) {
			guessOutput.textContent = 'Меньше';
		} else if (number < generatedNumber) {
			guessOutput.textContent = 'Больше';
		} else if (number == generatedNumber) {
			guessOutput.textContent = 'Вы угадали!';
		}
	});
})();



/*==================================== guess cells ====================================*/
/*==================================== guess cells ====================================*/

; (function () {

	let cells = document.querySelectorAll('.cells__cell');
	let setBtn = document.querySelector('#set-button');
	let surrenderBtn = document.querySelector('#surrender-button');
	let timer = document.querySelector('.cells__timer');
	let repeatBtn = document.querySelector('#repeat-button');
	let timerBox = document.querySelector('.cells__timer-box');
	let output = document.querySelector('.cells__output');

	//функция возвращает массив из 10 случайных неповторяющихся чисел от 1 до 100
	function getRandomNumbers() {
		let randomNumbers = [];
		for (let i = 0; ; i++) {
			function getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			};

			let randomNumber = getRandomInt(0, 99);

			if (!randomNumbers.includes(randomNumber)) {
				randomNumbers.push(randomNumber);

			}
			if (randomNumbers.length == 10) {
				break;
			}
		}
		return randomNumbers;
	}


	function setRandomCells() {
		let randomNumbers = getRandomNumbers();
		randomNumbers.sort();
		for (let i = 0; i < 100; i++) {
			for (let j = 0; j < randomNumbers.length; j++) {
				if (i == randomNumbers[j]) {
					cells[i].setAttribute('data-selected', 'true');
					cells[i].classList.add('cells__cell--guessed');
				}
			}
		}
	}

	let timerId;
	function f() {
		setRandomCells();
		let i = 9;
		timerBox.classList.add('cells__timer-box--active');
		timerId = setInterval(function () {
			timer.textContent = i;
			i--;
			if (i < 0) {
				clearInterval(timerId);
				timerBox.classList.remove('cells__timer-box--active');
				timer.textContent = '10';
				for (let cell of cells) {
					if (cell.dataset.selected == 'true') {
						cell.classList.remove('cells__cell--guessed');
					}
				}
			}
		}, 1000)
		setBtn.style.display = 'none';
		surrenderBtn.style.display = 'block';
		repeatBtn.style.display = 'none';
		setBtn.removeEventListener('click', f);
	}

	setBtn.addEventListener('click', f);


	surrenderBtn.addEventListener('click', function () {
		for (let cell of cells) {
			if (cell.dataset.selected == 'true') {
				cell.classList.add('cells__cell--guessed');
			};
		}
		clearInterval(timerId);
		timerBox.classList.remove('cells__timer-box--active');
		this.style.display = 'none';
		repeatBtn.style.display = 'block';
		timer.textContent = '10';
	});

	repeatBtn.addEventListener('click', function () {
		for (let cell of cells) {
			if (cell.dataset.selected) {
				cell.classList.remove('cells__cell--guessed');
				cell.dataset.selected = 'false';
			};
		}
		setBtn.addEventListener('click', f);
		output.textContent = '';
		repeatBtn.style.display = 'none';
		setBtn.style.display = 'block';
	});

	let guessedCells = [];
	for (let cell of cells) {
		cell.addEventListener('click', function () {
			if (cell.dataset.selected == 'true') {
				cell.classList.add('cells__cell--guessed');
				guessedCells.push(cell);
				cell.dataset.selected = 'false'
			};
			if (guessedCells.length == 10) {
				output.textContent = 'Вы угадали все ячейки!';
				output.style.display = 'block';
				surrenderBtn.style.display = 'none';
				repeatBtn.style.display = 'block';
			}
		});
	}
})();


/*==================================== keyboard ====================================*/
/*==================================== keyboard ====================================*/

; (function () {
	let output = document.querySelector('.keyboard__input');
	let keys = document.querySelectorAll('.keyboard__key');

	for (let key of keys) {
		key.addEventListener('click', function () {
			output.value += key.textContent;
			if (key.textContent == '⌫') {
				output.value = output.value.slice(0, -2);
			}
			if (key.textContent == '⇪') {
				output.value = output.value.replace('⇪', '');
			}
		});
	}

	let capslock = document.querySelector('.keyboard__key--capslock');

	capslock.addEventListener('click', function () {
		for (let key of keys) {
			key.textContent = key.textContent.toUpperCase();
		}
	});
})();


/*==================================== calendar ====================================*/
/*==================================== calendar ====================================*/

; (function () {
	let monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	let calendarTitle = document.querySelector('.calendar__title');
	let now = new Date();
	let currentYear = now.getFullYear();
	let currentMonth = now.getMonth();
	let arrowPrev = document.querySelector('.calendar__arrow--prev');
	let arrowNext = document.querySelector('.calendar__arrow--next');

	function getLastDay(year, month) {
		return new Date(year, month + 1, 0).getDate();
	}

	function createCalendar(month, year) {
		let calendarList = document.querySelector('.calendar__list');
		let lastMonthDay = getLastDay(year, month);
		for (let i = 1; i <= lastMonthDay; i++) {
			let calendarItem = document.createElement('li');
			calendarItem.classList.add('calendar__item');
			calendarItem.textContent = i;
			calendarList.append(calendarItem);

			if (i == now.getDate() && month == now.getMonth()) {
				calendarItem.classList.add('calendar__item--current');
			}
		}
		calendarTitle.textContent = monthsNames[currentMonth] + ' ' + currentYear;
	}
	createCalendar(currentMonth, currentYear);

	arrowPrev.addEventListener('click', function () {
		let prevMonth = new Date(currentYear, --currentMonth);
		let prevMonthNum = prevMonth.getMonth();
		let year = prevMonth.getFullYear();
		let calendarItems = document.querySelectorAll('.calendar__item');
		for (let item of calendarItems) {
			item.remove();
		}
		createCalendar(prevMonth.getMonth(), year);
		calendarTitle.textContent = monthsNames[prevMonthNum] + ' ' + year;
	});


	arrowNext.addEventListener('click', function () {
		let nextMonth = new Date(currentYear, ++currentMonth);
		let nextMonthNum = nextMonth.getMonth();
		let year = nextMonth.getFullYear();
		let calendarItems = document.querySelectorAll('.calendar__item');
		for (let item of calendarItems) {
			item.remove();
		}
		createCalendar(nextMonth.getMonth(), year);
		calendarTitle.textContent = monthsNames[nextMonthNum] + ' ' + year;
	});
})();


/*==================================== autocomplete ====================================*/
/*==================================== autocomplete ====================================*/

; (function () {

	let countries = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo-Brazzaville', 'Congo-Kinshasa', 'Cook Islands', 'Costa Rica', 'Croatia', 'Cura?ao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'El Salvador', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Lands', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'R?union', 'Romania', 'Russia', 'Rwanda', 'Saint Barth?lemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent', 'Samoa', 'San Marino', 'S?o Tom? and Pr?ncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Swaziland', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'];

	let input = document.querySelector('.autocomplete__input');
	let list = document.querySelector('.autocomplete__list');

	input.addEventListener('input', function () {
		list.style.display = 'block';
		let newarr = countries.filter(function (country) {
			return country.startsWith(input.value);
		})
		let items = document.querySelectorAll('.autocomplete__list-item');
		for (let item of items) {
			item.remove();
		}
		for (let elem of newarr) {
			let item = document.createElement('li');
			item.classList.add('autocomplete__list-item');
			item.textContent = elem;
			list.append(item);

			item.addEventListener('click', function () {
				input.value = item.textContent;
				list.style.display = 'none';
			});
		}
		if (input.value == '') {
			list.style.display = 'none';
		}
	});
})();



/*==================================== spoiler ====================================*/
/*==================================== spoiler ====================================*/

; (function () {
	let showLinks = document.querySelectorAll('.spoiler__toggle');

	showLinks.forEach(function (link) {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			this.parentElement.nextElementSibling.classList.toggle('spoiler__spoiler--active');
		});
	})

})();


/*==================================== tabs ====================================*/
/*==================================== tabs ====================================*/

; (function () {

	let links = document.querySelectorAll('.tabs__link');
	let tabs = document.querySelectorAll('.tabs__tab');

	for (let i = 0; i < links.length; i++) {
		links[i].addEventListener('click', function (e) {
			e.preventDefault();
			document.querySelector('.tabs__link--active').classList.remove('tabs__link--active');
			document.querySelector('.tabs__tab--active').classList.remove('tabs__tab--active');
			this.classList.add('tabs__link--active');
			tabs[i].classList.add('tabs__tab--active');
		});
	}
})();


//*==================================== accordion ====================================*/
//*==================================== accordion ====================================*/

; (function () {

	let links = document.querySelectorAll('.acc__link');

	for (let link of links) {
		link.addEventListener('click', function (e) {
			e.preventDefault();

			let open = document.querySelector('.acc__tab--active');

			if (this.parentElement.classList.contains('acc__tab--active')) {
				this.parentElement.classList.remove('acc__tab--active');
			}
			else {
				this.parentElement.classList.add('acc__tab--active');
				if (open) {
					open.classList.remove('acc__tab--active');
				}
			}
		})
	}

})();


/*==================================== burger ====================================*/
/*==================================== burger ====================================*/

; (function () {
	let burger = document.querySelector('.burger');
	let menu = document.querySelector('.header__menu');
	let overlay = document.querySelector('.overlay');
	
	let menuLinks = document.querySelectorAll('.header__menu a');
	
	burger.addEventListener('click', function () {
		menu.classList.toggle('header__menu--open');
		burger.classList.toggle('burger--active');
		overlay.classList.toggle('overlay--show');
	});
	
	for (let link of menuLinks) {
		link.addEventListener('click', function () {
			menu.classList.remove('header__menu--open');
			burger.classList.remove('burger--active');
			overlay.classList.remove('overlay--show');
		})
	}
	
	overlay.addEventListener('click', function () {
		menu.classList.remove('header__menu--open');
		burger.classList.remove('burger--active');
		overlay.classList.remove('overlay--show');
	})
})();