/**
 * Russian locale price formatter.
 * Input: {Number} 234345.45, output: {String} '234 345.45'
 *
 * @usage yourNumber.formatPrice()
 *
 * @returns {String} - formatted price, splited by spaces every 3 digits, 
 * rounded to 2 digits after dot.
 */
Number.prototype.formatPrice = function() {
    var priceString = this.toFixed(2).toString(),
        priceArray=[],
        splittedByDot = priceString.split('.'),
        afterDot = splittedByDot[1] === '00' ? '' : '.' + splittedByDot[1], /* remove '.00' */
        beforeDot = splittedByDot[0];

    for (var i = 0, l = beforeDot.length; i < l/3; i++) {
        priceArray.push( beforeDot.slice(-3) );
        beforeDot = beforeDot.slice( 0, beforeDot.length - 3 );
    }
    return priceArray.reverse().join(' ') + afterDot;
};