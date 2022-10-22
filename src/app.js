/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let posPron = Math.floor(Math.random() * pronoun.length);
  let posAdj = Math.floor(Math.random() * pronoun.length);
  let posNoun = Math.floor(Math.random() * pronoun.length);

  let domain = pronoun[posPron] + adj[posAdj] + noun[posNoun] + ".com";

  console.log(domain);
  console.log("Hello Rigo from the console!");
};
