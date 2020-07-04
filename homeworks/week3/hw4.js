function palindrome(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversed += str[i];
  }
  return reversed;
}

function solve(lines) {
  const str = lines[0];
  if (palindrome(str) === str) {
    console.log('True');
  } else {
    console.log('False');
  }
}

solve('1');
