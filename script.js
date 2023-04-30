function fibonacci(num) {
// your code here
     if (num < 0) {
    throw new Error("Input must be a non-negative integer.");
  } else if (num <= 1) {
    return num;
  } else {
    let a = 0;
    let b = 1;
    let c;
    for (let i = 2; i <= num; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return b;
  
}

module.exports = fibonacci;
