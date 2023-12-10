// javascript functions for assignment 5
function makeBigger() {
    var textArea = document.getElementById("userText");
    textArea.style.fontSize = "24pt";
}

function applyStyles() {
    var textArea = document.getElementById("userText");
    var fancyRadio = document.getElementById("fancy");
    var boringRadio = document.getElementById("boring");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
        alert("FancyShmancy selected!");
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = ""; // Reset to default
        textArea.style.textDecoration = "none"; // Reset to default
        if (boringRadio.checked) {
            alert("BoringBetty selected!");
        }
    }
}

function mooText() {
    var textArea = document.getElementById("userText");
    textArea.value = textArea.value.toUpperCase();

    var sentences = textArea.value.split(". ");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(" ");
        if (words.length > 1) {
            var lastWord = words.pop();
            lastWord = lastWord.endsWith(".") ? lastWord.slice(0, -1) + "-Moo." : lastWord + "-Moo";
            words.push(lastWord);
            sentences[i] = words.join(" ");
        }
    }
    textArea.value = sentences.join(". ");
}
