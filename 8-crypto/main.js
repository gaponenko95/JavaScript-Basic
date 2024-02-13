/*
Массивы
Написать 2 функции:
- шифратор пароля - функция принимает пароль, разбивает по символам, меняет местами какие-то буквы по заданному алгоритму и возвращает строку.
- проверка пароля - принимает зашифрованный пароль и второй пароль. Воспроизводит алгоритм назад на зашифрованном пароле и возвращает true, если он совпадает со втором паролем и false, если нет.

crypto('password') -> ssapdorw 
check('ssapdorw, 'password') -> true 
check('ssapdorw', 'wrong') -> false

B git создать папку: 8-crypto
*/

"use strict";

function encryptPassword(password) {
  if (password.length <= 5) {
    return;
  }

  const reversedChars = password.split("").reverse();
  const extractedChars = reversedChars.splice(2, 3);
  const combinedChars = reversedChars.concat(extractedChars);
  const encryptedPassword = combinedChars.join("");

  return encryptedPassword;
}

function checkPassword(encryptedPassword, originalPassword) {
  const encryptedChars = encryptedPassword.split("");
  const extractedEndChars = encryptedChars.splice(-3);
  const extractedStartChars = encryptedChars.splice(0, 2);
  const rearrangedPassword = extractedStartChars
    .concat(extractedEndChars)
    .concat(encryptedChars)
    .reverse();
  const decryptedPassword = rearrangedPassword.join("");

  return decryptedPassword === originalPassword;
}

console.log(encryptPassword("passwsasdasdasdasdord"));

console.log(checkPassword("dradsadsadsaswssapods", "passwsasdasdasdasdord"));
