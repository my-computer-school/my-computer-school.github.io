function fetchPage(name){
  fetch(name).then(function(response){
    response.text().then(function(text){
      document.querySelector('#article1').innerHTML = text;
    })
  })
}