const name = document.getElementById("name");
const kmInput = document.getElementById("km");
const ageSelect = document.getElementById("age");
const submitButton = document.getElementById("submit-button");
const result = document.getElementById("result");

submitButton.addEventListener("click", (e) => {
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

  result.innerText = `${prezzoTotale.toFixed(2)} €`;
  document.getElementById("name-info").innerText = name.value;
  document.getElementById("carriage").innerText = Math.floor(Math.random() * 20 + 1);
  document.getElementById("cp-code").innerText = Math.floor(Math.random() * 100000);
});


