let div = document.getElementById("message");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn-2");

let myNumber = document.querySelector(".my-number");
let cNumber = document.querySelector(".computer-number");
let eNumber = document.querySelector(".equal-number");

btn.addEventListener("click", Game);
btn2.addEventListener("click", Clear);

function Clear() {
  location.reload();
}

function Game() {
  //Variables
  let array1 = [];
  let array2 = [];
  let equal_number = 0;

  //Richiesta dei numeri all'utente
  function personalNumber() {
    while (array2.length < 10) {
      let n = parseInt(prompt("Inserisci un numero da 1 a 90"));

      if (n > 90 || n < 1 || array2.includes(n) || isNaN(n)) {
        array2.pop(n);
        n = prompt("Inserisci un numero da 1 a 90");
      } else {
        array2.push(n);
      }
    }

    return array2;
  }

  //Spawn random dei numeri degli array senza ripetizioni
  function randomNumber() {
    while (array1.length < 10) {
      random_number = Math.floor(Math.random() * 90) + 1;

      if (array1.includes(random_number)) {
        array1.pop(random_number);
        array1.push(Math.floor(Math.random() * 90) + 1);
      } else {
        array1.push(random_number);
      }
    }
    return array1;
  }

  randomNumber();
  personalNumber();
  console.log(array1);
  console.log(array2);

  //Comparazione dei due array con opportuni risultati
  for (let i = 0; i < 10; i++) {
    if (array2.includes(array1[i])) {
      equal_number += 1;
      if (equal_number == 2) {
        div.innerHTML += "<p>Hai fatto ambo</p>";
      } else if (equal_number == 3) {
        div.innerHTML += "<p>Hai fatto terna</p>";
      } else if (equal_number == 4) {
        div.innerHTML += "<p>Hai fatto quaterna</p>";
      } else if (equal_number == 5) {
        div.innerHTML += "<p>Hai fatto cinquina</p>";
      } else if (equal_number == 10) {
        div.innerHTML += "<p>Hai fatto tombola</p>";
      }
    }
  }

  if (
    equal_number != 2 &&
    equal_number != 3 &&
    equal_number != 4 &&
    equal_number != 5 &&
    equal_number != 10
  ) {
    div.innerHTML += "<p>Non hai fatto niente :(</p>";
  }

  function equalNumber(arrayOne, arrayTwo) {
    const equal = [];

    for (let i = 0; i < arrayOne.length; i++) {
      const number = arrayOne[i];
      if (arrayTwo.includes(number)) {
        equal.push(number);
      }
    }

    return equal;
  }

  const result = equalNumber(array1, array2);

  array2.forEach((element) => {
    myNumber.innerHTML += "<p>" + element + "</p>";
  });

  array1.forEach((element) => {
    cNumber.innerHTML += "<p>" + element + "</p>";
  });

  eNumber.innerHTML += "<p>" + result + "</p>";
}
