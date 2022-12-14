function fibonacci(num) {
  //end condition
  if (num < 3) return [0, 1];

  const prevArray = fibonacci(num - 1);
  const lastValue = prevArray[prevArray.length - 1];
  const nextLastValue = prevArray[prevArray.length - 2];

  return prevArray.concat(lastValue + nextLastValue);
}

console.log(fibonacci(8));
