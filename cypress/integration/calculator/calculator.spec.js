/// <reference types="cypress" />

context("testing calculator with cypress", function () {
  describe('Calculator', function() {

      beforeEach(function() {
        cy.visit("../../index.html");
      });

      it('Should not allow multiple zeros as valid input', function(){
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#equal').click();
        cy.get('#display').should('have.value','0');
      });

      it('Should not allow a zero before another digit of input', function(){
        cy.get('#n0').click();
        cy.get('#n6').click();
        cy.get('#equal').click();
        cy.get('#display').should('have.value','6');
      });

      it('Should not allow a zero before another digit of input for a second operand', function(){
        cy.get('#n6').click();
        cy.get('#multiply').click();
        cy.get('#n0').click();
        cy.get('#n6').click();
        cy.get('#equal').click();
        cy.get('#display').should('have.value','36');
      });

      //  CLEAR SCREEN

      it('Should be able to clear the screen after doing no calculations', function(){
        cy.get('#clear').click();
        cy.get('#display').should('have.value','');
      });

      it('Should be able to clear the screen after inserting a negative integer', function(){
        cy.get('#minus').click();
        cy.get('#n1').click();
        cy.get('#n5').click();
        cy.get('#clear').click();
        cy.get('#display').should('have.value','');
      });

      it('Should be able to clear the screen after inserting a positive integer', function(){
        cy.get('#n1').click();
        cy.get('#n5').click();
        cy.get('#clear').click();
        cy.get('#display').should('have.value','');
      });

      it('Should allow clear to be pressed multiple times', function(){
        cy.get('#n5').click();
        cy.get('#clear').click();
        cy.get('#display').should('have.value','');
        cy.get('#n1').click();
        cy.get('#n2').click();
        cy.get('#n3').click();
        cy.get('#n4').click();
        cy.get('#n5').click();
        cy.get('#clear').click();
        cy.get('#display').should('have.value','');
        cy.get('#n4').click();
        cy.get('#n5').click();
        cy.get('#clear').click();
        cy.get('#display').should('have.value','');
      });

      it('Should be able to clear after inserting a large negative intgeger', function(){
        cy.get('#minus').click();
        cy.get('#n1').click();
        cy.get('#n2').click();
        cy.get('#n3').click();
        cy.get('#n4').click();
        cy.get('#n5').click();
        cy.get('#n6').click();
        cy.get('#n7').click();
        cy.get('#n8').click();
        cy.get('#n9').click();
        cy.get('#n0').click();
        cy.get('#clear').click();
        cy.get('#display').should('have.value','');
      });

      it('Should be able to clear after inserting a large positive intgeger', function(){
        cy.get('#n1').click();
        cy.get('#n2').click();
        cy.get('#n3').click();
        cy.get('#n4').click();
        cy.get('#n5').click();
        cy.get('#n6').click();
        cy.get('#n7').click();
        cy.get('#n8').click();
        cy.get('#n9').click();
        cy.get('#n0').click();
        cy.get('#clear').click();
        cy.get('#display').should('have.value','');
      });

      //ADDITION 

      it('should return 0 for 0 + 0', function() {
        cy.get('#n0').click(); 
        cy.get('#add').click(); 
        cy.get('#n0').click(); 
        cy.get('#equal').click(); 
        cy.get('#display').should('have.value','0');
      });

      it('should return 800 for 000450 + 00350 ', function() { 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n4').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#add').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n3').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#equal').click(); 
        cy.get('#display').should('have.value','800');
      });
  
      it('should return 450 for 000450 + 000 ', function() { 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n4').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#add').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click();  
        cy.get('#n0').click(); 
        cy.get('#equal').click(); 
        cy.get('#display').should('have.value','450');
      });
  
      it('should return 450 for 000450 + 000 + 0001', function() { 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n4').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#add').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click();  
        cy.get('#n0').click(); 
        cy.get('#add').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click();  
        cy.get('#n0').click(); 
        cy.get('#n1').click(); 
        cy.get('#equal').click(); 
        cy.get('#display').should('have.value','451');
      });

      it('Should ignore the starting division sign and carry out normal calculation', function() {
        cy.get('#divide').click();
        cy.get('#n7').click(); 
        cy.get('#add').click();
        cy.get('#n3').click()
        cy.get('#equal').click();
        cy.get('#display').should('have.value','10');
      });
  
      it('Should ignore the multiplication  sign and carry out normal calculation', function() {
        cy.get('#multiply').click();
        cy.get('#n7').click(); 
        cy.get('#minus').click();
        cy.get('#n3').click()
        cy.get('#equal').click();
        cy.get('#display').should('have.value','4');
      });
      
      it('should return 3.142857142857143 for 22 - 0000 / 7', function() { 
        cy.get('#n2').click(); 
        cy.get('#n2').click(); 
        cy.get('#minus').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#divide').click(); 
        cy.get('#n7').click(); 
        cy.get('#equal').click(); 
        cy.get('#display').should('have.value','3.142857142857143');
      });

      //Adding Two Positive Numbers
      it('Should be able to add two positive integers numbers', function() {
        cy.get('#n7').click(); 
        cy.get('#add').click();
        cy.get('#n3').click()
        cy.get('#equal').click();
        cy.get('#display').should('have.value','10');
      });

      it('Should be able to add a negative integer and zero', function() {
        cy.get('#minus').click();
        cy.get('#n7').click(); 
        cy.get('#add').click();
        cy.get('#n0').click()
        cy.get('#equal').click();
        cy.get('#display').should('have.value','-7');
      });

      it('Should be able to add zero and a positive integer', function() {
        cy.get('#n7').click(); 
        cy.get('#add').click();
        cy.get('#n0').click()
        cy.get('#equal').click();
        cy.get('#display').should('have.value','7');
      });

      it('Should be able to add zero and a positive integer', function() {
        cy.get('#minus').click();
        cy.get('#n7').click(); 
        cy.get('#add').click();
        cy.get('#n7').click()
        cy.get('#equal').click();
        cy.get('#display').should('have.value','0');
      });

      it('Should be able to add two large positive integers', function() {
        cy.get('#n7').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#add').click();
        cy.get('#n3').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#equal').click();
        cy.get('#display').should('have.value','10000000');
      });

      it('Should be able to add a positive integer to the results of a previous operation', function() {
        cy.get('#n1').click();
        cy.get('#n5').click();
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#minus').click();
        cy.get('#n2').click(); 
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#equal').click();
        cy.get('#display').should('have.value','-500');
        cy.get('#add').click();
        cy.get('#n5').click()
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#equal').click();
        cy.get('#display').should('have.value','0');
      });

      it('Should be able to add a large integer to a previous result', function() {
        cy.get('#n1').click();
        cy.get('#n5').click();
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#minus').click();
        cy.get('#n2').click(); 
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#equal').click();
        cy.get('#display').should('have.value','-500');
        cy.get('#add').click();
        cy.get('#n1').click()
        cy.get('#n2').click();
        cy.get('#n3').click();
        cy.get('#n4').click();
        cy.get('#n5').click();
        cy.get('#n6').click();
        cy.get('#n7').click();
        cy.get('#n8').click();
        cy.get('#n9').click();
        cy.get('#equal').click();
        cy.get('#display').should('have.value','123456289');
      });

      //Adding All Numbers
      it('Should return 45 for 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 0', function() {
        cy.get('#n1').click(); 
        cy.get('#add').click();
        cy.get('#n2').click()
        cy.get('#add').click();
        cy.get('#n3').click()
        cy.get('#add').click();
        cy.get('#n4').click()
        cy.get('#add').click();
        cy.get('#n5').click()
        cy.get('#add').click();
        cy.get('#n6').click()
        cy.get('#add').click();
        cy.get('#n7').click()
        cy.get('#add').click();
        cy.get('#n8').click()
        cy.get('#add').click();
        cy.get('#n9').click()
        cy.get('#add').click();
        cy.get('#n0').click()
        cy.get('#equal').click();
        cy.get('#display').should('have.value','45');
      });

      // SUBTRACTION
      it('Should be able to subtract two positive integers numbers', function() {
        cy.get('#n7').click(); 
        cy.get('#minus').click();
        cy.get('#n3').click()
        cy.get('#equal').click();
        cy.get('#display').should('have.value','4');
      });

      it('Should be able to subtract zero from negative integer', function() {
        cy.get('#minus').click();
        cy.get('#n7').click(); 
        cy.get('#minus').click();
        cy.get('#n0').click()
        cy.get('#equal').click();
        cy.get('#display').should('have.value','-7');
      });

      it('Should be able to subtract zero from a positive integer', function() {
        cy.get('#n7').click(); 
        cy.get('#minus').click();
        cy.get('#n0').click()
        cy.get('#equal').click();
        cy.get('#display').should('have.value','7');
      });

      it('Should be able to subtract an integer from the results of a previous operation', function() {
        cy.get('#n1').click();
        cy.get('#n5').click();
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#minus').click();
        cy.get('#n2').click(); 
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#equal').click();
        cy.get('#display').should('have.value','-500');
        cy.get('#minus').click();
        cy.get('#n5').click()
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#equal').click();
        cy.get('#display').should('have.value','-1000');
      });

      it('Should be able to subtract two large integers', function() {
        cy.get('#n1').click();
        cy.get('#n3').click();
        cy.get('#n5').click();
        cy.get('#n0').click();
        cy.get('#n0').click(); 
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#minus').click();
        cy.get('#n9').click()
        cy.get('#n7').click();
        cy.get('#n5').click();
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#equal').click();
        cy.get('#display').should('have.value','-84000000');
      });

      it('Should be able to subtract a large integer from the results of a previous result', function() {
        cy.get('#n1').click();
        cy.get('#n5').click();
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#minus').click();
        cy.get('#n2').click(); 
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#equal').click();
        cy.get('#display').should('have.value','-500');
        cy.get('#minus').click();
        cy.get('#n1').click()
        cy.get('#n2').click();
        cy.get('#n3').click();
        cy.get('#n4').click();
        cy.get('#n5').click();
        cy.get('#n6').click();
        cy.get('#n7').click();
        cy.get('#n8').click();
        cy.get('#n9').click();
        cy.get('#equal').click();
        cy.get('#display').should('have.value','-123457289');
      });

      //MULTIPLICATION 

      //Multiply Two Positive Numbers
      it('Should be able to multiply two positive integers numbers', function() {
        cy.get('#n7').click(); 
        cy.get('#multiply').click();
        cy.get('#n3').click()
        cy.get('#equal').click();
        cy.get('#display').should('have.value','21');
      });

      it('Should be able to multiply a integer multiplicand with zero', function() {
        cy.get('#n7').click(); 
        cy.get('#multiply').click();
        cy.get('#n0').click()
        cy.get('#equal').click();
        cy.get('#display').should('have.value','0');
      });

      it('Should be able to multiply a negative integer multiplicand with a positive intger multiplier', function() {
        cy.get('#minus').click();
        cy.get('#n7').click(); 
        cy.get('#multiply').click();
        cy.get('#n3').click()
        cy.get('#equal').click();
        cy.get('#display').should('have.value','-21');
      });

      it('Should be able to multiply the result of a previous operation by a positive integer', function() {
        cy.get('#n1').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#minus').click();
        cy.get('#n2').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#equal').click();
        cy.get('#display').should('have.value','-1000');
        cy.get('#multiply').click();
        cy.get('#n2').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click();
        cy.get('#equal').click();
        cy.get('#display').should('have.value','-250000');
      });

      it('Should be able to multiply two large integers', function() {
        cy.get('#n1').click(); 
        cy.get('#n3').click(); 
        cy.get('#n5').click(); 
        cy.get('#n4').click();
        cy.get('#n2').click();
        cy.get('#n1').click();
        cy.get('#n6').click();
        cy.get('#n0').click();
        cy.get('#multiply').click();
        cy.get('#n2').click(); 
        cy.get('#n5').click(); 
        cy.get('#n3').click(); 
        cy.get('#n4').click(); 
        cy.get('#n5').click(); 
        cy.get('#n7').click();
        cy.get('#n6').click(); 
        cy.get('#n0').click(); 
        cy.get('#equal').click();
        cy.get('#display').should('have.value','343236337241600');
      });

      it('Should be able to multiply the result of a previous operation by large integer', function() {
        cy.get('#n1').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#minus').click();
        cy.get('#n2').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#equal').click();
        cy.get('#display').should('have.value','-1000');
        cy.get('#multiply').click();
        cy.get('#n2').click(); 
        cy.get('#n5').click(); 
        cy.get('#n3').click(); 
        cy.get('#n4').click(); 
        cy.get('#n5').click(); 
        cy.get('#n7').click();
        cy.get('#n6').click(); 
        cy.get('#n0').click(); 
        cy.get('#equal').click();
        cy.get('#display').should('have.value','-25345760000');
      });

      it('Should be able to multiply the result of a previous operation by zero when the previous result is zero', function() {
        cy.get('#minus').click();
        cy.get('#n7').click(); 
        cy.get('#multiply').click();
        cy.get('#n0').click()
        cy.get('#equal').click();
        cy.get('#display').should('have.value','0');
        cy.get('#multiply').click();
        cy.get('#n0').click();
        cy.get('#equal').click();
        cy.get('#display').should('have.value','0');
      });

      // DIVISION

      it('Should be able to divide two positive integers', function() {
        cy.get('#n7').click(); 
        cy.get('#divide').click();
        cy.get('#n1').click();
        cy.get('#n4').click();
        cy.get('#equal').click();
        cy.get('#display').should('have.value','0.5');
      });

      it('Should be able to divide 0 by a integer divisor', function() {
        cy.get('#n0').click(); 
        cy.get('#divide').click();
        cy.get('#n1').click();
        cy.get('#n4').click();
        cy.get('#equal').click();
        cy.get('#display').should('have.value','0');
      });

      it('Should be able to divide a negative dividend by a positive divisor', function() {
        cy.get('#minus').click();
        cy.get('#n7').click(); 
        cy.get('#divide').click();
        cy.get('#n1').click();
        cy.get('#n4').click();
        cy.get('#equal').click();
        cy.get('#display').should('have.value','-0.5');
      });

      it('Should be able to divide the result of a previous operation by a positive integer', function() {
        cy.get('#n1').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#minus').click();
        cy.get('#n2').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#equal').click();
        cy.get('#display').should('have.value','-1000');
        cy.get('#divide').click();
        cy.get('#n2').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#equal').click();
        cy.get('#display').should('have.value','-0.4');
      });

      it('Should return infinity for division by 0', function() {
        cy.get('#n1').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#divide').click();
        cy.get('#n0').click(); 
        cy.get('#equal').click();
        cy.get('#display').should('have.value','Infinity');
      });

      it('Should be able to divide the result of a previous operation by a large integer', function() {
        cy.get('#n1').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#minus').click();
        cy.get('#n2').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#equal').click();
        cy.get('#display').should('have.value','-1000');
        cy.get('#divide').click();
        cy.get('#n2').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#equal').click();
        cy.get('#display').should('have.value','-4e-7');
      });

      // SQUARE ROOT

      it('Should return the square root of a postive integer', function() {
        cy.get('#n2').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#sqrt').click();
        cy.get('#display').should('have.value','500');
      });

      it('Should allow multiple clicks of the square root operator', function() {
        cy.get('#n1').click();  
        cy.get('#n6').click();  
        cy.get('#sqrt').click(); 
        cy.get('#sqrt').click();
        cy.get('#sqrt').click(); 
        cy.get('#display').should('have.value','1.414');
      });

      it('Should return the square root of a large postive integer', function() {
        cy.get('#n2').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click();
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click();
        cy.get('#sqrt').click();
        cy.get('#display').should('have.value','5000000');
      });

      it('Should return the square root of a zero as zero', function() { 
        cy.get('#n0').click(); 
        cy.get('#sqrt').click();
        cy.get('#display').should('have.value','0');
      });

      it('Should be able to square root of the result of a previous operation', function() {
        cy.get('#n1').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#add').click();
        cy.get('#n2').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#equal').click();
        cy.get('#display').should('have.value','4000');
        cy.get('#sqrt').click();
        cy.get('#display').should('have.value','63.246');
      });

      it('Should not allow the square root of a negative integer', function(){
        cy.get('#minus').click();
        cy.get('#n3').click();
        cy.get('#n6').click();
        cy.get('#sqrt').click();
        cy.get('#display').should('have.value','NaN');
      });

      it('Should return NaN for the square root of an empty display', function(){
        cy.get('#sqrt').click();
        cy.get('#display').should('have.value','NaN');
      });

      // PLUS / MINUS

      it('Should return NaN for the Plus/Minus of an empty display', function(){
        cy.get('#plus_minus').click();
        cy.get('#display').should('have.value','NaN');
      });

      it('Should return the calculation of the display with a negative result for one click of the plus/minus operator', function(){
        cy.get('#n9').click();
        cy.get('#add').click();
        cy.get('#n9').click();
        cy.get('#plus_minus').click();
        cy.get('#display').should('have.value','-18');
      });

      it('Should return the calculation of the display with a positive result for two click of the plus/minus operator', function(){
        cy.get('#n9').click();
        cy.get('#add').click();
        cy.get('#n9').click();
        cy.get('#plus_minus').click();
        cy.get('#plus_minus').click();
        cy.get('#display').should('have.value','18');
      });

      it('Should allow multiple clicks of the plus/minus operator', function(){
        cy.get('#n9').click();
        cy.get('#plus_minus').click();
        cy.get('#plus_minus').click();
        cy.get('#plus_minus').click();
        cy.get('#plus_minus').click();
        cy.get('#display').should('have.value','9');
      });

      it('Should be able to change the sign of the result of a previous operation', function() {
        cy.get('#n1').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#add').click();
        cy.get('#n2').click(); 
        cy.get('#n5').click(); 
        cy.get('#n0').click(); 
        cy.get('#n0').click(); 
        cy.get('#equal').click();
        cy.get('#display').should('have.value','4000');
        cy.get('#plus_minus').click();
        cy.get('#display').should('have.value','-4000');
      });

      // PERCENTAGE 

      it('Should return NaN for the percentage of an empty display', function(){
        cy.get('#Percent').click();
        cy.get('#display').should('have.value','NaN');
      });

      it('Should allow multiple clicks of the percentage operator', function() {
        cy.get('#n1').click();  
        cy.get('#n6').click();  
        cy.get('#Percent').click(); 
        cy.get('#Percent').click();
        cy.get('#Percent').click(); 
        cy.get('#display').should('have.value','0.000016');
      });

      it('Should return the percentage of a negative number', function() {
        cy.get('#minus').click();
        cy.get('#n1').click();  
        cy.get('#n6').click();   
        cy.get('#Percent').click();
        cy.get('#display').should('have.value','-0.16');
      });

      it('Should return the percentage of a positive number', function() {
        cy.get('#n1').click();  
        cy.get('#n6').click();   
        cy.get('#Percent').click();
        cy.get('#display').should('have.value','0.16');
      });

      it('Should be able to find the percentage of the results of a previous operation', function() {
        cy.get('#n1').click();
        cy.get('#n5').click();
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#minus').click();
        cy.get('#n2').click(); 
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#equal').click();
        cy.get('#display').should('have.value','-500');
        cy.get('#Percent').click();
        cy.get('#display').should('have.value','-5');
      });

      // MEMORY RECALL
      it('Should return what is in memory when the Memory Recall Operator is clicked', function() {
        cy.get('#MRC').click();
        cy.get('#display').should('have.value', '0');
      });

      it('Should allow what is recall from memory to be used in further operations', function() {
        cy.get('#n2').click(); 
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#add').click(); 
        cy.get('#n5').click();
        cy.get('#n0').click();
        cy.get('#equal').click(); 
        cy.get('#clear').click();
        cy.get('#MRC').click();
        cy.get('#add').click(); 
        cy.get('#n5').click();
        cy.get('#n0').click();
        cy.get('#equal').click(); 
        cy.get('#display').should('have.value','300');
      });

      it('Should replace what is displayed with what is in memory', function() {
        cy.get('#n2').click(); 
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#add').click(); 
        cy.get('#n5').click();
        cy.get('#n0').click();
        cy.get('#MRC').click();
        cy.get('#display').should('have.value','0');
      });

      // MEMORY PLUS

      it('Should return zero when memory is empty', function() {
        cy.get('#M-add').click();
        cy.get('#display').should('have.value','0');
      });

      it('Should return the additon of what is in memory with the calculation of what is displayed', function() {
        cy.get('#n2').click(); 
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#add').click(); 
        cy.get('#n5').click();
        cy.get('#n0').click();
        cy.get('#equal').click(); 
        cy.get('#clear').click(); 

        cy.get('#n2').click(); 
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#add').click(); 
        cy.get('#n5').click();
        cy.get('#n0').click();
        cy.get('#M-add').click();
        cy.get('#display').should('have.value','500');
      });

      // MEMORY MINUS

      it('Should return zero when memory is empty', function() {
        cy.get('#M-').click();
        cy.get('#display').should('have.value','0');
      });

      it('Should return the subtraction of what is in memory with the calculation of what is displayed', function() {
        cy.get('#n2').click(); 
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#add').click(); 
        cy.get('#n5').click();
        cy.get('#n0').click();
        cy.get('#equal').click(); 
        cy.get('#clear').click(); 

        cy.get('#n2').click(); 
        cy.get('#n0').click();
        cy.get('#n0').click();
        cy.get('#add').click(); 
        cy.get('#n5').click();
        cy.get('#n0').click();
        cy.get('#M-').click();
        cy.get('#display').should('have.value','0');
      });

      // Multiple Consecutive Operators

      it('Should not allow the consecutive operators symbols', function() {
        cy.get('#add').click(); 
        cy.get('#add').click(); 
        cy.get('#equal').click();
        cy.get('#display').should('have.value','Error'); 
      });

      it('Should not allow the consecutive operators symbols', function() {
        cy.get('#minus').click(); 
        cy.get('#minus').click(); 
        cy.get('#equal').click();
        cy.get('#display').should('have.value','Error'); 
      });

      it('Should not allow the consecutive operators symbols', function() {
        cy.get('#divide').click(); 
        cy.get('#divide').click(); 
        cy.get('#equal').click();
        cy.get('#display').should('have.value','Error'); 
      });

      it('Should not allow the consecutive operators symbols', function() {
        cy.get('#multiply').click(); 
        cy.get('#multiply').click(); 
        cy.get('#equal').click();
        cy.get('#display').should('have.value','Error'); 
      });

      it('Should not allow the consecutive operators symbols', function() {
        cy.get('#add').click(); 
        cy.get('#multiply').click(); 
        cy.get('#divide').click(); 
        cy.get('#minus').click();
        cy.get('#equal').click();
        cy.get('#display').should('have.value','Error'); 
      });
    });
});