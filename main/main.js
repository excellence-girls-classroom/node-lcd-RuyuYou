/**
 * Created by you on 16-5-3.
 */
function printLcdDisplay(inputs) {
    var allNumbers =require('../test/fixtures.js').loadAllNumbers();
    
    var newInputs = require('./stringSplit.js').stringSplit(inputs);
    
    var lcdDisplay = require('./buildDisplay.js').buildDisplay(newInputs,allNumbers);
    
    var display = require('./buildprintDisplay.js').buildprintDisplay(lcdDisplay);

    console.log(display);
}

exports.printLcdDisplay = printLcdDisplay;
