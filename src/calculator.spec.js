describe('calculator', function () {
    it('number + number returns its sum', function() {
        
        var number1 = 1;
        var number2 = 2;
        var numbersSum = calculator(`${number1}+${number2}`);

        expect(numbersSum).toEqual('3');
    });

    it('number - number returns its difference', function() {
        
        var number1 = 3;
        var number2 = 2;
        var numbersDiff = calculator(`${number1}-${number2}`);

        expect(numbersDiff).toEqual('1');
    });

    it('number * number returns its multiplication', function() {
        
        var number1 = 2;
        var number2 = 2;
        var numbersMult = calculator(`${number1}*${number2}`);

        expect(numbersMult).toEqual('4');
    });

    it('number / number returns its division', function() {
        
        var number1 = 16;
        var number2 = 4;
        var numbersMult = calculator(`${number1}/${number2}`);

        expect(numbersMult).toEqual('4');
    });

    it('number / 0 returns error message', function() {
        
        var number1 = 16;
        var number2 = 0;
        var errorMsg = calculator(`${number1}/${number2}`);

        expect(errorMsg).toEqual('Сan not be divided into 0');
    });

    it('number ** number returns its exponent', function() {
        
        var number1 = 2;
        var number2 = 3;
        var exponent = calculator(`${number1}**${number2}`);

        expect(exponent).toEqual('8');
    });

    it('passed empty string returns 0', function() {
        
        var result = calculator(``);

        expect(result).toEqual(0);
    });

    it('passed incorect string for adding returns NaN', function() {
        
        var result = calculator(` + `);

        expect(result).toEqual(NaN);
    });

    it('passed incorect string for decreasing returns NaN', function() {
        
        var result = calculator(`     -   `);

        expect(result).toEqual(NaN);
    });

    it('passed incorect string for dividing returns NaN', function() {
        
        var result = calculator(` / `);

        expect(result).toEqual(NaN);
    });

    it('passed incorect string for exponentiation returns NaN', function() {
        
        var result = calculator(` **  `);

        expect(result).toEqual(NaN);
    });

    it('passed incorect string for multiplication returns NaN', function() {
        
        var result = calculator(` * `);

        expect(result).toEqual(NaN);
    });

});