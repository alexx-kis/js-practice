'use strict';

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