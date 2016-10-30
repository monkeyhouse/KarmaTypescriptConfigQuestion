/*
 * Unit tests for lib
 */

describe('Demo Test Runner', function() {

   var calc = new Calculator();

   it('should return 3 for 1 + 2', function() {
    expect( calc.add(1,2) ).toBe(3);
  });


});