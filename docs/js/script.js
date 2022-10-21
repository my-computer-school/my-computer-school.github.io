function fetchPage1(name){
  fetch(name).then(function(response){
    response.text().then(function(text){
      document.querySelector('.nav1').innerHTML = '';
      document.querySelector('.header2').innerHTML = '';
      document.querySelector('.article1').innerHTML = text;
    })
  })
}

function fetchPage2(name2){
  fetch(name2).then(function(response){
    response.text().then(function(text){
      document.querySelector('.nav1').innerHTML = text;
      document.querySelector('.header2').innerHTML = '';
      document.querySelector('.article1').innerHTML = '';
    })
  })
}

function fetchPage3(name3){
  fetch(name3).then(function(response){
    response.text().then(function(text){
      document.querySelector('.header2').innerHTML = text;
    })
  })
}

function fetchPage4(name4){
  fetch(name4).then(function(response){
    response.text().then(function(text){
      document.querySelector('.header2').innerHTML = text;
    })
  })
}

function fetchPage5(name5){
  fetch(name5).then(function(response){
    response.text().then(function(text){
      document.querySelector('.article1').innerHTML = text;
    })
  })
}

const name15 = "Copyright 2021 - 2022"
document.querySelector('.footer1').innerHTML = name15;
