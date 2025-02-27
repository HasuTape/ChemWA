function goto(file)
{
    window.location.href = file;
}
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-change");
    const themeStyle = document.getElementById("theme-style");

    // Sprawdza, jaki motyw jest zapisany w LocalStorage i ustawia go na stronie
    if (localStorage.getItem("theme") === "dark") {
        themeStyle.href = "dark.css";
    } else {
        themeStyle.href = "light.css";
    }

    // Obsługa kliknięcia przycisku zmiany motywu
    themeToggle.addEventListener("click", () => {
        if (themeStyle.href.includes("light.css")) {
            themeStyle.href = "dark.css";
            localStorage.setItem("theme", "dark");
        } else {
            themeStyle.href = "light.css";
            localStorage.setItem("theme", "light");
        }
    });
});
