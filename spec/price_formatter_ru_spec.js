describe("Russian locale price (RUR) formatter", function() {

  describe("when a zero (0) is passed in", function() {
    it("returns '0' string", function() {
      var number = 0,
          result = number.formatPrice();
      assert(result === '0');
      assert(typeof result === 'string');
    });
  });

  describe("when a number 12345.98 is passed in", function() {
    it("returns '12 345.98'", function() {
      var number = 12345.98,
          result = number.formatPrice();
      assert(result === '12 345.98');
    });
  });

  describe("when a number with two zeroz (12345.00) is passed in", function() {
    it("returns '12 345'", function() {
      var number = 12345.00,
          result = number.formatPrice();
      assert(result === '12 345');
    });
  });

  describe("when a number with many signs after dot (12345.792332) is passed in", function() {
    it("returns rounded value '12 345.79'", function() {
      var number = 12345.792332,
          result = number.formatPrice();
      assert(result === '12 345.79');
    });
  });

  /**
   * Number can be negative.
   */
  describe("when a negative number (-223456.07 or -22345.07) is passed in", function() {
    it("returns rounded string value '-223 456.07' and '-22 345.07'", function() {
      var numberOne = -223456.07,
          numberTwo = -22345.07,
          resultOne = numberOne.formatPrice(),
          resultTwo = numberTwo.formatPrice();
      assert(resultOne === '-223 456.07');
      assert(resultTwo === '-22 345.07');
    });
  });

});
