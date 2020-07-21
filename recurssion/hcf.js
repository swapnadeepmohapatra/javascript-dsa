function hcf(n1, n2) {
  if (n2 != 0) return hcf(n1, n2 % n1);
  return n1;
}

console.log(hcf(5, 10));
