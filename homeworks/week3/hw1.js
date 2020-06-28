function printStars(n) {
  const result = [];
  for (let i = 0; i < n; i += 1) {
    result[i] = '*'.repeat(i + 1);
  }
  return result;
}

printStars(5);
