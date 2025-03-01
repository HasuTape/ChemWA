function goto(file)
{
    window.location.href = file;
}
function checkAnswer(input,correctAnswer) {
    
    const userAnswer = input.value.trim(); // Pobranie wartości inputa

    if (userAnswer === correctAnswer) {
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
const elementsData = {
    H: { massNumber: 1, atomicNumber: 1 },
    He: { massNumber: 4, atomicNumber: 2 },
    Li: { massNumber: 7, atomicNumber: 3 },
    Be: { massNumber: 9, atomicNumber: 4 },
    B: { massNumber: 11, atomicNumber: 5 },
    C: { massNumber: 12, atomicNumber: 6 },
    N: { massNumber: 14, atomicNumber: 7 },
    O: { massNumber: 16, atomicNumber: 8 },
    F: { massNumber: 19, atomicNumber: 9 },
    Ne: { massNumber: 20, atomicNumber: 10 },
    Na: { massNumber: 23, atomicNumber: 11 },
    Mg: { massNumber: 24, atomicNumber: 12 },
    Al: { massNumber: 27, atomicNumber: 13 },
    Si: { massNumber: 28, atomicNumber: 14 },
    P: { massNumber: 31, atomicNumber: 15 },
    S: { massNumber: 32, atomicNumber: 16 },
    Cl: { massNumber: 35, atomicNumber: 17 },
    K: { massNumber: 39, atomicNumber: 19 },
    Ca: { massNumber: 40, atomicNumber: 20 },
    Sc: { massNumber: 45, atomicNumber: 21 },
    Ti: { massNumber: 48, atomicNumber: 22 },
    V: { massNumber: 51, atomicNumber: 23 },
    Cr: { massNumber: 52, atomicNumber: 24 },
    Mn: { massNumber: 55, atomicNumber: 25 },
    Fe: { massNumber: 56, atomicNumber: 26 },
    Co: { massNumber: 59, atomicNumber: 27 },
    Ni: { massNumber: 58, atomicNumber: 28 },
    Cu: { massNumber: 64, atomicNumber: 29 },
    Zn: { massNumber: 65, atomicNumber: 30 },
    Ga: { massNumber: 69, atomicNumber: 31 },
    Ge: { massNumber: 73, atomicNumber: 32 },
    As: { massNumber: 75, atomicNumber: 33 },
    Se: { massNumber: 79, atomicNumber: 34 },
    Br: { massNumber: 80, atomicNumber: 35 },
    Kr: { massNumber: 84, atomicNumber: 36 },
    Rb: { massNumber: 85, atomicNumber: 37 },
    Sr: { massNumber: 88, atomicNumber: 38 },
    Y: { massNumber: 89, atomicNumber: 39 },
    Zr: { massNumber: 91, atomicNumber: 40 },
    Nb: { massNumber: 93, atomicNumber: 41 },
    Mo: { massNumber: 96, atomicNumber: 42 },
    Tc: { massNumber: 98, atomicNumber: 43 },
    Ru: { massNumber: 101, atomicNumber: 44 },
    Rh: { massNumber: 103, atomicNumber: 45 },
    Pd: { massNumber: 106, atomicNumber: 46 },
    Ag: { massNumber: 108, atomicNumber: 47 },
    Cd: { massNumber: 112, atomicNumber: 48 },
    In: { massNumber: 115, atomicNumber: 49 },
    Sn: { massNumber: 119, atomicNumber: 50 },
    Sb: { massNumber: 122, atomicNumber: 51 },
    I: { massNumber: 127, atomicNumber: 53 },
    Te: { massNumber: 128, atomicNumber: 52 },
    Xe: { massNumber: 131, atomicNumber: 54 },
    Cs: { massNumber: 133, atomicNumber: 55 },
    Ba: { massNumber: 137, atomicNumber: 56 },
    La: { massNumber: 138, atomicNumber: 57 },
    Ce: { massNumber: 140, atomicNumber: 58 },
    Pr: { massNumber: 141, atomicNumber: 59 },
    Nd: { massNumber: 144, atomicNumber: 60 },
    Pm: { massNumber: 145, atomicNumber: 61 },
    Sm: { massNumber: 150, atomicNumber: 62 },
    Eu: { massNumber: 152, atomicNumber: 63 },
    Gd: { massNumber: 157, atomicNumber: 64 },
    Tb: { massNumber: 159, atomicNumber: 65 },
    Dy: { massNumber: 162, atomicNumber: 66 },
    Ho: { massNumber: 164, atomicNumber: 67 },
    Er: { massNumber: 167, atomicNumber: 68 },
    Tm: { massNumber: 169, atomicNumber: 69 },
    Yb: { massNumber: 173, atomicNumber: 70 },
    Lu: { massNumber: 175, atomicNumber: 71 },
    Hf: { massNumber: 178, atomicNumber: 72 },
    Ta: { massNumber: 180, atomicNumber: 73 },
    W: { massNumber: 184, atomicNumber: 74 },
    Re: { massNumber: 186, atomicNumber: 75 },
    Os: { massNumber: 190, atomicNumber: 76 },
    Ir: { massNumber: 192, atomicNumber: 77 },
    Pt: { massNumber: 195, atomicNumber: 78 },
    Au: { massNumber: 197, atomicNumber: 79 },
    Hg: { massNumber: 201, atomicNumber: 80 },
    Tl: { massNumber: 204, atomicNumber: 81 },
    Pb: { massNumber: 207, atomicNumber: 82 },
    Bi: { massNumber: 209, atomicNumber: 83 },
    Po: { massNumber: 209, atomicNumber: 84 },
    At: { massNumber: 210, atomicNumber: 85 },
    Rn: { massNumber: 222, atomicNumber: 86 },
    Fr: { massNumber: 223, atomicNumber: 87 },
    Ra: { massNumber: 226, atomicNumber: 88 },
    Ac: { massNumber: 227, atomicNumber: 89 },
    Th: { massNumber: 232, atomicNumber: 90 },
    Pa: { massNumber: 231, atomicNumber: 91 },
    U: { massNumber: 238, atomicNumber: 92 },
    Np: { massNumber: 239, atomicNumber: 93 },
    Pu: { massNumber: 244, atomicNumber: 94 },
    Am: { massNumber: 243, atomicNumber: 95 },
    Cm: { massNumber: 247, atomicNumber: 96 },
    Bk: { massNumber: 247, atomicNumber: 97 },
    Cf: { massNumber: 251, atomicNumber: 98 },
    Es: { massNumber: 252, atomicNumber: 99 },
    Fm: { massNumber: 257, atomicNumber: 100 },
    Md: { massNumber: 258, atomicNumber: 101 },
    No: { massNumber: 259, atomicNumber: 102 },
    Lr: { massNumber: 262, atomicNumber: 103 },
    Rf: { massNumber: 267, atomicNumber: 104 },
    Db: { massNumber: 270, atomicNumber: 105 },
    Sg: { massNumber: 271, atomicNumber: 106 },
    Bh: { massNumber: 270, atomicNumber: 107 },
    Hs: { massNumber: 277, atomicNumber: 108 },
    Mt: { massNumber: 276, atomicNumber: 109 },
    Ds: { massNumber: 281, atomicNumber: 110 },
    Rg: { massNumber: 280, atomicNumber: 111 },
    Cn: { massNumber: 285, atomicNumber: 112 },
    Nh: { massNumber: 284, atomicNumber: 113 },
    Fl: { massNumber: 289, atomicNumber: 114 },
    Mc: { massNumber: 288, atomicNumber: 115 },
    Lv: { massNumber: 293, atomicNumber: 116 },
    Ts: { massNumber: 294, atomicNumber: 117 },
    Og: { massNumber: 294, atomicNumber: 118 }
};

// Funkcja do obliczania masy cząsteczkowej związku chemicznego
function calculateMolecularWeight(compound) {
    let regex = /([A-Z][a-z]*)(\d*)/g;
    let match;
    let totalMass = 0;
    
    while ((match = regex.exec(compound)) !== null) {
        let element = match[1];
        let count = match[2] ? parseInt(match[2]) : 1;
        
        if (elementsData[element]) {
            totalMass += elementsData[element].massNumber * count;
        } else {
            return `Nieznany pierwiastek: ${element}`;
        }
    }
    return totalMass;
}
function calculateAndDisplay() {
    let compound = document.getElementById("compound").value;
    let result = calculateMolecularMass(compound) * document.getElementById("NUM").value;
    document.getElementById("odp").innerText = result;
}