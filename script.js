const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let speedCactus = getComputedStyle(document.documentElement).getPropertyValue('--speedCactus').replace('s', '');

let countPress = 0;

document.addEventListener("keydown", function (event) {
	jump();
	countPress++;
	if (countPress % 5 == 0) {
		speedCactus = speedCactus - 0.5;
		if (speedCactus <= 0.5) {
			speedCactus = 0.5;
		}
		document.documentElement.style.setProperty('--speedCactus', speedCactus + 's');

	}
});

function jump() {
	if (dino.classList != "jump") {
		dino.classList.add("jump")
	}
	setTimeout(function () {
		dino.classList.remove("jump")
	}, 300);

}

let isAlive = setInterval(function () {
	let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
	let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

	if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
		alert("GAME OVER!!!");
		location.reload();
		countPress = 0;
	}
})