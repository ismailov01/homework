// Запросы, XMLHttpRequest, AJAX. Домашняя работа

/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch или ajax. Отобразите на странице имена персонажей из 
Рика и Морти в list. 
let block1 = $('.block1');
let list = $('.list');
(Вы можете стилизовать страницу по желанию.)
*/

/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/

let block1 = $('.block1');
let list = $('.list');
let api = 'https://rickandmortyapi.com/api/character'
fetch(api)
  .then(response => response.json())
  .then(data => {
    let result = data.results
    // console.log(result);
    result.forEach(item => {
      list.append(`<li>${item.name}</li><img width="150px" src="${item.image}">`)
    })
  })

/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/


function sendDates() {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        fetch("http://localhost:3000/characters", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
      });
  }
  sendDates();

/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.
let block2 = $('.block2');
let list2 = $('.list2');
*/

let block2 = $('.block2');
let list2 = $('.list2');
fetch('http://localhost:3000/characters')
  .then((response) => response.json())
  .then(data => {
      let get = data[1].results
        get.forEach((item) => {
        list2.append(`<li>${item.name}</li><img width="150px" src="${item.image}">`)
    });
  });

/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/
