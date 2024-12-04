
// comments in javascript

/*

    comment meerdere lijnen

*/


// manieren om waarden te printen in de console

// String
console.log("voorbeeld"); 

// Nummers
console.log(123); 

// Boleans  
console.log(true); 

// Variabelen
var test = 'hallo'; 
console.log(test);

// Waardes in tabel zetten
console.table({a:1, b:2}) 

// Maakt een error string in de console, maakt het rood
console.error('dit is een error');

// Maakt de console leeg
console.clear();

// Geeft een waarschuwing in de console, maakt het geel
console.warn('dit is een waarschuwing');


/* De tijd om de code uit te voeren wordt weergegeven. het begin is
    .time en het eind is timeEnd. Alle code ertussen wordt getimed.
*/
console.time('Begint hier');
    console.time('hello');
    console.time('hello');
    console.time('hello');
console.timeEnd('tijd is:');

// ----------- variabelen, let en const-----------------------------------------

// variabelen, let en const

// variabelen maken
// Bij var kun je de waarde veranderen
// In een variabelen kun je letters, nummer, _ en $ gebruiken
// De naam van een variabelen kan niet beginnen met een cijfer
var $_test = 'hallo';

// een variabelen ongedefinieerd maken
var test;

// let
// Je kunt de waarde veranderen
let test = 'hallo';

// const
// const staat voor constant en hier kan de waarde niet veranderd worden.
// const moet je definieeren met een waarde.
// bij een const object kun je de eigenschappen wel opnieuw definieeren
const test = 'hallo';


// ----------- Primitive data types -----------------------------------------

/*
-String "" of '' 
-Number (In javascript worden floats, integers, decimals gezien als numbers)
-Boolean (true of False)
-Null (returnt een null waarde)
-Undefined
-Symbols
*/

// Met typeof kun je laten zien wat voor datatype de variabelen is
console.log(typeof test);


// ----------- Reference data types -----------------------------------------

/*
-Arrays
-Object literals
-Functions
-Dates
-alle andere...
*/






// ----------- Type conversion -----------------------------------------

// .lenght kan je alleen gebruiken bij strings en zorgt
// ervoor dat je het aantal tekens kan weten.
var test = 'hallo';
test.length;

// numbers to string
val = 5; // dit is een nummer
val = String(5) // de 5 is nu een string

// bool to string
val = true; // dit is een boolean
val = String(true) // de true is nu een string

// string to number
val = '5'; // dit is een string
val = Number('5'); // dit is nu een nummer

// Boolean to number
val = true; // dit is een boolean
val = Number(true); // dit geeft een 1 weer, false geeft een 0 weer

/* als je hetzelfde pricipe gebruikt 
om van een string een number te maken geeft het NaN weer
dit staat voor Not A Number. als je bv hallo wilt converteren.
*/ 







// ----------- Numbers and math -----------------------------------------

// simple math
val = num1 + num2; // dit is optellen
val = num1 * num2; // dit is vermenigvuldigen
val = num1 / num2; // dit is delen
val = num1 - num2; // dit is aftellen
val = num1 % num2; // dit laat het verschil zien


// Math object
val = Math.PI // geeft pi weer
val = Math.round(2.8) // dit rond af, 2.8 zou 3 zijn
val = Math.ceil(2.2) // Dit geeft aan dat je naar boven wilt afronden
val = Math.floorl(2.2) // Dit geeft aan dat je naar beneden wilt afronden
val = Math.sqrt(64) // Dit geeft de wortel van
val = Math.pow(8, 2) // Dit de macht weer 8^2   
val = Math.min(6,4,54,3,1,33) // Dit geeft de minimale getal, dus het kleinste getal terug.
val = Math.max(6,4,54,3,1,33) // Dit geeft de maximale getal, dus het grootste getal terug.
val = Math.random() // Dit geeft een willekeurige decimaal getal
val = Math.floor(Math.random()) // Dit geeft een willekeurig hele cijfer omdat afgerond






// ----------- Concatenation -----------------------------------------

// Concatenation
 val = firstname + Lastname; /* dit zou de waardes van de twee variabele aan elkaar plakken 
                                Je wilt een spatie tussen de twee waarde. Dit kan zo:
                            */

val = firstname + ' ' + Lastname;


// append / toevoegen

val = 'ravi';
val += 'Tjikhoeri';
// Zonder de + bij de = teken zou het de waarde overwritten.
// Met de plus wordt de achternaam geplakt aan de voornaam.


// Escaping
val = 'ik gebruik komma's in de zin';

// als je een string wilt schrijven met een komma, moet je er een slash voor de komma zetten, zoals: \
val = 'ik gebruik komma\'s in de zin';

// concat() method
var firstname = 'hallo';
var lastname =  'ravi';

val = firstname.concat(' ', lastname) // dit zorgt ervoor dat je first en lastname een spatie hebben.
console.log(val);


// uppercase en lowercase
val = firstname.toUpperCase(); // deze method zorgt ervoor dat alles hoofdletters worden
val = lastname.toLowerCase(); // deze method zorgt ervoor dat alles kleine letters worden



// ----------- Template literals -----------------------------------------

/*
Als je bijvoorbeeld variabelen van javacript wilt weergeven in html, kun je dit zo doen:
*/

// zonder template strings
const firstname = 'Ravi'; // Hier maak je ik een aantal variabelen
const lastname = 'Tjikhoeri';
const age = 12;
const color = 'green'

let html; // hier maak ik de variabelen html

html = '<ul>' + // hier worden de strings in een html lijst gezet.
       '<li>Firstname: ' + firstname + '</li>' +
       '<li>lastname: ' + lastname + '</li>' +
       '<li>age: ' + age + '</li>' +
       '<li>fav.color: ' + color + '</li></ul>' 
                
  document.body.innerHTML = html; // hiermee roept je dat aan.

  // dit is een moeilijke manier om te doen, er is ook een makkelijkere manier.
  // dit is met template strings

////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // template strings/literals

// hiervoor gebruik je de backticks = ``. deze kommas zijn te vinden naast de 1 om windows
// vervolgens gebruik je de dollar teken en de accolades om je variabelen erin te doen:

${firstname}

// 1. backticks ``
// 2. Dollarteken $
// 3. Accolades {}


const firstname = 'Ravi';
const lastname = 'Tjikhoeri';
const age = 12;
const color = 'green'


function testen(){
    return 5 + 9;
  };


let html;

html =  `<ul>
        <li>Name: ${firstname}</li> 
        <li>Lastname: ${lastname}</li>
        <li>Age: ${age}</li>
        <li>Color: ${color}</li>
        <li>${2 + 2}</li> 
        <li>${testen()}</li>
        </ul>`; 

  document.body.innerHTML = html;

  /* Je kunt verschillende waarden zetten in de template literal/string, zoals:
    - variabelen;
    - functies;
    - rekensommen;
    - if condition
    en nog veel meer!!
  */





// ----------- Array en Array methods -----------------------------------------


// create array
const firstArray1 = [3,6,6,7,8,5,4,3,5]; // met alleen integers
const stringArray1 = ['appel', 'banaan', 'kiwi', 'limoen']; // met alleen strings
const mixArray1 = [10, 'kiwi', false, 'appel', 34, 34, undefined, 54, 'lemon']; // mix van datatype

// Kan ook zo gemaakt worden
const firstArray = new Array(4,5,6,4,3,4,4); // net alleen integers
const stringArray2 = new Array('appel', 'peer', 'tomaat', 'avocado'); // met alleen strings
const mixArray2 = new Array('oker', 'sopropo', null, 34, 34, fasle, 34, 'perzik', true); // mix van datatype



// Om te zien hoeveel dingen er in een array zitten gebruik je .lenght
.lenght
console.log(firstArray.length);

// controleren of iets een array is
.isArray(invullen variabelen)
console.log(Array.isArray(firstArray));

// krijg een bepaalde waarde van array
console.log(firstArray[3]); // dit returnt de 3e waarde in een array.
// het tellen begint bij 0

// invoegen in een array
firstArray[2] = 123; // dit zorgt ervoor dat je op de tweede positie de waarde 123 invoert.
                     // Als die positie bezet is door een andere waarde, zal hij deze vervangen.

// index van een waarde in array
// als je wilt weten op welke positie bv. de waarde 3 zit in een array:
.indexOf(invullen waarde)
console.log(firstArray.indexOf(3)); // hier zoekt hij de eerste 3 die hij kan vinden en returend dan de positienummer(index)



///////// array methods ///////////////////////////

// waarde toevoegen aan einde van array
.push()
firstArray.push(300); // de 300 wordt toegevoegd aan de array op de laaste plaats

// waarde toevoegen aan begin array
.unshift()
firstArray.unshift(250); // de 250 wordt toegevoegd aan begin van array

// waarde verwijderen van array aan het einde
.pop()
firstArray.pop();

// waarde verwijderen van array aan het begin
.shift();
firstArray.shift();

// Specifieke waardes verwijderen uit een array
// in de haakjes geef je aan tussen welke posities de waardes zijn die je wilt verwijderen.
.splice();
firstArray.splice(1,3); // de 1 is het beginpunt en 3 is het eindpunt van wat je wilt verwijderen. dus de posities 1 , 2 en 3 worden verwijderd
                        // (4,5,6,4,3,4,4) hier zal 5,6 en 4 verwijderd worden.
                        // (0,1,2,3,4,5,6) 


// de waarden in een array reversen
.reverse()
firstArray.reverse(); // de waarden in de array worden omgedraait. 
                      // (4,5,6,4,3,4,4) deze array zou dus worden:
                      // (4,4,3,4,6,5,4) het is omgedraait

// array samenvoegen/ concatenate
.concat();
firstArray.concat(secondArray); // hier wordt de array secondArray geplakt aan de array firstArray

// sorting van arrays
.sort()
stringArray1.sort(); // bij een string array sorteert het de waarde op alfabetische volgorde

intArray.sort(); // bij een array met alleen enkele cijfers zal hij de waarden van klein naar groot sorteren.
                 // maar dit werkt alleen met arrays die cijfers heeft en geen nummers
                 // als je dit zou doen met nummers zal hij alleen de eerste digit van elke waarde ordenen

// Om nummer te sorteren kun je een functie gebruiken:

// Nummers van klein naar groot sorteren
intArray.sort(function(x, y){
    return x - y; // de x is het begin en de y is het einde.
});

// Nummers van groot naar klein sorteren
intArray.sort(function(x, y){
    return y - x; // Nu is het y - x
});




// ----------- Object literals -----------------------------------------

/* In een object kunnen verschillende type eigenschappen bijvoorbeeld:
    - Strings
    - Integers
    - Arrays
    - Eigenschappen met zelf meerdere eigenschappen bijvoorbeeld adres: postcode, straat, huisnr etc..
    - Functions
    - dates
*/

// selecteren van eigenschap van een object

// object aanmaken met 5 eigenschappen
const ravi = {
    lastName: 'tjikhoeri',
    color: 'brown',
    age: 25,
    email: 'ravi.tjikhoeri@hva.nl',
    favfood: ['chicken', 'rice'], // array in een object
    address: { // een eigenschap met zelf meerdere eigenschappen
        city: 'Amsterdam',
        Postalcode: '1013zk',
    }
  };
  
  // aanroepen eigenschappen
  console.log(ravi.lastName); // object.eigenschap
  console.log(ravi.color); // object.eigenschap
  console.log(ravi.age); // object.eigenschap
  console.log(ravi.email); // object.eigenschap
  console.log(ravi.favfood); // Volledige array aanroepen
  console.log(ravi.favfood[0]); // specifiek element aanroepen met brackets en dan positienummer invoeren
  console.log(ravi.favfood[1]); // specifiek element aanroepen met brackets en dan positienummer invoeren
  console.log(ravi.address.Postalcode); // specifiek eigeschap selecteren eigenschap met meerdere eigenschapen
  console.log(ravi.address); // alle eigenschappen van address selecteren.

  // functie eigenschap aanroepen

  const ravi = {
    lastName: 'tjikhoeri',
    color: 'brown',
    age: 25,
    email: 'ravi.tjikhoeri@hva.nl',
    favfood: ['chicken', 'rice'], // array in een object
    address: { // een eigenschap met zelf meerdere eigenschappen
        city: 'Amsterdam',
        Postalcode: '1013zk'
    },
    getbirthyear: function(){ // dit is een eigenschap in een functie
    return 2023 - this.age; // in een functie moeten eigenschappen benaderd worden door 'this.'
    }
  };

  console.log(ravi.getbirthyear()); // object.functiea aanroepen.



// ----------- Dates and Times -----------------------------------------


























// ----------- If statements and comparison operators -----------------------------------------


////////////////// if statement sytnax

if(something){
  do something
} else {
  do somethingelse
}


//////////////// if something is equal to... voobeeld:

const test = 600;

if(test == 100){
  console.log('Dat klopt');
} else {
  console.log('Dat klopt niet!!');
}

// de = teken betekend gelijk maken aan.
// de dubbele = teken: == betekend met elkaar vergelijken.

/////////////// if something is not equal to.... voorbeeld:

if(test != 100){
  console.log('Dat klopt');
} else {
  console.log('Dat klopt niet!!');
}

// de != betekend not equel, niet gelijk. 

///////////////// If something is equal to value en datatype

if(test === 100){
  console.log('Dat klopt');
} else {
  console.log('Dat klopt niet!!');
}

// de 3 dubbele = teken: === betekend dat het kijkt of de waarde en de datype gelijk zijn.

//////////////// If something is not equal to value and datatype.

if(test !== 100){
  console.log('Dat klopt');
} else {
  console.log('Dat klopt niet!!');
}

// de !== betekend dat hij kijkt of de waarde en datatype niet gelijk zijn.









































