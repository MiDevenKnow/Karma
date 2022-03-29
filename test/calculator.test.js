describe('Calculator', function() {

    beforeEach(function() {

        // inject the HTML fixture for the tests
        var fixture = `  <!-- calculator -->
        <div id="fixture" class="calculator">
      
          <!-- display -->
          <input id="display" type="text" class="display" disabled>
          <!-- keys -->
          <div class="keys">
            <!-- 4 rows of keys -->
            <div class="row">
              <button id="plus_minus" value="+-" class="operator">&#8723;</button>
              <button id="sqrt" value="sqrt" class="operator">&#8730;</button>
            </div>
            <div class="row">
              <button id="MRC" value="MRC" class="operator">mrc</button>
              <button id="M-" value="M-" class="operator">M-</button>
              <button id="M-add" value="M+" class="operator">M+</button>
              <button id="Percent" value="%" class="operator">%</button>
            </div>
            <div class="row">
              <button id="n7" value="7">7</button>
              <button id="n8" value="8">8</button>
              <button id="n9" value="9">9</button>
              <button id="add" value="+" class="operator">+</button>
            </div>
            <div class="row">
              <button id="n4" value="4">4</button>
              <button id="n5" value="5">5</button>
              <button id="n6" value="6">6</button>
              <button id="minus" value="-" class="operator">-</button>
            </div>
            <div class="row">
              <button id="n1" value="1">1</button>
              <button id="n2" value="2">2</button>
              <button id="n3" value="3">3</button>
              <button id="multiply" value="*" class="operator">*</button>
            </div>
            <div class="row">
              <button id="clear" value="C" class="operator">C</button>
              <button id="n0" value="0">0</button>
              <button id="divide" value="/" class="operator">/</button>
              <button id="equal" value="=" class="operator">=</button>
            </div>
          </div>
        </div>`;

        document.body.insertAdjacentHTML(
            'afterbegin', 
            fixture);
    });

    // remove the html fixture from the DOM
    afterEach(function() {
        document.body.removeChild(document.getElementById('fixture'));
    });

    // call the init function of calculator to register DOM elements
    beforeEach(function() {
        window.calculator.init();
    });

    // BAD INPUT

    it('Should not allow multiple zeros as valid input', function(){
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('0');
    });

    it('Should not allow a zero before another digit of input', function(){
      document.getElementById('n0').click();
      document.getElementById('n6').click();
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('6');
    });

    it('Should not allow a zero before another digit of input for a second operand', function(){
      document.getElementById('n6').click();
      document.getElementById('multiply').click();
      document.getElementById('n0').click();
      document.getElementById('n6').click();
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('36');
    });

    //  CLEAR SCREEN

    it('Should be able to clear the screen after doing no calculations', function(){
      document.getElementById('clear').click();
      expect(document.getElementById('display').value).toBe('');
    });

    it('Should be able to clear the screen after inserting a negative integer', function(){
      document.getElementById('minus').click();
      document.getElementById('n1').click();
      document.getElementById('n5').click();
      document.getElementById('clear').click();
      expect(document.getElementById('display').value).toBe('');
    });

    it('Should be able to clear the screen after inserting a positive integer', function(){
      document.getElementById('n1').click();
      document.getElementById('n5').click();
      document.getElementById('clear').click();
      expect(document.getElementById('display').value).toBe('');
    });

    it('Should allow clear to be pressed multiple times', function(){
      document.getElementById('n5').click();
      document.getElementById('clear').click();
      expect(document.getElementById('display').value).toBe('');
      document.getElementById('n1').click();
      document.getElementById('n2').click();
      document.getElementById('n3').click();
      document.getElementById('n4').click();
      document.getElementById('n5').click();
      document.getElementById('clear').click();
      expect(document.getElementById('display').value).toBe('');
      document.getElementById('n4').click();
      document.getElementById('n5').click();
      document.getElementById('clear').click();
      expect(document.getElementById('display').value).toBe('');
    });

    it('Should be able to clear after inserting a large negative intgeger', function(){
      document.getElementById('minus').click();
      document.getElementById('n1').click();
      document.getElementById('n2').click();
      document.getElementById('n3').click();
      document.getElementById('n4').click();
      document.getElementById('n5').click();
      document.getElementById('n6').click();
      document.getElementById('n7').click();
      document.getElementById('n8').click();
      document.getElementById('n9').click();
      document.getElementById('n0').click();
      document.getElementById('clear').click();
      expect(document.getElementById('display').value).toBe('');
    });

    it('Should be able to clear after inserting a large positive intgeger', function(){
      document.getElementById('n1').click();
      document.getElementById('n2').click();
      document.getElementById('n3').click();
      document.getElementById('n4').click();
      document.getElementById('n5').click();
      document.getElementById('n6').click();
      document.getElementById('n7').click();
      document.getElementById('n8').click();
      document.getElementById('n9').click();
      document.getElementById('n0').click();
      document.getElementById('clear').click();
      expect(document.getElementById('display').value).toBe('');
    });

    //ADDITION 

    it('should return 0 for 0 + 0', function() {
      document.getElementById('n0').click(); 
      document.getElementById('add').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('equal').click(); 
      expect(document.getElementById('display').value).toBe('0');
    });

    //Adding Two Positive Numbers
    it('Should be able to add two positive integers numbers', function() {
      document.getElementById('n7').click(); 
      document.getElementById('add').click();
      document.getElementById('n3').click()
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('10');
    });

    it('Should be able to add a negative integer and zero', function() {
      document.getElementById('minus').click();
      document.getElementById('n7').click(); 
      document.getElementById('add').click();
      document.getElementById('n0').click()
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('-7');
    });

    it('Should ignore the starting division sign and carry out normal calculation', function() {
      document.getElementById('divide').click();
      document.getElementById('n7').click(); 
      document.getElementById('add').click();
      document.getElementById('n3').click()
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('10');
    });

    it('Should ignore the multiplication sign and carry out normal calculation', function() {
      document.getElementById('multiply').click();
      document.getElementById('n7').click(); 
      document.getElementById('minus').click();
      document.getElementById('n3').click()
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('4');
    });

    it('Should be able to add zero and a positive integer', function() {
      document.getElementById('n7').click(); 
      document.getElementById('add').click();
      document.getElementById('n0').click()
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('7');
    });

    it('Should be able to add zero and a positive integer', function() {
      document.getElementById('minus').click();
      document.getElementById('n7').click(); 
      document.getElementById('add').click();
      document.getElementById('n7').click()
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('0');
    });

    it('should return 800 for 000450 + 00350 ', function() { 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n4').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('add').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n3').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('equal').click(); 
      expect(document.getElementById('display').value).toBe('800');
    });

    it('should return 450 for 000450 + 000 ', function() { 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n4').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('add').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click();  
      document.getElementById('n0').click(); 
      document.getElementById('equal').click(); 
      expect(document.getElementById('display').value).toBe('450');
    });

    it('should return 3.142857142857143 for 22 - 0000 / 7', function() { 
      document.getElementById('n2').click(); 
      document.getElementById('n2').click(); 
      document.getElementById('minus').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('divide').click(); 
      document.getElementById('n7').click(); 
      document.getElementById('equal').click(); 
      expect(document.getElementById('display').value).toBe('3.142857142857143');
    });


    it('should return 450 for 000450 + 000 + 0001', function() { 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n4').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('add').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click();  
      document.getElementById('n0').click(); 
      document.getElementById('add').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click();  
      document.getElementById('n0').click(); 
      document.getElementById('n1').click(); 
      document.getElementById('equal').click(); 
      expect(document.getElementById('display').value).toBe('451');
    });

    it('Should be able to add two large positive integers', function() {
      document.getElementById('n7').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('add').click();
      document.getElementById('n3').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('10000000');
    });

    it('Should be able to add a positive integer to the results of a previous operation', function() {
      document.getElementById('n1').click();
      document.getElementById('n5').click();
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('minus').click();
      document.getElementById('n2').click(); 
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('-500');
      document.getElementById('add').click();
      document.getElementById('n5').click()
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('0');
    });

    it('Should be able to add a large integer to a previous result', function() {
      document.getElementById('n1').click();
      document.getElementById('n5').click();
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('minus').click();
      document.getElementById('n2').click(); 
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('-500');
      document.getElementById('add').click();
      document.getElementById('n1').click()
      document.getElementById('n2').click();
      document.getElementById('n3').click();
      document.getElementById('n4').click();
      document.getElementById('n5').click();
      document.getElementById('n6').click();
      document.getElementById('n7').click();
      document.getElementById('n8').click();
      document.getElementById('n9').click();
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('123456289');
    });

    //Adding All Numbers
    it('Should return 45 for 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 0', function() {
      document.getElementById('n1').click(); 
      document.getElementById('add').click();
      document.getElementById('n2').click()
      document.getElementById('add').click();
      document.getElementById('n3').click()
      document.getElementById('add').click();
      document.getElementById('n4').click()
      document.getElementById('add').click();
      document.getElementById('n5').click()
      document.getElementById('add').click();
      document.getElementById('n6').click()
      document.getElementById('add').click();
      document.getElementById('n7').click()
      document.getElementById('add').click();
      document.getElementById('n8').click()
      document.getElementById('add').click();
      document.getElementById('n9').click()
      document.getElementById('add').click();
      document.getElementById('n0').click()
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('45');
    });

    // SUBTRACTION
    it('Should be able to subtract two positive integers numbers', function() {
      document.getElementById('n7').click(); 
      document.getElementById('minus').click();
      document.getElementById('n3').click()
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('4');
    });

    it('Should be able to subtract zero from negative integer', function() {
      document.getElementById('minus').click();
      document.getElementById('n7').click(); 
      document.getElementById('minus').click();
      document.getElementById('n0').click()
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('-7');
    });

    it('Should be able to subtract zero from a positive integer', function() {
      document.getElementById('n7').click(); 
      document.getElementById('minus').click();
      document.getElementById('n0').click()
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('7');
    });

    it('Should be able to subtract an integer from the results of a previous operation', function() {
      document.getElementById('n1').click();
      document.getElementById('n5').click();
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('minus').click();
      document.getElementById('n2').click(); 
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('-500');
      document.getElementById('minus').click();
      document.getElementById('n5').click()
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('-1000');
    });

    it('Should be able to subtract two large integers', function() {
      document.getElementById('n1').click();
      document.getElementById('n3').click();
      document.getElementById('n5').click();
      document.getElementById('n0').click();
      document.getElementById('n0').click(); 
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('minus').click();
      document.getElementById('n9').click()
      document.getElementById('n7').click();
      document.getElementById('n5').click();
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('-84000000');
    });

    it('Should be able to subtract a large integer from the results of a previous result', function() {
      document.getElementById('n1').click();
      document.getElementById('n5').click();
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('minus').click();
      document.getElementById('n2').click(); 
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('-500');
      document.getElementById('minus').click();
      document.getElementById('n1').click()
      document.getElementById('n2').click();
      document.getElementById('n3').click();
      document.getElementById('n4').click();
      document.getElementById('n5').click();
      document.getElementById('n6').click();
      document.getElementById('n7').click();
      document.getElementById('n8').click();
      document.getElementById('n9').click();
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('-123457289');
    });

    //MULTIPLICATION 

    //Multiply Two Positive Numbers
    it('Should be able to multiply two positive integers numbers', function() {
      document.getElementById('n7').click(); 
      document.getElementById('multiply').click();
      document.getElementById('n3').click()
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('21');
    });

    it('Should be able to multiply a integer multiplicand with zero', function() {
      document.getElementById('n7').click(); 
      document.getElementById('multiply').click();
      document.getElementById('n0').click()
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('0');
    });

    it('Should be able to multiply a negative integer multiplicand with a positive intger multiplier', function() {
      document.getElementById('minus').click();
      document.getElementById('n7').click(); 
      document.getElementById('multiply').click();
      document.getElementById('n3').click()
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('-21');
    });

    it('Should be able to multiply the result of a previous operation by a positive integer', function() {
      document.getElementById('n1').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('minus').click();
      document.getElementById('n2').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('-1000');
      document.getElementById('multiply').click();
      document.getElementById('n2').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click();
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('-250000');
    });

    it('Should be able to multiply two large integers', function() {
      document.getElementById('n1').click(); 
      document.getElementById('n3').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n4').click();
      document.getElementById('n2').click();
      document.getElementById('n1').click();
      document.getElementById('n6').click();
      document.getElementById('n0').click();
      document.getElementById('multiply').click();
      document.getElementById('n2').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n3').click(); 
      document.getElementById('n4').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n7').click();
      document.getElementById('n6').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('343236337241600');
    });

    it('Should be able to multiply the result of a previous operation by large integer', function() {
      document.getElementById('n1').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('minus').click();
      document.getElementById('n2').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('-1000');
      document.getElementById('multiply').click();
      document.getElementById('n2').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n3').click(); 
      document.getElementById('n4').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n7').click();
      document.getElementById('n6').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('-25345760000');
    });

    it('Should be able to multiply the result of a previous operation by zero when the previous result is zero', function() {
      document.getElementById('minus').click();
      document.getElementById('n7').click(); 
      document.getElementById('multiply').click();
      document.getElementById('n0').click()
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('0');
      document.getElementById('multiply').click();
      document.getElementById('n0').click();
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('0');
    });

    // DIVISION

    it('Should be able to divide two positive integers', function() {
      document.getElementById('n7').click(); 
      document.getElementById('divide').click();
      document.getElementById('n1').click();
      document.getElementById('n4').click();
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('0.5');
    });

    it('Should be able to divide 0 by a integer divisor', function() {
      document.getElementById('n0').click(); 
      document.getElementById('divide').click();
      document.getElementById('n1').click();
      document.getElementById('n4').click();
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('0');
    });

    it('Should be able to divide a negative dividend by a positive divisor', function() {
      document.getElementById('minus').click();
      document.getElementById('n7').click(); 
      document.getElementById('divide').click();
      document.getElementById('n1').click();
      document.getElementById('n4').click();
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('-0.5');
    });

    it('Should be able to divide the result of a previous operation by a positive integer', function() {
      document.getElementById('n1').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('minus').click();
      document.getElementById('n2').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('-1000');
      document.getElementById('divide').click();
      document.getElementById('n2').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('-0.4');
    });

    it('Should return infinity for division by 0', function() {
      document.getElementById('n1').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('divide').click();
      document.getElementById('n0').click(); 
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('Infinity');
    });

    it('Should be able to divide the result of a previous operation by a large integer', function() {
      document.getElementById('n1').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('minus').click();
      document.getElementById('n2').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('-1000');
      document.getElementById('divide').click();
      document.getElementById('n2').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('-4e-7');
    });

    // SQUARE ROOT

    it('Should return the square root of a postive integer', function() {
      document.getElementById('n2').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('sqrt').click();
      expect(document.getElementById('display').value).toBe('500');
    });

    it('Should allow multiple clicks of the square root operator', function() {
      document.getElementById('n1').click();  
      document.getElementById('n6').click();  
      document.getElementById('sqrt').click(); 
      document.getElementById('sqrt').click();
      document.getElementById('sqrt').click(); 
      expect(document.getElementById('display').value).toBe('1.414');
    });

    it('Should return the square root of a large postive integer', function() {
      document.getElementById('n2').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click();
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click();
      document.getElementById('sqrt').click();
      expect(document.getElementById('display').value).toBe('5000000');
    });

    it('Should return the square root of a zero as zero', function() { 
      document.getElementById('n0').click(); 
      document.getElementById('sqrt').click();
      expect(document.getElementById('display').value).toBe('0');
    });

    it('Should be able to square root of the result of a previous operation', function() {
      document.getElementById('n1').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('add').click();
      document.getElementById('n2').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('4000');
      document.getElementById('sqrt').click();
      expect(document.getElementById('display').value).toBe('63.246');
    });

    it('Should not allow the square root of a negative integer', function(){
      document.getElementById('minus').click();
      document.getElementById('n3').click();
      document.getElementById('n6').click();
      document.getElementById('sqrt').click();
      expect(document.getElementById('display').value).toBe('NaN');
    });

    it('Should return NaN for the square root of an empty display', function(){
      document.getElementById('sqrt').click();
      expect(document.getElementById('display').value).toBe('NaN');
    });

    // PLUS / MINUS

    it('Should return NaN for the Plus/Minus of an empty display', function(){
      document.getElementById('plus_minus').click();
      expect(document.getElementById('display').value).toBe('NaN');
    });

    it('Should return the calculation of the display with a negative result for one click of the plus/minus operator', function(){
      document.getElementById('n9').click();
      document.getElementById('add').click();
      document.getElementById('n9').click();
      document.getElementById('plus_minus').click();
      expect(document.getElementById('display').value).toBe('-18');
    });

    it('Should return the calculation of the display with a positive result for two click of the plus/minus operator', function(){
      document.getElementById('n9').click();
      document.getElementById('add').click();
      document.getElementById('n9').click();
      document.getElementById('plus_minus').click();
      document.getElementById('plus_minus').click();
      expect(document.getElementById('display').value).toBe('18');
    });

    it('Should allow multiple clicks of the plus/minus operator', function(){
      document.getElementById('n9').click();
      document.getElementById('plus_minus').click();
      document.getElementById('plus_minus').click();
      document.getElementById('plus_minus').click();
      document.getElementById('plus_minus').click();
      expect(document.getElementById('display').value).toBe('9');
    });

    it('Should be able to change the sign of the result of a previous operation', function() {
      document.getElementById('n1').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('add').click();
      document.getElementById('n2').click(); 
      document.getElementById('n5').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('n0').click(); 
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('4000');
      document.getElementById('plus_minus').click();
      expect(document.getElementById('display').value).toBe('-4000');
    });

    // PERCENTAGE 

    it('Should return NaN for the percentage of an empty display', function(){
      document.getElementById('Percent').click();
      expect(document.getElementById('display').value).toBe('NaN');
    });

    it('Should allow multiple clicks of the percentage operator', function() {
      document.getElementById('n1').click();  
      document.getElementById('n6').click();  
      document.getElementById('Percent').click(); 
      document.getElementById('Percent').click();
      document.getElementById('Percent').click(); 
      expect(document.getElementById('display').value).toBe('0.000016');
    });

    it('Should return the percentage of a negative number', function() {
      document.getElementById('minus').click();
      document.getElementById('n1').click();  
      document.getElementById('n6').click();   
      document.getElementById('Percent').click();
      expect(document.getElementById('display').value).toBe('-0.16');
    });

    it('Should return the percentage of a positive number', function() {
      document.getElementById('n1').click();  
      document.getElementById('n6').click();   
      document.getElementById('Percent').click();
      expect(document.getElementById('display').value).toBe('0.16');
    });

    it('Should be able to find the percentage of the results of a previous operation', function() {
      document.getElementById('n1').click();
      document.getElementById('n5').click();
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('minus').click();
      document.getElementById('n2').click(); 
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('-500');
      document.getElementById('Percent').click();
      expect(document.getElementById('display').value).toBe('-5');
    });

    // MEMORY RECALL
    it('Should return what is in memory when the Memory Recall Operator is clicked', function() {
      document.getElementById('MRC').click();
      expect(document.getElementById('display').value).toBe(memory);
    });

    it('Should allow what is recall from memory to be used in further operations', function() {
      document.getElementById('n2').click(); 
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('add').click(); 
      document.getElementById('n5').click();
      document.getElementById('n0').click();
      document.getElementById('equal').click(); 
      document.getElementById('clear').click();
      document.getElementById('MRC').click();
      document.getElementById('add').click(); 
      document.getElementById('n5').click();
      document.getElementById('n0').click();
      document.getElementById('equal').click(); 
      expect(document.getElementById('display').value).toBe('300');
    });

    it('Should replace what is displayed with what is in memory', function() {
      document.getElementById('n2').click(); 
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('add').click(); 
      document.getElementById('n5').click();
      document.getElementById('n0').click();
      document.getElementById('MRC').click();
      expect(document.getElementById('display').value).toBe('0');
    });

    // MEMORY PLUS

    it('Should return zero when memory is empty', function() {
      document.getElementById('M-add').click();
      expect(document.getElementById('display').value).toBe('0');
    });

    it('Should return the additon of what is in memory with the calculation of what is displayed', function() {
      document.getElementById('n2').click(); 
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('add').click(); 
      document.getElementById('n5').click();
      document.getElementById('n0').click();
      document.getElementById('equal').click(); 
      document.getElementById('clear').click(); 

      document.getElementById('n2').click(); 
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('add').click(); 
      document.getElementById('n5').click();
      document.getElementById('n0').click();
      document.getElementById('M-add').click();
      expect(document.getElementById('display').value).toBe('500');
    });

    // MEMORY MINUS

    it('Should return zero when memory is empty', function() {
      document.getElementById('M-').click();
      expect(document.getElementById('display').value).toBe('0');
    });

    it('Should return the subtraction of what is in memory with the calculation of what is displayed', function() {
      document.getElementById('n2').click(); 
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('add').click(); 
      document.getElementById('n5').click();
      document.getElementById('n0').click();
      document.getElementById('equal').click(); 
      document.getElementById('clear').click(); 

      document.getElementById('n2').click(); 
      document.getElementById('n0').click();
      document.getElementById('n0').click();
      document.getElementById('add').click(); 
      document.getElementById('n5').click();
      document.getElementById('n0').click();
      document.getElementById('M-').click();
      expect(document.getElementById('display').value).toBe('0');
    });

    // Multiple Consecutive Operators

    it('Should not allow the consecutive operators symbols', function() {
      document.getElementById('add').click(); 
      document.getElementById('add').click(); 
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('Error'); 
    });

    it('Should not allow the consecutive operators symbols', function() {
      document.getElementById('minus').click(); 
      document.getElementById('minus').click(); 
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('Error'); 
    });

    it('Should not allow the consecutive operators symbols', function() {
      document.getElementById('divide').click(); 
      document.getElementById('divide').click(); 
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('Error'); 
    });

    it('Should not allow the consecutive operators symbols', function() {
      document.getElementById('multiply').click(); 
      document.getElementById('multiply').click(); 
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('Error'); 
    });

    it('Should not allow the consecutive operators symbols', function() {
      document.getElementById('add').click(); 
      document.getElementById('multiply').click(); 
      document.getElementById('divide').click(); 
      document.getElementById('minus').click();
      document.getElementById('equal').click();
      expect(document.getElementById('display').value).toBe('Error'); 
    });

});