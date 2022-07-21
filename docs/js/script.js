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

function fetchPage3(name3){
  fetch(name3).then(function(response){
    response.text().then(function(text){
      document.querySelector('#article1').innerHTML = text;
    })
  })
}

function fetchPage4(name4){
  fetch(name4).then(function(response){
    response.text().then(function(text){
      document.querySelector('#article1').innerHTML = text;
    })
  })
}