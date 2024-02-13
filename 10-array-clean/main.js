/*
Функции высшего порядка
Напишите функцию, которая принимает:
- Массив чисел
- Функцию удаления элементов
И возвращает отфильтрованный массив. При это функция удаления элементов принимает число и возвращает true, если его надо удалить и false, если надо оставить.
В git создать папку: 10-array-clean
Эта функция принимает массив чисел и вторую функцию. Если элемент массива при передачи во вторую функцию возвращает true, то значит в новом массиве элемент удаляем, если false, оставляем.
*/

const array = [1, 2, 3, 4, 5, 6, 5, 5];

const cleanArray = (arr) => {
  let newArray = [];
  return function (el) {
    if (arr.indexOf(el) >= 0) {
      console.log(true);
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== el) {
          newArray.push(arr[i]);
        }
      }
      return newArray;
    }
    if (arr.indexOf(el) <= 0) {
      console.log(false);
      newArray = arr.slice();
      return newArray;
    }
  };
};

console.log(cleanArray(array)(5));
