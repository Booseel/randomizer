function randomize() {

    let min = parseInt(document.getElementById('minValue').value); 
    let max = parseInt(document.getElementById('maxValue').value); 
    let amount = parseInt(document.getElementById('amount').value);
    let output = document.getElementById('output'); 
    let outputString = ''; // пустая строка, в нее будут вноситься все полученные значения из цикла
    let emptyError = 'Вы не ввели все значения';
    let valuesError = 'Вы ввели слишком большие значения или количество случайных числел больше 10';


    if (max && min && amount) {

      if ((max <= 9999999999 && min <= 9999999999) && amount <= 10) {
        for (let i = 0; i < amount; i++ ) {    
            let result = Math.floor(
              Math.random() * (max - min + 1) + min
            );     
            outputString = outputString + result + ' '; 
        }  
        return output.innerHTML = outputString; 
      } else {
        return output.innerHTML = valuesError;
      }

    } else {      
      return output.innerHTML = emptyError; 
    }
    
}