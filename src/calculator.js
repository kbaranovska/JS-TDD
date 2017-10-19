function calculator(expression) {
    expression = expression.replace(/\s/g, '');

        if(!expression){
            return 0;
        }

        if(!expression.match(/([0-9\.\s]+)/g)) {
            return NaN;
        }

        if(expression.includes("+")){
            return add(expression);
        } else if(expression.includes("-")){
            return decrease(expression);
         } else if(expression.includes("**")){
            return exponentiation(expression);
        } else if(expression.includes("*")){
            return multiply(expression);
        } else if(expression.includes("/")){
            return divide(expression);
        }

};

function add(s) {
    var result = 0;

    var matchedString = s.match(/[+]?([0-9\.\s]+)/g) || [];

    while(matchedString.length) {
        result += parseFloat(matchedString.shift());
    }
    
    return result.toString();
}

function decrease(s) {
    var result = 0;

    var matchedString = s.match(/[-]?([0-9\.\s]+)/g) || [];

    while(matchedString.length) {
        result += parseFloat(matchedString.shift());
    }
    
    return result.toString();
}

function multiply(s) {
    var values = s.match(/([0-9\.\s]+)/g) || [];

    var multiplication = values[0] * values[1];
    return multiplication.toString();
}

function divide(s) {
    var values = s.match(/([0-9\.\s]+)/g) || [];

    if(values[1] == 0){
        return "Сan not be divided into 0";
    }
    
    var division = values[0] / values[1];
    return division.toString();
}

function exponentiation(s) {
    var values = s.match(/([0-9\.\s]+)/g) || [];

    var exponent = Math.pow(values[0], values[1]);
    return exponent.toString();
}



