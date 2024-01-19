const divide = function (num1, num2) {
    if (num2 === 0) {
      return "Cannot divide by zero";
    }
    return num1 / num2;
  };
  const result = divide(2000, 100);
console.log(result);
  //  usage
  console.log(divide(10, 2)); // Output: 5
  console.log(divide(8, 0));  // Output: "Cannot divide by zero"
  const square = (num) => num * num;

// usage
console.log(square(5)); // Output: 25
console.log(square(8)); // Output: 64

const add = (num1, num2) => num1 + num2;

// Usage
console.log(add(5, 7)); // Output: 12
console.log(add(-3, 10)); // Output: 7

  