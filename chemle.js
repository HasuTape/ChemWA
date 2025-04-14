const elements = [
    { symbol: "H", number: 1, mass: 1.008, group: 1, period: 1 },
    { symbol: "He", number: 2, mass: 4.0026, group: 18, period: 1 },
    { symbol: "Li", number: 3, mass: 6.94, group: 1, period: 2 },
    { symbol: "Be", number: 4, mass: 9.0122, group: 2, period: 2 },
    { symbol: "B", number: 5, mass: 10.81, group: 13, period: 2 },
    { symbol: "C", number: 6, mass: 12.011, group: 14, period: 2 },
    { symbol: "N", number: 7, mass: 14.007, group: 15, period: 2 },
    { symbol: "O", number: 8, mass: 15.999, group: 16, period: 2 },
    { symbol: "F", number: 9, mass: 18.998, group: 17, period: 2 },
    { symbol: "Ne", number: 10, mass: 20.180, group: 18, period: 2 },
    { symbol: "Na", number: 11, mass: 22.990, group: 1, period: 3 },
    { symbol: "Mg", number: 12, mass: 24.305, group: 2, period: 3 },
    { symbol: "Al", number: 13, mass: 26.982, group: 13, period: 3 },
    { symbol: "Si", number: 14, mass: 28.085, group: 14, period: 3 },
    { symbol: "P", number: 15, mass: 30.974, group: 15, period: 3 },
    { symbol: "S", number: 16, mass: 32.06, group: 16, period: 3 },
    { symbol: "Cl", number: 17, mass: 35.45, group: 17, period: 3 },
    { symbol: "Ar", number: 18, mass: 39.948, group: 18, period: 3 },
    { symbol: "K", number: 19, mass: 39.098, group: 1, period: 4 },
    { symbol: "Ca", number: 20, mass: 40.078, group: 2, period: 4 },
    { symbol: "Sc", number: 21, mass: 44.956, group: 3, period: 4 },
    { symbol: "Ti", number: 22, mass: 47.867, group: 4, period: 4 },
    { symbol: "V", number: 23, mass: 50.942, group: 5, period: 4 },
    { symbol: "Cr", number: 24, mass: 51.996, group: 6, period: 4 },
    { symbol: "Mn", number: 25, mass: 54.938, group: 7, period: 4 },
    { symbol: "Fe", number: 26, mass: 55.845, group: 8, period: 4 },
    { symbol: "Co", number: 27, mass: 58.933, group: 9, period: 4 },
    { symbol: "Ni", number: 28, mass: 58.693, group: 10, period: 4 },
    { symbol: "Cu", number: 29, mass: 63.546, group: 11, period: 4 },
    { symbol: "Zn", number: 30, mass: 65.38, group: 12, period: 4 },
    { symbol: "Ga", number: 31, mass: 69.723, group: 13, period: 4 },
    { symbol: "Ge", number: 32, mass: 72.630, group: 14, period: 4 },
    { symbol: "As", number: 33, mass: 74.922, group: 15, period: 4 },
    { symbol: "Se", number: 34, mass: 78.971, group: 16, period: 4 },
    { symbol: "Br", number: 35, mass: 79.904, group: 17, period: 4 },
    { symbol: "Kr", number: 36, mass: 83.798, group: 18, period: 4 },
    { symbol: "Rb", number: 37, mass: 85.468, group: 1, period: 5 },
    { symbol: "Sr", number: 38, mass: 87.62, group: 2, period: 5 },
    { symbol: "Y", number: 39, mass: 88.906, group: 3, period: 5 },
    { symbol: "Zr", number: 40, mass: 91.224, group: 4, period: 5 },
    { symbol: "Nb", number: 41, mass: 92.906, group: 5, period: 5 },
    { symbol: "Mo", number: 42, mass: 95.95, group: 6, period: 5 },
    { symbol: "Tc", number: 43, mass: 98.0, group: 7, period: 5 }, // Brak stabilnych izotopów
    { symbol: "Ru", number: 44, mass: 101.07, group: 8, period: 5 },
    { symbol: "Rh", number: 45, mass: 102.91, group: 9, period: 5 },
    { symbol: "Pd", number: 46, mass: 106.42, group: 10, period: 5 },
    { symbol: "Ag", number: 47, mass: 107.87, group: 11, period: 5 },
    { symbol: "Cd", number: 48, mass: 112.41, group: 12, period: 5 },
    { symbol: "In", number: 49, mass: 114.82, group: 13, period: 5 },
    { symbol: "Sn", number: 50, mass: 118.71, group: 14, period: 5 },
    { symbol: "Sb", number: 51, mass: 121.76, group: 15, period: 5 },
    { symbol: "Te", number: 52, mass: 127.60, group: 16, period: 5 },
    { symbol: "I", number: 53, mass: 126.90, group: 17, period: 5 },
    { symbol: "Xe", number: 54, mass: 131.29, group: 18, period: 5 },
    { symbol: "Cs", number: 55, mass: 132.91, group: 1, period: 6 },
    { symbol: "Ba", number: 56, mass: 137.33, group: 2, period: 6 },
    // Lantanowce (grupa 3)
    { symbol: "La", number: 57, mass: 138.91, group: 3, period: 6 },
    { symbol: "Ce", number: 58, mass: 140.12, group: 3, period: 6 },
    { symbol: "Pr", number: 59, mass: 140.91, group: 3, period: 6 },
    { symbol: "Nd", number: 60, mass: 144.24, group: 3, period: 6 },
    { symbol: "Pm", number: 61, mass: 145.0, group: 3, period: 6 }, // Brak stabilnych izotopów
    { symbol: "Sm", number: 62, mass: 150.36, group: 3, period: 6 },
    { symbol: "Eu", number: 63, mass: 151.96, group: 3, period: 6 },
    { symbol: "Gd", number: 64, mass: 157.25, group: 3, period: 6 },
    { symbol: "Tb", number: 65, mass: 158.93, group: 3, period: 6 },
    { symbol: "Dy", number: 66, mass: 162.50, group: 3, period: 6 },
    { symbol: "Ho", number: 67, mass: 164.93, group: 3, period: 6 },
    { symbol: "Er", number: 68, mass: 167.26, group: 3, period: 6 },
    { symbol: "Tm", number: 69, mass: 168.93, group: 3, period: 6 },
    { symbol: "Yb", number: 70, mass: 173.05, group: 3, period: 6 },
    { symbol: "Lu", number: 71, mass: 174.97, group: 3, period: 6 },
    // Kontynuacja
    { symbol: "Hf", number: 72, mass: 178.49, group: 4, period: 6 },
    { symbol: "Ta", number: 73, mass: 180.95, group: 5, period: 6 },
    { symbol: "W", number: 74, mass: 183.84, group: 6, period: 6 },
    { symbol: "Re", number: 75, mass: 186.21, group: 7, period: 6 },
    { symbol: "Os", number: 76, mass: 190.23, group: 8, period: 6 },
    { symbol: "Ir", number: 77, mass: 192.22, group: 9, period: 6 },
    { symbol: "Pt", number: 78, mass: 195.08, group: 10, period: 6 },
    { symbol: "Au", number: 79, mass: 196.97, group: 11, period: 6 },
    { symbol: "Hg", number: 80, mass: 200.59, group: 12, period: 6 },
    { symbol: "Tl", number: 81, mass: 204.38, group: 13, period: 6 },
    { symbol: "Pb", number: 82, mass: 207.2, group: 14, period: 6 },
    { symbol: "Bi", number: 83, mass: 208.98, group: 15, period: 6 },
    { symbol: "Po", number: 84, mass: 209.0, group: 16, period: 6 }, // Brak stabilnych izotopów
    { symbol: "At", number: 85, mass: 210.0, group: 17, period: 6 }, // Brak stabilnych izotopów
    { symbol: "Rn", number: 86, mass: 222.0, group: 18, period: 6 }, // Brak stabilnych izotopów
    { symbol: "Fr", number: 87, mass: 223.0, group: 1, period: 7 }, // Brak stabilnych izotopów
    { symbol: "Ra", number: 88, mass: 226.0, group: 2, period: 7 }, // Brak stabilnych izotopów
    // Aktynowce (grupa 3)
    { symbol: "Ac", number: 89, mass: 227.0, group: 3, period: 7 },
    { symbol: "Th", number: 90, mass: 232.04, group: 3, period: 7 },
    { symbol: "Pa", number: 91, mass: 231.04, group: 3, period: 7 },
    { symbol: "U", number: 92, mass: 238.03, group: 3, period: 7 },
    { symbol: "Np", number: 93, mass: 237.0, group: 3, period: 7 },
    { symbol: "Pu", number: 94, mass: 244.0, group: 3, period: 7 },
    { symbol: "Am", number: 95, mass: 243.0, group: 3, period: 7 },
    { symbol: "Cm", number: 96, mass: 247.0, group: 3, period: 7 },
    { symbol: "Bk", number: 97, mass: 247.0, group: 3, period: 7 },
    { symbol: "Cf", number: 98, mass: 251.0, group: 3, period: 7 },
    { symbol: "Es", number: 99, mass: 252.0, group: 3, period: 7 },
    { symbol: "Fm", number: 100, mass: 257.0, group: 3, period: 7 },
    { symbol: "Md", number: 101, mass: 258.0, group: 3, period: 7 },
    { symbol: "No", number: 102, mass: 259.0, group: 3, period: 7 },
    { symbol: "Lr", number: 103, mass: 262.0, group: 3, period: 7 },
    // Pierwiastki transuranowe
    { symbol: "Rf", number: 104, mass: 267.0, group: 4, period: 7 },
    { symbol: "Db", number: 105, mass: 270.0, group: 5, period: 7 },
    { symbol: "Sg", number: 106, mass: 271.0, group: 6, period: 7 },
    { symbol: "Bh", number: 107, mass: 270.0, group: 7, period: 7 },
    { symbol: "Hs", number: 108, mass: 277.0, group: 8, period: 7 },
    { symbol: "Mt", number: 109, mass: 276.0, group: 9, period: 7 },
    { symbol: "Ds", number: 110, mass: 281.0, group: 10, period: 7 },
    { symbol: "Rg", number: 111, mass: 280.0, group: 11, period: 7 },
    { symbol: "Cn", number: 112, mass: 285.0, group: 12, period: 7 },
    { symbol: "Nh", number: 113, mass: 284.0, group: 13, period: 7 },
    { symbol: "Fl", number: 114, mass: 289.0, group: 14, period: 7 },
    { symbol: "Mc", number: 115, mass: 288.0, group: 15, period: 7 },
    { symbol: "Lv", number: 116, mass: 293.0, group: 16, period: 7 },
    { symbol: "Ts", number: 117, mass: 294.0, group: 17, period: 7 },
    { symbol: "Og", number: 118, mass: 294.0, group: 18, period: 7 }
];
  
const answer = elements[Math.floor(Math.random() * elements.length)];
  
function checkGuess() {
    const input = document.getElementById("guess");
    const guessSymbol = input.value.trim().charAt(0) + input.value.trim().charAt(1);
  
    const guessed = elements.find(el => el.symbol === guessSymbol);
  
    const resultDiv = document.getElementById("result");
    const hintDiv = document.getElementById("hint");
    resultDiv.innerHTML = "";
    hintDiv.innerHTML = "";
  
    if (!guessed) {
      resultDiv.innerHTML = "<p>Nieznany symbol pierwiastka.</p>";
      return;
    }
  
    // Porównanie liter symbolu
    for (let i = 0; i < 2; i++) {
      const tile = document.createElement("div");
      tile.className = "tile";
  
      const answerChar = answer.symbol[i] || "";
      const guessChar = guessSymbol[i] || "";
  
      tile.textContent = guessChar;
  
      if (guessChar === answerChar) {
        tile.classList.add("correct");
      } else if (guessChar === "") {
        tile.classList.add("absent");
      } else if (answer.symbol.includes(guessChar)) {
        tile.classList.add("present");
      } else {
        tile.classList.add("absent");
      }
  
      resultDiv.appendChild(tile);
    }
  
    // Podpowiedzi liczbowo
    let hint = "";
    if (guessed.number < answer.number) hint += "🔺 Liczba atomowa jest większa<br>";
    else if (guessed.number > answer.number) hint += "🔻 Liczba atomowa jest mniejsza<br>";
    else hint += "✅ Liczba atomowa zgadza się<br>";
  
    if (guessed.mass < answer.mass) hint += "🔺 Masa atomowa jest większa<br>";
    else if (guessed.mass > answer.mass) hint += "🔻 Masa atomowa jest mniejsza<br>";
    else hint += "✅ Masa atomowa zgadza się<br>";

    if (guessed.period < answer.period) hint += "🔺 Znajduje się w okresie o wyższym numerze okresu<br>";
    else if (guessed.period > answer.period) hint += "🔻 Znajduje się w okresie o niższym numerze okresu<br>";
    else hint += "✅ Okres zgadza się<br>";
  
    if (guessed.group < answer.group) hint += "🔺 Znajduje się w wyższej grupie<br>";
    else if (guessed.group > answer.group) hint += "🔻 Znajduje się w niższej grupie<br>";
    else hint += "✅ Grupa zgadza się<br>";
  
    if (guessSymbol === answer.symbol) {
      hint += "<strong>🎉 Brawo! Odgadłeś pierwiastek: " + answer.symbol + "</strong>";
    }
  
    hintDiv.innerHTML = hint;
}