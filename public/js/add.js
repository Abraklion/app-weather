const forms = document.querySelector(".app__form");

forms.addEventListener('submit',function (e){

  e.preventDefault();

  if(document.querySelector('.app__error')){
    document.querySelector('.app__error').parentNode.removeChild(document.querySelector('.app__error'))
  }

  if(document.querySelector('.app__options')){
    document.querySelector('.app__options').parentNode.removeChild(document.querySelector('.app__options'))
  }

  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: `city=${forms.querySelector('#city').value}`
  }

  fetch('/', options).then(res => {

    if(res.ok){
      return res.json();
    }

    throw new Error("Сервер ответил ошибкой");

  }).then(data => {

    if(data.weather){

      const elem = document.createElement('DIV');
      elem.classList.add('app__options');
      elem.innerHTML = `
        <p class="app__city">${data.weather.city}</p>
        <p class="app__celsius">${data.weather.celsius} &#8451;</p>
      `;

      document.querySelector('.app__header').insertBefore(elem, forms);

      return true;
    }

    if(data.error){

      const elem = document.createElement("P");

      elem.classList.add("app__error");
      elem.innerText = data.error;

      document.querySelector('.app__header').insertBefore(elem, forms);

      return true;
    }

  }).catch(err => {

    console.log(err);

  });

});
