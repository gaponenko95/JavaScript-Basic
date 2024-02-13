/* 
Дан массив строк [`10-02-2022`, `тест`, `11/12/2023`, `00/13/2022`, `41/12/2023`]
Необходимо написать функцию, которая бы удаляла бы из массива все строки,
которые нельзя перевести в дату (можно:10-02-2022 11/12/2023)
и возвращала бы новый массив вида:
- [`10-02-2022`, `12-11-2023`] 

1. фильтрация массива на подходящие значения filteringSuitableValues
2. исключить неподходящий формат даты suitableDateFormat
3. выбрать неподходящий формат даты и перевести в подходящий notSuitableDateFormat
4. соеденить два массива с датами result
*/

const arr = [
  "10-02-2022",
  "16-08-2022",
  "тест",
  "11/12/2023",
  "00/13/2022",
  "41/12/2023",
  "48/14/2022",
  "05/05/2000",
];

function transformDateStringToArray(dateString) {
  let [month, day, year] = dateString.split("/");

  if (!year) {
    [day, month, year] = dateString.split("-");
  }

  if (!year || isNaN(day) || isNaN(month) || isNaN(year)) {
    return null;
  }

  return [day, month, year];
}

function checkCorrectDate(dateArray) {
  const LONG_MONTH_ARRAY = [1, 3, 5, 7, 8, 10, 12];

  function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  }

  const [day, month, year] = dateArray.map((dateEl) => Number(dateEl));

  if (month > 12 || month < 1) {
    return false;
  }

  if (day > 31 || day < 1) {
    return false;
  }

  if (day === 31 && !LONG_MONTH_ARRAY.includes(month)) {
    return false;
  }

  if (month === 2) {
    if (day === 30 || (day === 29 && !isLeapYear(year))) {
      return false;
    }
  }

  return true;
}

function checkDateFormat(date) {
  if (typeof date !== "string") {
    return false;
  }

  const dateNumbersArray = transformDateStringToArray(date);

  if (dateNumbersArray === null) {
    return false;
  }

  if (dateNumbersArray.some((number) => !number || !(Number(number) >= 0))) {
    return false;
  }

  if (!checkCorrectDate(dateNumbersArray)) {
    return false;
  }

  return true;
}

function getDates(arr) {
  const resultArr = [...arr];
  return resultArr
    .filter(checkDateFormat)
    .map((filteredDate) => transformDateStringToArray(filteredDate).join("-"));
}

const result = getDates(arr);

console.log(result);
