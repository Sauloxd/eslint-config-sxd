function fibonacci(n) {
  if (n === 1) return 1;
  if (n === 0) return 0;

  return fibonacci(n-1) + fibonacci(n - 2);
}

[
  [fibonacci(0), 0],
  [fibonacci(1), 1],
  [fibonacci(2), 1],
  [fibonacci(3), 2],
  [fibonacci(4), 3],
  [fibonacci(5), 5],
  [fibonacci(6), 8],
  [fibonacci(7), 13]
].map(([response, expected], index) => {
  if (response === expected) {
    console.log(`fibonacci(${index}) = ${response}`);
    return response;
  } else {
    console.log('fibonacci is wrong! expected fibonacci(${index}) to be ${expected} but got ${response}');
    return null;
  }
});
