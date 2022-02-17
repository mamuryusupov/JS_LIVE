// algo
// 1. loop numbers from 2 to num +
// 2. check if prime
// 2.1  iterate all numbers from 2 to index ++
// 2.2  index / secondindex === 0 - not prime
// 3. if prome - console
// in: num
// out: undef
function getPrimes(num) {
 // put your code here

 for (let index = 2; index < num; index++) {
  let isPrime = true;

  for (let secondIndex = 2; secondIndex < index; secondIndex++) {
   if (index % secondIndex === 0) {
    isPrime = false;
   }
  }
  if (isPrime) {
   console.log(index);
  }
 }
}

getPrimes(10);
