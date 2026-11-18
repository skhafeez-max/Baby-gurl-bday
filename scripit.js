const girlfriendName = "My Bagy gurl💕";
const yourName = "Jaanu❤️";

document.querySelectorAll("#girlName, [data-girl]").forEach(element => {
    element.textContent = girlfriendName;
});

document.querySelectorAll("#boyName, [data-boy]").forEach(element => {
    element.textContent = yourName;
});

function toggleMusic() {
    const music = document.getElementById("music");
    if (!music) return;

    if (music.paused) {
        music.play().catch(() => {
            alert("Please select your music.mp3 file and try again.");
        });
    } else {
        music.pause();
    }
}


function showWish() {
    const message = document.getElementById("extraWish");

    if (message) {
        message.style.display = "block";
        message.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}


function createPetal() {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.textContent = Math.random() > 0.5 ? "♥" : "♡";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = (12 + Math.random() * 18) + "px";
    petal.style.animationDuration = (5 + Math.random() * 6) + "s";

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 12000);
}

setInterval(createPetal, 650);
