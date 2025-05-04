function makeBigger() {
    document.getElementById("userText").style.fontSize = "24pt";
}

function applyStyle() {
    const textArea = document.getElementById("userText");
    const fancy = document.getElementById("fancy");

    if (fancy.checked) {
        alert("FancyShmancy selected");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        alert("BoringBetty selected");
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooText() {
    let textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();

    // Split text into sentences (by period)
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i].trim();
        if (sentence.length > 0) {
            let words = sentence.split(" ");
            let lastWordIndex = words.length - 1;
            words[lastWordIndex] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }

    // Join the sentences back together with proper punctuation
    textArea.value = sentences.join(". ") + (text.endsWith(".") ? "." : "");
}
