/* Объекты
Написать функцию, которая принимает объект query параметров и возвращает строку для вставки:
{
  search: 'Вася',
  take: 10,
}
// search=Вася&take=10
В git создать папку: 13-query
*/
const query = {
  search: "Вася",
  take: 10,
};

function buildQueryString(obj) {
  return Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join("&");
};

const queryString = buildQueryString(query);

console.log(queryString);

let a = { name: 'Антон' };
let b = a;
b.id = 1;
console.log(a);