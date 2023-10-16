/*Code here! 
1) document.getElementById("title").innerText = "Potato";

*/

let title = document.querySelector('.art-1 h3');
title.innerText = "Potato";

let start = document.querySelector('article a');
start.innerHTML = "Start";

let mail = document.getElementsByTagName('a')[5];
mail.innerText = 'Mail Us';
/* 4)  document.getElementById('mailus').innerHTML = "Mail Us";*/

let text = document.querySelector('.art-2 p');
text.innerText = "This hoodie is dope. Definitely worth buying!";

let knapp = document.querySelector('.art-2 button');
knapp.style.backgroundColor = "green";

let hoodie = document.querySelector('.art-1 figure');
hoodie.style.backgroundColor = "lightblue";


let adres = document.getElementsByTagName('p')[3];
adres.innerText = 'Stockholmsvägen 99';


let main = document.querySelectorAll('p');
for (let i = 0; i < main.length; i++) {
  main[i].style.color = "darkgreen";
}

let btn = document.querySelectorAll('button');
for (let i = 0; i < btn.length; i++) {
  btn[i].innerHTML = "Add to cart";
}

/*document.getElementById('act').classList.add('Active');*/