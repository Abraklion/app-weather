// подключаем модуль
const rp = require('request-promise');

// экспортируем модуль
module.exports = async function(city = ''){

  // если поля пустое выкидываем исключения и остонавливаем работу приложения
  if(!city){
    throw new Error("Имя города не может быть пустым")
  }

  // Api ключ
  const KEY = '828451a13a1cbf889f1ea0fc17944516';
  const uri = `http://api.openweathermap.org/data/2.5/weather`;

  // параметры запроса, беруться из request-promise : https://www.npmjs.com/package/request-promise
  const options = {
    uri,
    qs:{
      appid: KEY,
      q: city,
      units: 'imperial'
    },
    json: true
  }

  try {

    // запрос по api к приложению с погодой
    const data = await rp(options);

    // формула переводит кельвины в цельсиа
    const celsius = ((data.main.temp - 32) * 5/9).toFixed(0);

    // возвращаем объект
    return {
      weather: `${data.name}: ${celsius}`,
      error: null
    }

  } catch (err) {

    // возвращаем объект
    return {
      weather: null,
      error: err.message
    }

  }


}
