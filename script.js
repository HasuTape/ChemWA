function goto(file)
{
    window.location.href = file;
}
function eegg()
{
    let input = document.getElementById("ee").value;
    let correctPhrase = "Luzik arbuzik";

    if (input === correctPhrase) {
        document.getElementById("result").textContent = "✅ Poprawna fraza!";
    } else {
        document.getElementById("result").textContent = "❌ Błędna fraza!";
    }
}