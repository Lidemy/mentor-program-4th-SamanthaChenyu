function narcissisticNumber(str) {
  let ans = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      ans += str[i].toUpperCase();
    } else {
      ans += str[i].toLowerCase();
    }
  }
  return ans;
}

narcissisticNumber(['5', '200']);
