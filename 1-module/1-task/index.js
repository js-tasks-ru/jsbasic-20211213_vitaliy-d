function factorial(n) {
  let sum = 1;
  for (let i = 1; n > i; i++) {
    sum += i*sum;
  }
  return sum;
}

console.log (factorial(5));
