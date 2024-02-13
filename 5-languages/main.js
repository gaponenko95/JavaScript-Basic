const langSelector = prompt("Please, select a language: Ru, Eng, De!");

switch (langSelector) {
  case "Ru":
    console.log("Добро пожаловать!");
    break;
  case "Eng":
    console.log("Welcome!");
    break;
  case "De":
    console.log("Willkommen!");
    break;
  default:
    console.log("error");
}