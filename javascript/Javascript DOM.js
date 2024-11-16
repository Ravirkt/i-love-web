
///////////////// DOM ///////////////////////////////////////////

// Document object ////////////////
let val;

// geeft de html collection weer als een array. `je ziet alle html tags die gebruik zijn in het document.
val = document.all;

// je kunt net een array specifieke html elementen zoeken. Je geeft het elementnummer aan. Tellen beint bij 0
val = document.all[0];

// geeft de hoeveelheid elementen in de htmlcollection
val = document.all.length;

// Je kunt ook specifieke elementen opvragen, bv:
val = document.all.body;
val = document.all.head;
val = document.all.doctype;
val = document.all.domain;
val = document.all.URL;
val = document.all.CharacterSet;
val = document.all.contentType;

// je kunt ook elementen benaderen door de id, method of action bijvoorbeeld een form
val = document.all.forms.id;
val = document.all.forms.method;
val = document.all.forms.action;

// Geeft alle links weer
val = document.links;
val = document.links.id;
val = document.links.className;
val = document.links.classList;

// geeft alle images weer
val = document.images;







///////////////// DOM selectors single elements ///////////////////////////////////////////

// document.getelementById()

console.log(document.getElementById('id van element'));

// get things from elements

console.log(document.getElementById('id van element').id); //id opvragen
console.log(document.getElementById('id van element').className); //classname opvragen

// change styling
console.log(document.getElementById('id van element').style.background = 'green'); // bijvoorbeeld de background aanpassen
console.log(document.getElementById('id van element').style.color = 'green'); // bijvoorbeeld de kleur aanpassen
console.log(document.getElementById('id van element').style.padding = '5px'); // bijvoorbeeld de padding aanpassen

//change content
console.log(document.getElementById('id van element').textContent= 'veranderede tekst'); // het veranderen van content
console.log(document.getElementById('id van element').innerText= 'veranderede tekst'); // het veranderen van content
console.log(document.getElementById('id van element').innerHTML= '<h2 style="color:red">vervangende tekst</h2>'); // het veranderen van content doormiddel van html

// document.querySelector()

console.log(document.querySelector('#idvanelement')); // selecteer de id door de #
console.log(document.querySelector('.classname')); // selecteer de class door de .
console.log(document.querySelector('h5')); // selecteer een element direct als er meerdere h5 zijn pakt hij de eerste

//queryselector is een single elemnt selector je kunt dus alleen 1 element aanpassen
document.querySelector('li').style.color = 'green';
document.querySelector('ul li').style.color = 'green';

document.querySelector('li:last-child').style.color = 'green'; // laatste waarde selcteren
document.querySelector('li:nth-child(3)').style.color = 'green'; // selecteert de gespecificeerde waarde 3
document.querySelector('li:last-child(4)').textContent = 'green'; // selecteert de gespecificeerde waarde 4
document.querySelector('li:last-child(odd)').style.background = 'green'; // de eerste oneven in de lijst wordt geselcteerd
document.querySelector('li:last-child(even)').style.background = 'green'; // de eerste even waarde wordt geselecteerd

///////////////// DOM selectors multiple elements ///////////////////////////////////////////

// document.getElementsByclassName // element opvragen door classname

const test = document.getElementsByClassName('declassname'); //geeft alle elementen van classname

console.log(items);
console.log(items[0]); // met de cijfer kun je een specifiek element selecteren. tellen begint bij 0

items[2].style.color = 'green;' // Je kunt ook het element aanpassen
items[2].style.textContent = 'hallo;' // Je kunt ook het element aanpassen

// document.getelementbytagname // element opvragen door tagname

const list = document.getElementsByTagName('li'); // geeft element aan doormiddel van tagname. zoals li voor list of h2

list[1]; //specifiek element selecteren

list[1].style.background = 'green'; // elementen aanpassen
list[3].textContent = 'nieuwe text'; // elemente aanpassen

// HTML collection convert to array

list.forEach(function(li){

console.log(li.className);
li.textContent = 'hello';

});

// document.queryselectorall // dit returned een NodeList

const testing = document.querySelectorAll('li'); // je kunt elke css selector invoeren

