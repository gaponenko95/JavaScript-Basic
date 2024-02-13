/* 
Очень интересное решение, спасибо за подсказку, 
если честно, сам бы не догодался! 
*/
const currencyConverter = (amount, from, to) => {
  switch (`${from}/${to}`) {
    case "RUB/USD":
      return amount / 88;
    case "USD/RUB":
      return amount * 88;
    case "RUB/EUR":
      return amount / 96;
    case "EUR/RUB":
      return amount * 96;
    case "USD/EUR":
      return amount / 1.1;
    case "EUR/USD":
      return amount * 1.1;
    case "EUR/EUR":
      return amount;
    case "USD/USD":
      return amount;
    case "RUB/RUB":
      return amount;
    default:
      return null;
  }
};

console.log(currencyConverter(1000, "USD", "RUB"));
