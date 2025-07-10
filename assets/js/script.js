const kmInput = document.getElementById("km");
const ageSelect = document.getElementById("age");
const calcolaButton = document.getElementById("submit-button");
const result = document.getElementById("result");

calcolaButton.addEventListener("click", (e) => {
  e.preventDefault();
  const km = parseFloat(kmInput.value);
  const age = ageSelect.value;
  const priceKm = 0.21;
  let prezzoTotale = km * priceKm;

  if (age === "minorenne") {
    prezzoTotale *= 0.8; // sconto del 20%
  } else if (age === "over65") {
    prezzoTotale *= 0.6; // sconto del 40%
  }

  result.innerText = `Il prezzo totale del biglietto è: ${prezzoTotale.toFixed(2)} €`;
});