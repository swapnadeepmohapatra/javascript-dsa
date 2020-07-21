function exponent(power, base) {
  if (power === 1) return base;
  return base * exponent(power - 1, base);
}

console.log(exponent(2, 3));
