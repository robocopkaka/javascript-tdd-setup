'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sumOfPrimes.js');

describe("Test that it returns the sum of prime numbers from 0 to n", function() {
  it("should return a correct value for the sum of all prime numbers between 0 and 10", function(){
    assert(lib.sumOfPrimes(10) === 17 )
  });

  it("should return a correct value for the sum of all prime numbers between 0 and 20", function(){
    assert(lib.sumOfPrimes(20) === 77 )
  });

  it("should return a correct value for the sum of all prime numbers betwen 0 and 50", function(){
    var result = lib.sumOfPrimes(50)
    assert(result === 328)
  });

  it("should return a correct value for the sum of all prime numbers betwen 0 and 30", function(){
    assert(lib.sumOfPrimes(30) === 129)
  });

  it("should return a correct value for the sum of all prime numbers betwen 0 and 100", function(){
    assert(lib.sumOfPrimes(100) === 1060)
  });
});

describe("Test should return an error if it receives anything other than a number", function(){
  it("should return an error message when a string is passed as a parameter", function(){
    assert(lib.sumOfPrimes("5") === "Please pass a number")
  })

  it("should return an error message when a negative number is entered", function(){
    assert(lib.sumOfPrimes(-1) === "Enter a number greater than 0")
  });

  it("should return an error message when an array is passed as a parameter", function(){
    assert(lib.sumOfPrimes([1,2]) === "Please pass a number")
  });  
});

it("should return an error when a quotient is entered", function(){
  assert(lib.sumOfPrimes(10.5) === "Please enter an integer number")
});

describe("should return an error if no parameter is passed", function(){
  it("should return an error if no parameter is passed", function(){
    assert(lib.sumOfPrimes() === "Please pass a number")
  });
});