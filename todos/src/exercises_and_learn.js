
// Struktury danych zmienne:
//1. Zmienne liczbowe
let varA = 2 + 3;
let varB = varA -1;
let varC = 1.8; // floating point
const constant = 1000;
let stringA = "To jest text"
let boolA = true;
let boolB = false;

// wyświetlanie wartości zmiennych
console.log("wyświetlanie wartości zmiennych");
console.log(varA);
console.log(varB);
console.log(varC);
console.log(stringA);
console.log("badanie typu zmiennych");
console.log(typeof(varA));
console.log(typeof(varB));
console.log(typeof(varC));
console.log(typeof(varC + varB));
console.log(typeof(constant));
console.log(typeof(stringA));
console.log(typeof(boolA));
console.log(typeof(boolB));

// Obiekty

// Definiowanie zmiennej obiektu
let female = {
  name: 'Paulina',
  lastname: 'Mąka',
  birthDate: '1988-09-19',
  sex: 'female'
}

console.log("wyświetlanie obiekty jako JSON (JavaScript Object Notaion)");
console.log(female);
console.log(typeof(female));

// Zmiana pola
female.name = "Paulinka";

console.log("Objekt po zmianie:");
console.log(female);

let male = {
  name: 'Wojtek',
  lastname: 'Mąka',
  birthDate: '1985-09-09',
  sex: 'male'
}
// Tablice
let numbers = [1,2,3,4];
console.log('numery z tablicy');
console.log(numbers);
let persons = [male, female];
console.log('tablica osób');
console.log(persons);

// Zadanie 1.
// Zaprojektuj strukturę danych wymaganą do przeprowadzenia gry w statki.
//
// Do tego celu będziemy wykorzystywać planszę 10 na 10 pól.
// Gra będzie się składać z flot dla dwóch graczy. Każda flota składa się z:
// 4 x 1 masztowiec (SmallShip)
// 2 x 2 masztowce  (MediumShip)
// 1 x 4 masztowiec (LargeShip)
// Objekt 'Ship' powinien przechowywać pole określające typ statku: shipType jako zmienna typu string ze zbioru ('SmallShip', 'MediumShip', 'LargeShip')
// Dodatkowo każdy statek 'Ship' sbudowany jest z pól ('fields') zlokalizowanych na planszy
// (przykładowe pole należące do statku znajdujące się na planszy można opisać jako:
// Każde 'Field' powinno dać się usytuować na planszy a więc powinno posiadać koordynaty lokalizujące: ({x : 1, y: 10} - czyli rząd pierwszy, kolumna 10 siąta)
// Dodatkwo poprawnie zbudowany statek to pola jedynie usytuowane tylko i wyłącznie w jednej lini x bądź y
// Aby można umożliwić rozgrywkę każde pole powinno mieć zdefiniowaną flagę 'stan zatopienia' 'hitStatus' jako zmienna typu boolean gdzie
// wartość 'true' informuje o tym że pole na statku zostało zatopione a 'false' informuje o tym że pole wciąż nie zostało trafione.

let i = 0;
while (i < varA) {
  //alert('iteracja w pętli while, numer '+ i);
  i++;
}

for (i = 0; i < 10; i++) {
  //alert('iteracja w pętli for, numer' + i)
}

function adding(x, y) {
  return x + y;
}

//alert(adding(2,8));
//console.log(constant++);

// Zadanie 2.
// Silnia zapis n!. Funkcja matematyczna ktora dla zadanej liczby wyznacza iloczyn z tej liczby oraz liczby o jeden mniejszej a więc:
// silnia(5) = 5 * silnia(4)
// Obliczenie jest nastepujące 5! = 1 * 2 * 3 * 4 * 5 = 120 bo : silnia(5) = 5*silnia(4) a silnia(4) = 4 * silnia(3) i tak dalej.
// zapis silnia(5) = 5 * silnia(4)) to tak zwana rekurencja - wywołanie tej samej funkcji wewnątrz tej funkcji.
// Napisać funkcję liczącą silnie z w przekazanej w parametrze liczby.
