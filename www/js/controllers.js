angular.module('app.controllers', [])


.controller('xorShiftAlgorithmCtrl', function($scope) {

  $scope.shiftNumber = function() {
    // Trun the user input into a BigInt
    var num = bigInt($scope.numberShift);
    // Take the Exclusive OR (XOR) of the number after it is bitshifted
    num = bigInt(num).xor(bigInt(num).shiftLeft(21));
    num = bigInt(num).xor(bigInt(num).shiftRight(35));
    
    // Assign the final number to the $scope for display
    $scope.shiftedNumber = bigInt(num).xor(bigInt(num).shiftLeft(4));
  };
})

.controller('gaussianAlgorithmCtrl', function($scope) {

})

.controller('genTenNumbers', function ($scope) {
  // declare variables
  var num;
  $scope.numbers = [];

  // Return a list of 10 prime numbers between 2^32 & 2^33 in size
  $scope.getNumbers = function() {

    // While we have less than ten numbers continue to run the application
    while($scope.numbers.length < 10){

      // Generate a random number between 2^32 and 2^33 in size
      num = bigInt.randBetween("2e128", "2e129");

      // Check if that number is prime
      // If it is add it to the list as a string
      if(bigInt(num).isPrime()){
        $scope.numbers.push(num.toString());
      }
    }
  };
})

.controller('findNextPrime', function($scope) {
  $scope.getNextPrime = function() {

    // hold the number so it doesnt change on the screen
    var number = $scope.number;

    // If the entered number is prime add 1 so the following
    // while loop dosent retrun the current number
    if(bigInt(number).isPrime()) {
      number += 1;
    }

    // Add 1 to the number until Prime number is found
    while (!bigInt(number).isPrime()) {
      number += 1;
    }

    // display the next prime number
    $scope.nextPrime = number;
  };
})

.controller('primeNumberGeneratorCtrl', function($scope) {
  // TODO : Delete this function if not used by end of project
});
