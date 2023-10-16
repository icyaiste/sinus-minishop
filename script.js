/*Code here! 

*/

document.getElementById("title").innerText = "Potato";

document.getElementById('start').innerHTML = "Start";

document.getElementById('mailus').innerHTML = "Mail Us";

document.getElementById('hoodie').innerText = "This hoodie is dope. Definitely worth buying!";

document.getElementById('btn').style.backgroundColor = "forestgreen";

document.getElementById('poster').style.backgroundColor = "lightblue";

document.getElementById('address').innerText = 'Stockholmsvägen 99';

let main = document.querySelectorAll('p');
for (let i = 0; i < main.length; i++) {
  main[i].style.color = "darkgreen";
}

let btn = document.querySelectorAll('button');
for (let i = 0; i < btn.length; i++) {
  btn[i].innerHTML = "Add to cart";
}