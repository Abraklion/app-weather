// подключаем модуль
let express = require('express');
let bodyParser = require('body-parser');

// запускаем модуль
let app = express();

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

  // выводим названия города в консоль
  console.log(city);

  // отдавем визуальный вид клиенту (HTML).
  res.render('index');
})

// запискаем сервер на порту 3000
app.listen(3000, () => {
  console.log("Сервер старт!");
})
