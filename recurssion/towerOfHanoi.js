function toh(n, from_bar, to_bar, aux_bar) {
  if (n === 1) {
    return console.log(`Move ${n} from ${from_bar} to ${to_bar}`);
  }
  toh(n - 1, from_bar, aux_bar, to_bar);
  console.log(`Move ${n} from ${from_bar} to ${to_bar}`);
  toh(n - 1, aux_bar, to_bar, from_bar);
}

toh(3, "A", "B", "C");
