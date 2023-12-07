document.addEventListener("DOMContentLoaded", function () {
  const extractButton = document.getElementById("extractButton");
  const extractedNumbersList = document.getElementById("extractedNumbers");
  const cells = document.querySelectorAll("#tombola-table td");

  // Aggiunta di numeri da 1 a 99 alla tabella
  const table = document
    .getElementById("tombola-table")
    .getElementsByTagName("tbody")[0];
  let cellCount = 1;

  // conteggio delle righe
  for (let i = 0; i < 10; i++) {
    const row = table.insertRow(i);

    // conteggio delle colonne
    for (let j = 0; j < 10; j++) {
      const cell = row.insertCell(j);
      cell.textContent = cellCount++;
    }
  }

  // Riferimento extractButton del HTML, quando viene eseguito genera numeri da 1 a 99
  extractButton.addEventListener("click", function () {
    const randomNumber = getRandomNumber();

    // Cerca tutte le caselle nella tabella e in "TEORIA" con il CSS e dovrebbe evidenziare la casella del numero estratto
    highlightCell(randomNumber);

    // Chiama il numero estratto e lo inserisce nella lista
    displayExtractedNumber(randomNumber);
  });

  // Restituisce un numero casuale compreso tra 1 e 99
  function getRandomNumber() {
    return Math.floor(Math.random() * 99) + 1;
  }

  // Evidenzia la cella corrispondente al numero estratto
  function highlightCell(number) {
    cells.forEach((cell) => {
      if (parseInt(cell.textContent) === number) {
        cell.classList.add("highlighted"); // Aggiunge la classe "highlighted" per evidenziare la casella
      }
    });
  }

  // Prende un numero e lo mostra nella lista degli estratti
  function displayExtractedNumber(number) {
    // Crea un nuovo elemento di lista (<li>) per contenere il numero estratto
    const listItem = document.createElement("li");
    listItem.textContent = `Numero Estratto: ${number}`;

    // Aggiunge l'elemento della lista alla lista già esistente con l'ID "extractedNumbers".
    extractedNumbersList.appendChild(listItem);
  }
});
