function Calculate(){
    var expression=document.querySelector('#expression').value;
    
    var result = calculator(expression);

    document.querySelector('#result').innerHTML = result;
}