"use strict";

document.getElementById('player1Display').src = document.getElementById('player1Rock').src;
document.getElementById('player2Display').src = document.getElementById('player2Rock').src;
function player1Rock() {
	var player1Ans = document.getElementById('player1Rock').src;
	var player2Ans = randomizeAI();
	nextTurnDisplay(player1Ans, player2Ans);
	checkWinner(player1Ans, player2Ans);
}
function player1Paper() {
	var player1Ans = document.getElementById('player1Paper').src;
	var player2Ans = randomizeAI();
	nextTurnDisplay(player1Ans, player2Ans);
	checkWinner(player1Ans, player2Ans);
}
function player1Scissors() {
	var player1Ans = document.getElementById('player1Scissors').src;
	var player2Ans = randomizeAI();
	nextTurnDisplay(player1Ans, player2Ans);
	checkWinner(player1Ans, player2Ans);
}

function nextTurnDisplay(player1Anstmp, player2Anstmp) {
	var player1 = {player1Display: document.getElementById('player1Display'),
		player1Ans: player1Anstmp
	};
	var player2 = {player2Display: document.getElementById('player2Display'),
		player2Ans: player2Anstmp
	};
	try { //jackEnPoy() is in animation.js
		jackEnPoy('player1Rock', player1.player1Display);
		jackEnPoy('player2Rock', player2.player2Display);
	} catch (e) {
	}
	displayEachChoice(player1, player2);
}

function bigImg(x) {
    x.style.height = "15vmin";
    x.style.width = "15vmin";
}

function normalImg(x) {
    x.style.height = "12vmin";
    x.style.width = "12vmin";
}



// @Overriden in animation.js
function displayEachChoice(player1, player2) {
	player1.player1Display.src = player1.player1Ans;
	player2.player2Display.src = player2.player2Ans;
}

function randomizeAI() {
	switch (Math.floor(Math.random() * 3.0)) {
		case 0:
			return document.getElementById('player2Rock').src;
		case 1:
			return document.getElementById('player2Paper').src;
		case 2:
			return document.getElementById('player2Scissors').src;
		default:
			return null;
	}
}
function checkWinner(player1Ans, player2Ans) {
	var rock = document.getElementById('player1Rock').src;
	var paper = document.getElementById('player1Paper').src;
	var scissors = document.getElementById('player1Scissors').src;
	if (
	(player1Ans == rock && player2Ans == scissors) ||
	(player1Ans == paper && player2Ans == rock) ||
	(player1Ans == scissors && player2Ans == paper)) {
		setTimeout(function () {
			document.body.style.background = '#f5cd0b';
		}, 850);
		alertt('Winner Winner Chicken Dinner!');
	} else if (player1Ans === player2Ans) {
		alertt('DRAW!');
		setTimeout(function () {
			document.body.style.background = '#efefef';
		}, 850);
	} else {
		alertt('You Lose! Better Luck Next Time.');
		setTimeout(function () {
			document.body.style.background = '#bf1f00';
		}, 850);
	}
}

// @Overriden in animation.js
function alertt(msg) {
	setTimeout(function () {
		alert(msg);
	}, 0);
}