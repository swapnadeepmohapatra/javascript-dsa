function multiply(n1, n2) {
  if (n1 === 0) return 0;
  if (n1 === 1) return n2;
  return n2 + multiply(n1 - 1, n2);
}

console.log(multiply(6, 4));
