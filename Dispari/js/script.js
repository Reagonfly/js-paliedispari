let button = document.getElementById('save_data');

button.addEventListener('click', function(){

    let word_choice= document.getElementById('choice').value;
    let number_choosed= document.getElementById('number_choice').value;
    
   
    number_choosed = number_choosed * 1;
    console.log(number_choosed)
    
    
    function generateRandomNumber(min,max){
       
        let randomNumber= Math.floor(Math.random() * (max - min + 1) + min )
        return randomNumber
        
    }
    
    let min = 1
    let max = 5
    
    let number = generateRandomNumber(min,max);
    console.log(number)
    
    let sum = number_choosed + number
    console.log(sum)
    
    
    if(sum % 2 === 0 && word_choice === 'pari'){
        alert('indovinato, il numero è Pari')
    }
    
    else if(sum % 2 !== 0 && word_choice === 'dispari'){
        alert('indovinato, il numero è Dispari')
    }
    
    else {
        alert('Hai Sbagliato...')
    }

})