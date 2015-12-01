// AUTHOR - JAMES BYRNE

function genKeys(){
  var num_1 = getBigPrimeNumber();
  var num_2 = getBigPrimeNumber();

}

function getBigPrimeNumber(){
  var isPrime = false;

  // Generate a number of 2^32 in size and check if its prime
  // If prime return the number
  while (isPrime !== true) {
    
    var num = checkPrime(bigInt(32));
    console.log(num);
    if (num === true) {
      isPrime = true;
      return num;
    }
  }
}
