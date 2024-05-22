/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// String : E' una sequenza di caratteri delimitata da apici singoli o doppi o backticks. Può contenere lettere, numeri, simboli, spazi e persino emoji.

let string1 = 'Hello, world!'; //STRINGA

// Number : E' un tipo di dato numerico che può rappresentare numeri interi, decimali, esponenziali, infiniti e NaN (Not a Number).

let number1 = 42; //NUMERO 

// Boolean : E' un entità logica che può avere solo due valori: true o false. E' utile per rappresentare condizioni di verità o falsità.

let boolean1 = true; //BOOLEANO

// Undefined : E' un valore speciale che indica che una variabile non è stata inizializzata e non ha un valore assegnato.

let undefined1; //VARIABILE NON INIZIALIZZATA

// Null : E' un valore speciale che indica l'assenza di un valore. E' diverso da undefined, in quanto è un valore assegnato volontariamente.

let null1 = null; //VARIABILE ASSEGNATA VOLONTARIAMENTE


// STRUCTURAL TYPES

// Array : E' un tipo di dato complesso che rappresenta una collezione ordinata di elementi. E' costituito da una serie di valori separati da virgole e racchiusi tra parentesi quadre.

let array1 = [1, 2, 3, 4, 5]; //ARRAY DI NUMERI

// Function : E' un tipo di dato complesso che rappresenta un blocco di codice riutilizzabile. Può essere definita con la parola chiave function e può avere parametri e valori di ritorno.

function somma(a, b) { //FUNZIONE
    return a + b;
}

somma(2, 3); //5

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

// Object : E' un tipo di dato complesso che rappresenta una collezione di dati e funzionalità. E' costituito da una serie di coppie chiave-valore.

let persona = { //OGGETTO
    name: 'Gian Marco',
    surname: 'De Rosa',
    age: 32
};

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

function somma(a, b) { //FUNZIONE
    return a + b;
}

somma(12, 20); //32

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = 'Gian Marco';

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let subtract = 4 - x;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = 'john';
let name2 = 'John';

console.log(name1 === name2);
console.log(name1.toLowerCase() === name2.toLowerCase());
