/**
 * Created by you on 16-5-3.
 */
function buildprintDisplay (lcdDisplay) {
    var display = '...\n';

    for (var i=0 ; i < lcdDisplay.length ; i++) {
        for (var j=0 ; j<lcdDisplay[0].lcd.length ; j++) {
            display +=lcdDisplay[j].lcd[i]+' ';
        }
        display += '\n';
    }

    return display;
}
exports.buildprintDisplay = buildprintDisplay;
