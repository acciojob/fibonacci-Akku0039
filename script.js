function fibonacci(num) {
// your code here
     if (num <= 1)
        return num;
    return fib(num-1) + fib(num-2);
  
}

module.exports = fibonacci;
