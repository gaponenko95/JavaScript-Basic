const addressLat = 43;
const addressLong = 131;
const positionLat = 46;
const positionLong = 142;

const calcLong = positionLong - addressLong;
const calcLat = positionLat - addressLat;

const distance = Math.sqrt(Math.pow(calcLong, 2) + Math.pow(calcLat, 2));

console.log(`${distance} км`)