var myImage = document.querySelector('img')

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute ('src','images/firefox2.png');
	} else {
		myImage.setAttribute ('src','images/firefox-icon.png');
	}
}

var myButton = document.querySelector('button');
var welcomeHeading = document.querySelector('h2');

function setUserName() {
  var name = prompt('Enter your name: ');
  localStorage.setItem('name', name);
  welcomeHeading.textContent = 'Welcome ' + name;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  welcomeHeading.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}