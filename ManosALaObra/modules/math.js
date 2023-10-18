const lodash = require('lodash');


const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const combineArrayWithSymnol = (array, symbol = "-") => {
    return lodash.join(array, symbol);
}

module.exports = {add, substract, combineArrayWithSymnol}