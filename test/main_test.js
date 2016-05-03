/**
 * Created by you on 16-5-3.
 */
describe('Unit Test' , function () {
    var inputs;
    beforeEach(function () {
        inputs = "910";
        var allNumbers = require('./fixtures.js').loadAllNumbers();
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
});