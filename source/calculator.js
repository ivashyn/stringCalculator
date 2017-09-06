var calculator = {
    add: function (expression) {

        expression = this.removeSpaces(expression);
        var regex = /^[-+().*\/0-9\s]+$/;
    
        if (regex.test(expression)) {
            try {
                var result = +eval(expression);
            }
            catch (err) {
                return undefined;
            }
    
            if(!Number.isInteger(result))
            {
                var numbersToFixed = result.toString().split('.')[1];
                if(numbersToFixed.length<2)
                    result = +result.toFixed(1);
                else 
                    result = +result.toFixed(2);
            }
            return result;
        }
        else {
            return undefined;
        };
    },

    removeSpaces : function (str) {  
        var VRegExp = new RegExp(/^(\s|\u00A0)+/g);  
        var VResult = str.replace(VRegExp, '');  
        return VResult  
    }
};

module.exports = calculator;