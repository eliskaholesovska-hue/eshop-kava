/* ==========================================
   1. POČÍTADLO V KOŠÍKU
   ========================================== */
// Počítadlo, které si pamatuje, kolik věcí už máme v košíku
let pocetKs = 0;

// Najdeme všechna tlačítka "Přidat do košíku"
const tlacitkaKosik = document.querySelectorAll("button");

// Pro každé tlačítko nastavíme reakci na kliknutí
tlacitkaKosik.forEach(function(tlacitko) {
    tlacitko.addEventListener("click", function() {
        // Kontrolujeme, jestli text na tlačítku je "Přidat do košíku"
        if (tlacitko.textContent === "Přidat do košíku") {
            pocetKs++; // Přičteme 1 k počtu kusů
            alert("Produkt byl přidán do košíku! V košíku máte: " + pocetKs + " ks.");
        }
    });
});


/* ==========================================
   2. KONTROLA FORMULÁŘE (VALIDACE)
   ========================================== */
// Najdeme náš kontaktní formulář podle jeho ID
const formular = document.getElementById("kontaktni-formular");

// Pokud formulář na stránce existuje, hlídáme jeho odeslání
if (formular) {
    formular.addEventListener("submit", function(udalost) {
        const jmenoInput = document.getElementById("jmeno").value;

        // Pokud je políčko jména prázdné
        if (jmenoInput === "") {
            udalost.preventDefault(); // Zastavíme odeslání formuláře
            alert("Prosím vyplňte své jméno, než zprávu ošlete!");
        }
    });
}


/* ==========================================
   3. PŘEPÍNAČ TMAVÉHO REŽIMU (DARK MODE)
   ========================================== */
// Vytvoříme si tlačítko pro přepínání režimu přímo v JavaScriptu a přidáme ho na stránku
const prepinacTlacitko = document.createElement("button");
prepinacTlacitko.textContent = "🌙 Přepnout režim";
prepinacTlacitko.style.position = "fixed";
prepinacTlacitko.style.bottom = "20px";
prepinacTlacitko.style.right = "20px";
prepinacTlacitko.style.zIndex = "1000";
document.body.appendChild(prepinacTlacitko);

// Když na tlačítko uživatel klikne, přepneme třídu "dark-mode" na celém tělu webu
prepinacTlacitko.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
