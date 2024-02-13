/*
Работа со строками
Написать функцию проверки номера карты алгоритмом Луна. В функцию передаётся карта: 4561-2612-1234-5464, а функция возвращает true, если карта проходит алгоритм и false, если нет.
В git создать папку: 12-luna
*/

const cardNumber = "4561-2612-1234-5464";

function isLuhnValid(cardNumber) {
  const cleanedCardNumber = cardNumber.replace(/\D/g, "");

  const digits = cleanedCardNumber.split("").map(Number);

  for (let i = digits.length - 2; i >= 0; i -= 2) {
    digits[i] *= 2;
    if (digits[i] > 9) {
      digits[i] -= 9;
    }
  }

  const sum = digits.reduce((acc, curr) => acc + curr, 0);

  return sum % 10 === 0;
}

console.log(isLuhnValid(cardNumber));