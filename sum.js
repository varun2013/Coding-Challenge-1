// 1. Simple Summation Function (using a loop):
function sumUsingLoop(n) {
    // initiate the initial value.
    let result = 0;
    // for loop is used to read out the value one by one and add their sum with the previous total sum.
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    // return the sum of n number.
    return result;
}

console.log(sumUsingLoop(10))

// Explanation:
// - This method uses a loop to iterate through numbers from 1 to n and accumulates their sum.
// - Advantages: Simple, easy to understand, and suitable for small values of n.
// - Disadvantages: Can be less efficient for large values of n due to the need for iteration.


// 2. Recursive Summation Function:
function sumRecursive(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumRecursive(n - 1);
    }
}
console.log(sumRecursive(10))

// Explanation:
// - This method uses recursion to calculate the sum by breaking down the problem into smaller sub-problems.
// - Advantages: Elegant and concise code, suitable for small to moderate values of n.
// - Disadvantages: Can lead to a stack overflow for very large values of n due to the recursive calls.

// 3. Mathematical Formula Implementation:
function sumUsingFormula(n) {
    return (n * (n + 1)) / 2;
}

console.log(sumUsingFormula(10))

// Explanation:
// - This method utilizes a mathematical formula for the sum of consecutive integers to directly calculate the sum.
// - Advantages: Extremely efficient, constant time complexity, suitable for any value of n.
// - Disadvantages: Requires knowledge of the formula, may not be as intuitive for readers without a mathematical background.
// - This formula is based on the Arithmetic Progression.
