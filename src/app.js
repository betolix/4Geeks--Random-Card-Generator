/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const suits = ["&spades;", "&clubs;", "&hearts;", "&diams;"];

  let newNumber = document.querySelector(".number");

  let newSuitA = document.querySelector(".suitA");
  let newSuitB = document.querySelector(".suitB");

  function randomCard(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  function card() {
    let number = numbers[randomCard(numbers)];
    let suit = suits[randomCard(suits)];

    newNumber.innerHTML = number;
    newSuitA.innerHTML = suit;
    newSuitB.innerHTML = suit;

    if (suit == "&hearts;" || suit == "&diams;") {
      newSuitA.style.color = "red";
      newSuitB.style.color = "red";
      newNumber.style.color = "red";
    }
  }

  //
  card();
};
