// подключаем модуль
const rp = require('request-promise');

// экспортируем модуль
module.exports = async function(city = ''){

  // если поля пустое выкидываем исключения и остонавливаем работу приложения
  if(!city){
    throw new Error("Имя города не может быть пустым")
  }

  // выводим город
  console.log('City:', city);
}
