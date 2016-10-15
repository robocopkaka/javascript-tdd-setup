// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
  prime: function(number){
    if (number === 2 || number === 3) return true
    if (number ===  0 || number === 1) return false
    var root = parseInt(Math.pow(number, 0.5))
    var check = true
    for(var i = 2; i <root + 1; i++){
      if(number % i === 0){
        check = false
        break;
      }
      else{
        check = true
      }
    }
    return check
  },

  sumOfPrimes: function(num){
    if(typeof(num) !== 'number' ) return "Please pass a number"
    else if(num < 0) return "Enter a number greater than 0"
    else if (parseInt(num) !== num) return "Please enter an integer number"
    else if (num === undefined) return "Please pass a number"
    else{
      var total = 0
      for(var count = 0; count < num; count++){
        if(this.prime(count) === true) total += count
      }
     return total
    }
  }
}