function fetchPage1(name){
  fetch(name).then(function(response){
    response.text().then(function(text){
      document.querySelector('#article1').innerHTML = text;
      document.querySelector('#nav1').innerHTML = '';
    })
  })
}

function fetchPage2(name2){
  fetch(name2).then(function(response){
    response.text().then(function(text){
      document.querySelector('#nav1').innerHTML = text;
      document.querySelector('#article1').innerHTML = '';
    })
  })
}