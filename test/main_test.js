/**
 * Created by you on 16-5-3.
 */
describe('Unit Test' , function () {
    var inputs;
    var allNumbers;
    beforeEach(function () {
        inputs = "910";
        allNumbers = require('./fixtures.js').loadAllNumbers();
    });

    describe('stringSplit' , function () {
       it('should print correct string',function () {
           var newInputs = require ('../main/stringSplit.js').stringSplit(inputs);
           var expectNewInputs = [
               '9',
               '1',
               '0'
           ];
           expect(newInputs).toEqual(expectNewInputs);
       }) ;
    });

    describe('buildDisplay()' ,function () {
        it('should print correct display',function () {
            var inputs = [
                '9',
                '1',
                '0'
            ];
            var lcdDisplay =require ('../main/buildDisplay.js').buildDisplay(inputs,allNumbers);
            var expectLcdDisplay = [
                {
                    number:'9',
                    lcd :[
                        '._.',
                        '|_|',
                        '..|'
                    ]
                },
                {
                    number:'1',
                    lcd :[
                        '...',
                        '..|',
                        '..|'
                    ]
                },
                {
                    number:'0',
                    lcd :[
                        '._.',
                        '|.|',
                        '|_|'
                    ]
                }
            ];
            expect(lcdDisplay).toEqual (expectLcdDisplay);
        });
    });

    describe('buildprintDisplay()' , function () {
       it('should print correct printDisplay' , function () {
           var inputLCD = [
               {
                   number:'9',
                   lcd :[
                       '._.',
                       '|_|',
                       '..|'
                   ]
               },
               {
                   number:'1',
                   lcd :[
                       '...',
                       '..|',
                       '..|'
                   ]
               },
               {
                   number:'0',
                   lcd :[
                       '._.',
                       '|.|',
                       '|_|'
                   ]
               }
           ];
           var display = require ('../main/buildprintDisplay.js').buildprintDisplay(inputLCD);
           var expectDisplay =
               '...\n'+
               '._. ... ._. \n'+
               '|_| ..| |.| \n'+
               '..| ..| |_| \n';
           expect(display).toEqual (expectDisplay);
       }) ;
    });

});


describe('Integration Testing' , function () {
    var inputs;
    var allNumbers;

    beforeEach(function () {
        inputs = "910";
        allNumbers = require('./fixtures.js').loadAllNumbers();
    });

    it('should print correct display', function () {
        spyOn(console, 'log');
        require('../main/main.js').printLcdDisplay(inputs);
        var expectDisplay =
            '...\n'+
            '._. ... ._. \n'+
            '|_| ..| |.| \n'+
            '..| ..| |_| \n';
        expect(console.log).toHaveBeenCalledWith(expectDisplay);
    });
});