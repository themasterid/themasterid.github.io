var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/KDV.jpg') {
      myImage.setAttribute ('src','images/KDV.jpg');
    } else {
      myImage.setAttribute ('src','images/KDV.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Резюме, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Резюме, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

  console.log(+"1" + +"1");