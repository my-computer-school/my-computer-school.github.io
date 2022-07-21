function fetchPage1(name){
  fetch(name).then(function(response){
    response.text().then(function(text){
      document.querySelector('#article1').innerHTML = text;
    })
  })
}

function fetchPage2(name2){
  fetch(name2).then(function(response){
    response.text().then(function(text){
      document.querySelector('#header2').innerHTML = text;
    })
  })
}