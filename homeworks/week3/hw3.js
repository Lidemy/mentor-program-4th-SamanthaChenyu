function primeNumber(n) {
  if (n === 1) return false;
  const num = Math.sqrt(n);
  for (let i = 2; i <= num; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

primeNumber(7);
