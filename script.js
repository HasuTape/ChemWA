function goto(file)
{
    window.location.href = file;
}
function checkAnswer(input,correctAnswer) {
    
    const userAnswer = input.value.trim(); // Pobranie wartości inputa

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      const textElement = document.createElement("span");
      textElement.textContent = userAnswer;
      textElement.style.color = "black"; // Zmiana koloru na czarny
      
      input.replaceWith(textElement); // Zamiana inputa na tekst
    } else {
      alert("Niepoprawna odpowiedź! Spróbuj ponownie.");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-change");
    const themeStyle = document.getElementById("theme-style");
    const spoilerToggle = document.getElementById("spoiler-change");
    const spoilerStyle = document.getElementById("spoiler-style");

    // Sprawdzenie motywu z LocalStorage
    if (localStorage.getItem("theme") === "dark") {
        themeStyle.href = "dark.css";
    } else {
        themeStyle.href = "light.css";
    }

    // Sprawdzenie ustawienia spoilerów
    if (localStorage.getItem("spoiler") === "true") {
        spoilerStyle.href = "spoiler.css";
    } else {
        spoilerStyle.href = "no-spoiler.css";
    }

    // Obsługa przycisku zmiany motywu
    themeToggle.addEventListener("click", () => {
        if (themeStyle.href.endsWith("light.css")) {
            themeStyle.href = "dark.css";
            localStorage.setItem("theme", "dark");
        } else {
            themeStyle.href = "light.css";
            localStorage.setItem("theme", "light");
        }
    });

    // Obsługa przycisku zmiany spoilerów
    spoilerToggle.addEventListener("click", () => {
        if (localStorage.getItem("spoiler") === "true") {
            spoilerStyle.href = "no-spoiler.css";
            localStorage.setItem("spoiler", "false");
        } else {
            spoilerStyle.href = "spoiler.css";
            localStorage.setItem("spoiler", "true");
        }
    });
});
