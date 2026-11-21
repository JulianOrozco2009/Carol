const flowerMessages = {
    yellow: {
        title: "Bachira",
        text: `Creo que todos tenemos algo especial que nos hace brillar. Tú tienes una alegría que aunque no sea igual de brillante todos los dias, sigue siendo la razon de mi sonrisa. Por eso es una maravilla cuando eres tú misma.`
    },
    burgundy: {
        title: "Hugo",
        text: `Es posible que nuestros encuentros no sean simples casualidades. El destino puede tener una manera peculiar de juntar a las personas que necesitan conocerse. No sé qué nos espera mañana al girar los engranajes, pero nuestras aptitudes nos permiten llegar aun mas lejos y adueñarse de ese lugar como "Numero uno". `
    },
    blue: {
        title: "Kaiser",
        text: `Dicen que la rosa azul representa lo extraordinario y lo imposible, pero a veces lo imposible simplemente necesita encontrar a alguien que le dé un motivo para florecer. Y tú tienes esa manera tan especial de hacer que hasta lo imposible sea posible con tan solo un palpito`
    }
};

const messageTitle = document.querySelector("#message-title");
const messageText = document.querySelector("#message-text");
const flowersToSelect = document.querySelectorAll(".flower[data-flower]");

function showFlowerMessage(flowerType) {
    const message = flowerMessages[flowerType];
    if (!message || !messageTitle || !messageText) return;

    messageTitle.textContent = message.title;
    messageText.textContent = message.text;

    const panel = document.querySelector(".message-panel");
    if (panel) panel.scrollTop = 0;
}

flowersToSelect.forEach((flowerElement) => {
    flowerElement.addEventListener("click", () => {
        showFlowerMessage(flowerElement.dataset.flower);
    });

    flowerElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            showFlowerMessage(flowerElement.dataset.flower);
        }
    });
});

// Sincronización de letras
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");


function updateLyrics() {
    if (!audio || !lyrics) return;
    var time = Math.floor(audio.currentTime);
    var currentLine = lyricsData.find(
        (line) => time >= line.time && time < line.time + 6
    );

    if (currentLine) {
        lyrics.style.opacity = 1;
        lyrics.textContent = currentLine.text;
    } else {
        lyrics.style.opacity = 0;
        lyrics.textContent = "";
    }
}

setInterval(updateLyrics, 250);

function ocultarTitulo() {
    var titulo = document.querySelector(".titulo");
    if (!titulo) return;
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(function () {
        titulo.style.display = "none";
    }, 3000);
}

setTimeout(ocultarTitulo, 216000);