// подключаем модуль
let express = require('express');
let bodyParser = require('body-parser');

// импортируем самописный модуль
let weatherRequest = require('./requests/weather.request');


// запускаем модуль
let app = express();

//828451a13a1cbf889f1ea0fc17944516

// устанавливаем загаловок view engine в значения ejs
app.set('view engine', 'ejs');
// устанавливаем путь к статическим файлам
app.use(express.static('public'));
// настройка для того что бы парсить данные в req.body
app.use(bodyParser.urlencoded({extended : true}))

// запросы HTTP GET по указанному пути с указанными функциями обратного вызова.
app.get('/', (req, res) => {

  // отдавем визуальный вид клиенту (HTML).
  res.render('index');

  // завершает процесс ответа.
  // res.end('Hello');
})

// запросы HTTP POST по указанному пути с указанными функциями обратного вызова. (для отправки данных формы)
app.post('/', (req, res) =>{

  // деструктурируем обьект req.body
  let { city } = req.body;

  // вызываем функцию и передаем ей город
  weatherRequest(city);

  // отдавем визуальный вид клиенту (HTML).
  res.render('index');
})

// запискаем сервер на порту 3000
app.listen(3000, () => {
  console.log("Сервер старт!");
})
