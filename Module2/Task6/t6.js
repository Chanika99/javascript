'use strict'

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let rollResults = [];

while (true){
    let result = rollDice();
    rollResults.push(result);
    console.log('Roll number: ' + result);

    if (result===6){
        break;
    }
}

document.write('<ul>')

for (let j = 0; j<rollResults.length; j++){
    document.write('<li>')
    document.write('Roll '+ (j + 1) + ': '+ rollResults[j]);
    document.write('</li>')
}

document.write('</ul>');