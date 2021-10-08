// подключаем модуль
let express = require('express');

// запускаем модуль
let app = express();

// устанавливаем загаловок view engine в значения ejs
app.set('view engine', 'ejs');
// устанавливаем путь к статическим файлам
app.use(express.static('public'));

// запросы HTTP GET по указанному пути с указанными функциями обратного вызова.
app.get('/', (reg, res) => {

  // отдавем визуальный вид клиенту (HTML).
  res.render('index');

  // завершает процесс ответа.
  // res.end('Hello');
})

// запискаем сервер на порту 3000
app.listen(3000, () => {
  console.log("Сервер старт!");
})
