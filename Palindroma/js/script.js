
//Creare la funzione per effettuare il controllo del Palindromo

function Palindrome(word) {
    let word_invert = word.split('').reverse().join('');
    return word_invert
}

//Chiedere all'utente una parola e convertirla in LowerCase

const word_input = prompt("Insert a Word").toLowerCase();

let check_word = Palindrome(word_input)

// Ciclo che controlla se la parola è un palindromo

if(word_input == check_word){
    //console.log("è un Palindromo")
    alert('è un Palindromo!')
}

else{
    //console.log("non è un Palindromo")
    alert('non è un Palindromo!')
}