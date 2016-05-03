/**
 * Created by you on 16-5-3.
 */
function buildDisplay(newInputs , allNumbers) {
    var lcdDisplay = [];

    for (var i=0; i<newInputs.length; i++) {
        lcdDisplay.push (findDisplay(newInputs[i] , allNumbers));
    }
    return lcdDisplay;
}

function findDisplay (newInput , allNumbers) {
    for (var j=0; j<allNumbers.length; j++) {
        if (newInput === allNumbers[j].number) {
            return { number:allNumbers[j].number ,lcd:allNumbers[j].lcd };
        }
    }
}

exports.buildDisplay = buildDisplay;



