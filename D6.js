/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
    return l1 * l2;

}
console.log(area(3, 6))


function area(l1, l2) {
    let m = l1 * l2;
    return m;
}
const risultato = area(3, 6)
console.log(risultato)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2) {
    let s = num1 + num2;
    if (num1 === num2) {
        return (s * 3)
    }
    return s;

}
console.log(crazySum(3, 5));



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(param) {
    let d = (param - 19) * -1;
    if (param > 19) {
        return (d * 3);
    }else{
        return d;
    }

}
console.log(crazyDiff(10));



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if (20 <= n <= 100 || n === 400){
        return true;
    }else{ 
return false;
    }
   
        

}

console.log(boundary(30));
console.log(boundary(105));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(stringa) {
if(stringa.startsWith('EPICODE')){
    return stringa;

}else{
    return "EPICODE"+ stringa;
}






}
console.log(epify("buongiorno"))


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(number) {
    if (number % 3 === 0 || number % 7 === 0) {
        return true
    }
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa) {
    let stringaTag = stringa.split('')//divide stringa carattere per carattere
    console.log(stringaTag);
    let stringaCont = stringaTag.reverse()
    console.log(stringaCont);
    let risultato = stringaCont.join("");//join converte array in una stringa
    console.log(risultato);
}
console.log(reverseString("Hello"))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = (stringa) => {
    let risultato = ""
    let parole = stringa + split(" ");
    for (let index = 0; index < parole.lenght; index++) {
        let par = parole[index].split(" ");
        let stringaFinale = ""//stringa vuota
        for (let i = 0; i < par.lenght; i++); {
            if (i === 0) {
                let primaMaiuscola = par[i].toUpperCase()
                stringaFinale + primaMaiuscola

            }
            else {
                stringaFinale + par[i]
            }
            return risultato;
        }
    }
}
risultato = stringaFinale + "";
console.log(upperFirst("Lorem Ipsum"))


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString = function (str) {
    return str.slice(1, str.length - 1)
  }
  console.log(cutString('CIAO'))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
    const arr = []
    for (let i = 0; i < n; i++) {
      arr.push(Math.floor(Math.random() * 10))
    }
    return arr
  }
  console.log(giveMeRandom(2))
