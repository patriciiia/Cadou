const button = document.getElementById("openButton");

const gift = document.getElementById("gift");

const bear = document.getElementById("bear");

const message = document.getElementById("message");

const intro = document.getElementById("intro");


let opened = false;


button.addEventListener("click", function () {

    if (opened) return;

    opened = true;


    /* SCHIMBĂ TITLUL */

    intro.innerHTML =
        "✨ Surpriză pentru tine! ✨";


    /* DESCHIDE CUTIA */

    gift.classList.add("open");


    /* URSULEȚUL IESE */

    setTimeout(function () {

        bear.classList.add("show");

    }, 450);


    /* CONFETTI */

    setTimeout(function () {

        createConfetti();

    }, 900);


    /* APARE MESAJUL */

    setTimeout(function () {

        message.classList.add("show");

    }, 1500);


    /* SCHIMBĂ BUTONUL */

    setTimeout(function () {

        button.innerHTML =
            "💖 La mulți ani, Tatiana! 💖";

        button.style.cursor =
            "default";

    }, 1900);

});


function createConfetti() {

    const symbols = [
        "✨",
        "🎉",
        "💖",
        "💕",
        "🌸",
        "⭐",
        "🎀",
        "💐",
        "🎊"
    ];


    for (let i = 0; i < 45; i++) {

        const element =
            document.createElement("div");


        element.className =
            "confetti";


        element.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        element.style.left =
            Math.random() * 100 + "vw";


        element.style.top =
            (15 + Math.random() * 50) + "vh";


        element.style.setProperty(
            "--x",
            (Math.random() * 500 - 250) + "px"
        );


        element.style.setProperty(
            "--y",
            (Math.random() * 400 - 100) + "px"
        );


        document.body.appendChild(element);


        setTimeout(function () {

            element.remove();

        }, 1900);

    }

}
