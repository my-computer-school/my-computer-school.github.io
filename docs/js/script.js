/*
docs/index.html 20 - 51
docs/html/index.html 
*/

function fetchPage1(name){
  fetch(name).then(function(response){
    response.text().then(function(text){
      document.querySelector('.navbar').innerHTML = '';
      document.querySelector('.header2').innerHTML = '';
      document.querySelector('.article1').innerHTML = text;
    })
  })
}

function fetchPage2(name2){
  fetch(name2).then(function(response){
    response.text().then(function(text){
      document.querySelector('.navbar').innerHTML = text;
      document.querySelector('.header2').innerHTML = '';
      document.querySelector('.article1').innerHTML = '';
    })
  })
}

function fetchPage3(name3){
  fetch(name3).then(function(response){
    response.text().then(function(text){
      document.querySelector('.header2').innerHTML = text;
			document.querySelector('.article1').innerHTML = '';
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



let js1Id1 = document.querySelector('#js1Id1');  /* https://youtu.be/v1mwP4X9zEk?list=PLG7te9eYUi7tS_nx58Z1Zi9Iqt0JEQ1Is */
js1Id1.onclick = function(){
	js1Id1.style.color = 'red';
}

let js2Id1 = document.querySelector('#js2Id1');  // https://youtu.be/v1mwP4X9zEk?list=PLG7te9eYUi7tS_nx58Z1Zi9Iqt0JEQ1Is
js2Id1.onclick = function(){
	let toDay = new Date();
	alert(toDay);
}
let js2Id2 = document.querySelector('#js2Id2');
js2Id2.onclick = function(){
	alert('hello');
}
let js2Id3 = document.querySelector('#js2Id3');
js2Id3.onclick = function(){
	confirm('배경 이미지를 바꾸시겠습니까?');
}
let js2Id4 = document.querySelector('#js2Id4');
js2Id4.onclick = function(){
	prompt('당신의 이름을 입력하세요.');
}
let js2Id5 = document.querySelector('#js2Id5');
js2Id5.onclick = function(){
	document.write('hello');
}
let js2Id6 = document.querySelector('#js2Id6');
js2Id6.onclick = function(){
	console.log('hello world');
}

let js5Id1 = document.querySelector('#js5Id1');
js5Id1.onclick = function(){
	var currentYear = 2022;
	var birthYear;
	var age;
	birthYear = prompt('태어난 연도를 입력하세요.');
	age = currentYear - birthYear + 1;
	document.write(currentYear + '년 현재<br>');
	document.write(birthYear + '년에 태어난 사람의 나이는' + age + '세입니다.');
}

let js6Id1 = document.querySelector('#js6Id1');
js6Id1.onclick = function(){
	var currentYear = prompt('현재 연도를 입력하세요.');
	var birthYear = prompt('태어난 연도를 입력하세요.');
	var age = currentYear - birthYear + 1;
	alert('당신의 나이는 만으로 ' + age + '세 입니다.');
}

let js10Id1 = document.querySelector('#js10Id1');
js10Id1.onclick = function(){
	let js10Let = prompt('숫자를 입력하면 3의 배수인지 알려드릴게요.');
	if(js10Let !== null){
		if(js10Let % 3 === 0){
			alert('3의 배수입니다.');
		} else {
			alert('3의 배수가 아닙니다.');
		}
	} else {
		alert('값을 입력해주세요.');
	}
}

let js11Id1 = document.querySelector('#js11Id1');
js11Id1.onclick = function(){
	let js11Let2 = prompt('첫번째 숫자를 입력하세요.');
	let js11Let3 = prompt('두번째 숫자를 입력하세요.');
	if(js11Let2 !== null && js11Let3 !== null){
		if(js11Let2 < 10 || js11Let3 < 10){
			alert('두 수 중 하나는 10보다 작습니다.');
		} else {
			alert('10보다 작은 숫자가 없습니다.')
		}
	} else {
		alert('값을 입력하세요.');
	}
}

let js12Id1 = document.querySelector('#js12Id1');    // https://youtu.be/Z3bQjfObI5Y?list=PLG7te9eYUi7tS_nx58Z1Zi9Iqt0JEQ1Is
js12Id1.onclick = function(){
	let js12Let1 = prompt('1학년은 1, 2학년은 2, 3학년은 3을 입력하세요.');
	switch(js12Let1){
		case '1': alert('1학년은 시청각실에 모여주세요.')
			break;
		case '2': alert('2학년은 체육관에 모여주세요.')
			break;
		case '3': alert('3학년은 도서관에 모여주세요.')
			break;
		default: alert('지정된 숫자를 입력하세요.');
	}
}

let js13Id1 = document.querySelector('#js13Id1');
js13Id1.onclick = function(){
	var sum = 0;
	sum = sum + 1;
	sum = sum + 2;
	sum = sum + 3;
	sum += 4;
	sum = sum + 5;
	alert('1부터 5까지 더하면' + sum + ' 입니다.');
}

let js14Id1 = document.querySelector('#js14Id1');
js14Id1.onclick = function(){
	let js14Let1 = parseInt(prompt('연속 더할 첫번째 숫자를 입력하세요.'));  // parseInt 는 문자열을 숫자로 변환 
	let js14Let2 = parseInt(prompt('연속 더할 마지막 숫자를 입력하세요.'));
	let js14I = 0;
	let js14Sum = 0;
	for(js14I = js14Let1; js14I < js14Let2 + 1; js14I++){
		js14Sum = js14Sum + js14I;	
	}
	alert(js14Let1 + '부터' + js14Let2 + '까지의 합은 ' + js14Sum + ' 입니다.');	
}

let js15Id1 = document.querySelector('#js15Id1');
js15Id1.onclick = function(){
	let js15Let1 = parseInt(prompt('첫번째 숫자를 입력하세요.'));  // parseInt 는 문자열을 숫자로 변환 
	let js15Let2 = prompt('사칙연산 + * 을 입력하세요.');
	let js15Let3 = parseInt(prompt('마지막 숫자를 입력하세요.'));
	if(js15Let2 == '+'){
		let js15I = 1;
		let js15Sum = 0;
		for(js15I = js15Let1; js15I < js15Let3 + 1; js15I++){
			js15Sum = js15Sum + js15I;	
		}
		alert(js15Let1 + '부터' + js15Let3 + '까지의 합은 ' + js15Sum + ' 입니다.');
	} else if(js15Let2 == '*'){	
		let js15I = 1;
		let js15Sum = 1;
		for(js15I = js15Let1; js15I < js15Let3 + 1; js15I++){
			js15Sum = js15Sum * js15I;	
		}
		alert(js15Let1 + '부터' + js15Let3 + '까지의 곱은 ' + js15Sum + ' 입니다.');
	} else {
		alert('값을 입력바랍니다.');
	}
}

let js16Id1 = document.querySelector('#js16Id1');
js16Id1.onclick = function(){
	let i, j;
	for(i = 1; i <= 9; i++){
		document.write('<div>');
		document.write('<h3>' + i + '단</h3>');
		for(j = 1; j <= 9; j++){
			document.write(i + ' x ' + j + ' = ' + i*j + '<br>');
		}
		document.write('</div>');
	}
}

let js17Id1 = document.querySelector('#js17Id1');
js17Id1.onclick = function(){
	let i, j;
	for(i = 1; i <= 9; i++){
		document.write('<div>');
		document.write('<h3>' + i + '단</h3>');
		for(j = 1; j <= 9; j++){
			document.write(i + ' x ' + j + ' = ' + i*j + '<br>');
		}
		document.write('</div>');
	}
}

let js18Id1 = document.querySelector('#js18Id1');
js18Id1.onclick = js18Function;
function js18Function(){
	let n = prompt('1부터 몇까지 곱할까요.');
	if(n !== null){
		let fact = 1;  // 결과값
		let i = 1;  // 카운터
		while(i <= n){
			fact = fact * i;
			i++;
		}
		alert(fact);
	} else {
		alert('값을 입력하세요.');
	}
}

function js20AddNumber(num1, num2) {  // num1, num2 는 매개변수
	let sum = num1 + num2;
	return sum;  // sum을 함수 실행 부분으로 보내준다
}
let result = js20AddNumber(10, 30);  // 10, 30 은 인수
alert('js20 두 수의 합은 : ' + result);

let js22Id1 = document.querySelector('#js22Id1');
js22Id1.onclick = (function(){
	let userName = prompt('id=js22 이름을 입력하세요.');
	document.write('안녕하세요 ' + userName + '님');
});

(function(num1, num2){
	sum = num1 + num2;
}(10, 20));
alert('js23 실행결과 : ' + sum);

const js24Id1 = function(){
	alert('js24Id1 안녕하세요.');
}
js24Id1();

let js25 = () => {alert('js25 안녕하세요.');};
js25();

let js26 = (user) => {alert('js26' + user + '님 안녕하세요.');};
js26('경희');

let js27 = (num1, num2) => num1 + num2;
alert('js27 두 수의 합은 : ' + js27(20,50));

let js28Click = document.querySelector('#js28Click');
js28Click.onclick = function(){
	alert('click 버튼은 클릭했습니다.');
}

let js28Dblclick = document.querySelector('#js28Dblclick');
js28Dblclick.ondblclick = function(){
	alert('dblclick 버튼은 클릭했습니다.');
}

let js28Mousedown = document.querySelector('#js28Mousedown');
js28Mousedown.onmousedown = function(){
	alert('mousedown 버튼은 클릭했습니다.');
}

let js28Mousemove = document.querySelector('#js28Mousemove');
js28Mousemove.onmousemove = function(){
	alert('mousemove 버튼은 클릭했습니다.');
}

let js28Mouseover = document.querySelector('#js28Mouseover');
js28Mouseover.onmouseover = function(){
	alert('mouseover 버튼은 클릭했습니다.');
}

let js29Button1 = document.querySelector('#js29Button1');
js29Button1.onclick = js29Color;
function js29Color(){
	let js29Id2 = document.querySelector('#js29Id2');
	js29Id2.style.backgroundColor = 'green';
}
let js29Button2 = document.querySelector('#js29Button2');
js29Button2.onclick = js29Color2;
function js29Color2(){
	let js29Id2 = document.querySelector('#js29Id2');
	js29Id2.style.backgroundColor = 'orange';
}

function js30Function(color){
	let js30Id2 = document.querySelector('#js30Id2');
	js30Id2.style.backgroundColor = color;
}

let js31Button = document.querySelector('#js31Button');
js31Button.onclick = js31Function;
function js31Function(){
	document.querySelector('#js31Div').style.color = 'green';
}

let js32 = document.querySelector('#js32');
js32.onclick = js32Function;
function js32Function(){
	let now = new Date();  // 변수 now 에 대입한다 Date 객체의 인스턴스를 만들어서
	alert('현재 시각은 ' + now.toLocaleString());  // 메서드는 ()가 있고, 프로퍼티는 ()가 없다.
}                                               // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects

let js33Id1 = document.querySelector('#js33Id1');
js33Id1.onclick = js33Function;
function js33Function(){
	let now = new Date();  // 변수 now에 대입한다 객체 인스턴스 내장객체 Date()
	let firstDay = new Date('2022-05-01');  // 변수 firstDay에 대입한다 시작 날짜를
	let toNow = now.getTime();  // 1970-01-01부터 오늘까지 시간(밀리초)
	let toFirst = firstDay.getTime();    // 1970-01-01부터 2022-05-01까지 시간(밀리초)
	let passedTime = toNow - toFirst;  // 2022-05-01부터 오늘까지 시간(밀리초)
	passedTime = Math.round(passedTime/(1000*60*60*24));  // 밀리초를 일 수로 계산
	document.querySelector('#js33Id2').innerText = passedTime;
}

let js36Id1 = document.querySelector('#js36Id1');
js36Id1.onclick = js36Function;
function js36Function(){
	window.open('notice.html', 'notice', 'width=500, height=400');
}

let js37Id1 = document.querySelector('#js37Id1');
js37Id1.onclick = js37Function;
function js37Function(){
	document.getElementById('js37Id2').innerHTML = 'Screen width : ' + screen.width + 'px';
	document.getElementById('js37Id3').innerHTML = 'Screen height : ' + screen.height + 'px';
	document.getElementById('js37Id4').innerHTML = 'Available Screen width : ' + screen.availWidth + 'px';
	document.getElementById('js37Id5').innerHTML = 'Available Screen height : ' + screen.availHeight + 'px';
	document.getElementById('js37Id6').innerHTML = 'Screen 방향 : ' + screen.orientation;
}

function js38Function(pageURL, pageTitle,	popupWinWidth, popupWinHeight){
	let left = (screen.width - popupWinWidth) / 2;
  let top = (screen.height - popupWinHeight) / 2;
	let myWindow = window.open(pageURL, pageTitle,
		'resizable=yes, width=' + popupWinWidth
		+ ', height=' + popupWinHeight + ', top='
		+ top + ', left=' + left);
}

document.querySelector('.js41Img').onmouseover = js41Function;
function js41Function(){
	let js41Img = document.querySelector('.js41Img');
	alert(js41Img.getAttribute('src'));
}
document.querySelector('.js41Template3').onmouseover = js41Function2;
function js41Function2(){
	let js41Template3 = document.querySelector('.js41Template3');
	js41Template3.setAttribute('class', 'js41Change3');      // https://www.w3schools.com/jsref/met_element_setattribute.asp
}

document.querySelector('.js42Img').onclick = js42Function;
function js42Function(){
	alert('hello');
}

document.querySelector('.js43Img').onclick = js43Function;
function js43Function(){
	document.querySelector('.js43Img').setAttribute('src', '../images/cup3.jpg');
}

let js44Img = document.querySelector('.js44Img');
js44Img.onclick = js44Function;
function js44Function(){
	js44Img.src = '../images/cup3.jpg';
}
js44Img.onmouseout = js44Function2;
function js44Function2(){
	this.src = '../images/cup2.jpg';
}

let js46Img = document.querySelector('.js46Img');
js46Img.addEventListener('mouseover', js46Function, false);
js46Img.addEventListener('mouseout', js46Function2, false);
function js46Function(){
	js46Img.src = '../images/cup4.jpg';
}
function js46Function2(){
	js46Img.src = '../images/cup2.jpg';
}

let js47Class1 = document.querySelector('.js47Class1');
js47Class1.addEventListener('mouseover', js47Function, false);
js47Class1.addEventListener('mouseout', js47Function2, false);
function js47Function(){
	js47Class1.style.backgroundColor = 'green';
	js47Class1.style.borderRadius = '50%';
}
function js47Function2(){
	js47Class1.style.backgroundColor = 'white';
	js47Class1.style.borderRadius = '';        // 요소의 테두리 둥글게 처리
}

let js48Class1 = document.querySelector('.js48Class1');
js48Class1.onclick = js48Function1;
function js48Function1(){
	let js48P = document.createElement('p');
	let js48Text = document.createTextNode('hello');
	let js48P2 = js48P.appendChild(js48Text);
	let js48Class2 = document.querySelector('.js48Class2');
	js48Class2.appendChild(js48P2);
	this.onclick = '';           // 함수가 한 번만 실행되도록 합니다
}

let js49Class1 = document.querySelector('.js49Class1');
js49Class1.onclick = js49Function1;
function js49Function1(){
	let js49Img = document.createElement('img');
	let js49Src = document.createAttribute('src');
	let js49Width = document.createAttribute('width');
	js49Src.value = '../images/cup4.jpg';
	js49Width.value = '50%';
	js49Img.setAttributeNode(js49Src);
	js49Img.setAttributeNode(js49Width);
	let js49Class2 = document.querySelector('.js49Class2');
	js49Class2.appendChild(js49Img);
	this.onclick = '';           // 함수가 한 번만 실행되도록 합니다
}

let js50Button = document.querySelector('#js50Button');
js50Button.onclick = js50Function1;
function js50Function1(){
	let js50Input = document.querySelector('#js50Input');
	let js50InputText = document.createTextNode(js50Input.value);
	let js50Li = document.createElement('li');
	js50Li.appendChild(js50InputText);
	let js50Ul = document.querySelector('#js50Ul');
	js50Ul.appendChild(js50Li);
	js50Input.value = '';
	document.querySelector('#js50Input').focus();
	let js50LiAll = document.querySelectorAll('li');
	for(let i = 0; i < js50LiAll.length; i++){
		js50LiAll[i].addEventListener('click', js50Del, false);
		function js50Del(){
			if(this.parentNode){
				this.parentNode.removeChild(this);
			}
		}
	}
}

let js51UserName = document.querySelector('#js51UserName');
let js51Major = document.querySelector('#js51Major');
js51Major.onchange = displaySelect;
function displaySelect(){
	let selectName = document.js51Form3.js51UserName.value;
	let selectText = document.js51Form3.js51Major.options[document.js51Form3.js51Major.selectedIndex].innerText;
	alert(selectName + '님이 ' + selectText + '를 선택하셨습니다.');
	js51UserName.value = '';
	document.js51Form3.js51Major.selectedIndex = 0;
	document.querySelector('#js51UserName').focus();
}

document.querySelector('.js52Class1').innerText = 'window.innerHeight : ' + window.innerHeight + 'px';
document.querySelector('.js52Class2').innerText = 'window.outerHeight : ' + window.outerHeight + 'px';
document.querySelector('.js52Class3').innerText = 'window.innerWidth : ' + window.innerWidth + 'px';
document.querySelector('.js52Class4').innerText = 'window.outerWidth : ' + window.outerWidth + 'px';

let js53Class1 = document.querySelector('.js53Class1');
js53Class1.onclick = js53Function;
function js53Function(){
	window.open('https://www.google.co.kr', 'my homepage', 'left=0, top=0, width=500, height=700');
}

let js55Class1 = document.querySelector('.js55Class1');
js55Class1.onclick = js55Function;
function js55Function(){
	alert(navigator.userAgent);
}

const js56Class1 = document.querySelector('.js56Class1');
window.addEventListener('click', js56Function => {
	// js56Class1.style.transform = 'translate('+js56Function.clientX+'px, '+js56Function.clientY+'px)';
	js56Class1.style.transform = `translate(${js56Function.clientX}px,${js56Function.clientY}px)`;    // `` backtick 사용
});














let myContainer1Cup = document.querySelector('#myContainer1Cup');
myContainer1Cup.addEventListener('mouseover', imageChange, false);
myContainer1Cup.addEventListener('mouseout', imageOriginal, false);
function imageChange() {
	myContainer1Cup.src = '../images/cup3.jpg';
};
function imageOriginal() {
	myContainer1Cup.src = '../images/cup2.jpg';
};

let myContainer2Rect = document.querySelector('#myContainer2Rect');
myContainer2Rect.addEventListener('mouseover', backgroundColorChange, false);
myContainer2Rect.addEventListener('mouseout', backgroundColorOriginal, false);
function backgroundColorChange(){
	myContainer2Rect.style.backgroundColor = 'green';
	myContainer2Rect.style.borderRadius = '50%';  // 요소의 테두리 둥글게 처리
}
function backgroundColorOriginal(){
	myContainer2Rect.style.backgroundColor = '';
	myContainer2Rect.style.borderRadius = '';
}

document.querySelector('#myContainer3A').onclick = addP;
function addP(){
	let newP = document.createElement('p');
	let txtNode = document.createTextNode('안녕하세요 반갑습니다.');
	let newP2 = newP.appendChild(txtNode);
	document.querySelector('#myContainer3Div').appendChild(newP2);
	this.onclick='';  // 링크 클릭하면 addP() 함수가 한 번만 실행되도록 합니다.
}

document.querySelector('#myContainer4A').onclick = myContainer4Add;
function myContainer4Add(){
	let myContainer4ImgNode = document.createElement('img');
	let myContainer4SrcNode = document.createAttribute('src');
	let myContainer4WidthNode = document.createAttribute('width')
	myContainer4SrcNode.value = '../images/cup3.jpg';
	myContainer4WidthNode.value = '50%';
	myContainer4ImgNode.setAttributeNode(myContainer4SrcNode);
	myContainer4ImgNode.setAttributeNode(myContainer4WidthNode);
	document.querySelector('#myContainer4Div').appendChild(myContainer4ImgNode);
	this.onclick='';
}

let myCt5Button = document.querySelector('#myCt5Button');
myCt5Button.onclick = myCt5Add;
function myCt5Add(){
 	let myCt5Li = document.createElement('li');  // li 만드는 변수
	let myCt5Input = document.querySelector('#myCt5Input');  // input 요소 선택
 	let myCt5InputText = document.createTextNode(myCt5Input.value);  // input 요소 내용 선택
 	myCt5Li.appendChild(myCt5InputText);  // 부모(myCt5Li) 자식(myCt5InputText) 연결
	let myCt5Ul = document.querySelector('#myCt5Ul');  // ul 선택 변수
	myCt5Ul.appendChild(myCt5Li);  // 부모(myCt5Ul) 자식(myCt5Li) 연결
	myCt5Input.value = '';  // input 내용 초기화
	document.querySelector('#myCt5Input').focus(); // 커서 포커스 위치
	let myCt5LiAll = document.querySelectorAll('li');  // li 전체 변수
	for(let i = 0; i < myCt5LiAll.length; i++){  // 반복 myCt5LiAll 길이 만큼
		// myCt5LiAll[i].onclick = myCt5Del;  // myCt5LiAll 몇번째 선택 클릭
		// function myCt5Del(){
		// 	let myCt5Parent = myCt5LiAll[i].parentNode;  // 현재 노드의 부모 노드에 접근
		// 	myCt5Parent.removeChild(myCt5LiAll[i]);  // 자식 노드 삭제
		// }
		myCt5LiAll[i].addEventListener('click', myCt5Del, false);  // myCt5LiAll 몇번째 선택 클릭하면 함수 실행
		function myCt5Del(){ 
			if(this.parentNode){  // 만약에 참이면 뭐가 이 부모노드가
				this.parentNode.removeChild(this);  // 부모노드의 자식노드를 삭제하라
			}
		}
	}
}

let Ct6Button = document.querySelector('#Ct6Button');
Ct6Button.onclick = Ct6Add;
function Ct6Add(){
 	let Ct6Li = document.createElement('li');  // li 만드는 변수
	let Ct6Input = document.querySelector('#Ct6Input');  // input 선택 변수
 	let Ct6InputText = document.createTextNode(Ct6Input.value);  // input 내용 선택 변수
 	Ct6Li.appendChild(Ct6InputText);  // 부모(Ct6Li) 자식(Ct6InputText) 연결
	let Ct6Ul = document.querySelector('#Ct6Ul');  // ul 선택 변수
	Ct6Ul.appendChild(Ct6Li);  // 부모(Ct6Ul) 자식(Ct6Li) 연결
	Ct6Input.value = '';  // input 내용 초기화
	document.querySelector('#Ct6Input').focus(); // 커서 포커스 위치
	let Ct6LiAll = document.querySelectorAll('li');  // li 전체 변수
	for(let i = 0; i < Ct6LiAll.length; i++){  // 반복 Ct6LiAll 길이 만큼
		// Ct6LiAll[i].onclick = Ct6Del;  // Ct6LiAll 몇번째 선택 클릭
		// function Ct6Del(){
		// 	let Ct6Parent = Ct6LiAll[i].parentNode;  // 현재 노드의 부모 노드에 접근
		// 	Ct6Parent.removeChild(Ct6LiAll[i]);  // 자식 노드 삭제
		// }
		Ct6LiAll[i].addEventListener('mouseover', Ct6Del, false);  // Ct6LiAll 몇번째 선택 클릭하면 함수 실행
		function Ct6Del(){ 
			if(this.parentNode){  // 만약에 참이면 뭐가 이 부모노드가
				this.parentNode.removeChild(this);  // 부모노드의 자식노드를 삭제하라
			}
		}
	}
}

