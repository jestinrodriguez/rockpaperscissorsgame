//document.getElementById('player1Display').style.animation = 'jackenpoy 1s';
//document.getElementById('player2Display').style.animation = 'jackenpoy2 1s';
var h1 = document.getElementsByTagName('h1')[0];
var h1Counter = 0;
var h1InitialFontSize = h1.style.fontSize;
function jackEnPoy(playerInitialIcon, playerDisplay) {
	/*document.getElementsByTagName('h1')[0].style.top = '10px';*/
	if (playerDisplay.id === 'player2Display') {
		playerDisplay.style.animation = 'jackenpoy2 1s';
	} else {
		playerDisplay.style.animation = 'jackenpoy 1s';
	}
	playerDisplay.style.display = 'none';
	setTimeout(function () {
		playerDisplay.src = document.getElementById('player1Rock').src;
		playerDisplay.style.display = 'inline-block';
	}, 0);
	var mods = h1Counter % 3;
	if (h1Counter % 3 == 0) {
		h1.style.fontSize = h1InitialFontSize;
		chant('ROCK', ' PAPER', ' SCISSORS');
	}
	function chant(word1, word2, word3) {
		setTimeout(function () {
			h1.innerHTML = word1;
		}, 170);
		setTimeout(function () {
			h1.innerHTML = word1 + word2;
		}, 500);
		setTimeout(function () {
			h1.innerHTML = word1 + word2 + word3;
		}, 900);
	}
	h1Counter++;
}
function displayEachChoice(player1, player2) {
	setTimeout(function () {
		player1.player1Display.src = player1.player1Ans;
		player2.player2Display.src = player2.player2Ans;
	}, 800);
}
function alertt(msg) {
	setTimeout(function () {
		alert(msg);
	}, 1000);
}

