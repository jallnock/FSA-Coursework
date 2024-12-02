class Numbers {
  constructor(data) {
    // data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = data.split(",").map((number) => number * 1); // Correct 'str' to 'data'
    } else {
      this.data = data;
    }
  }

  count() {
    return this.data.length; // Fixed: removed the extra 'count()' call
  }

  printNumbers() {
    this.data.forEach((num, idx) => {
      console.log(`Index: ${idx}, Number: ${num}`); // Fixed: completed the loop body
    });
  }

  odds() {
    return this.data.filter((num) => num % 2 !== 0); // Fixed: removed the extra 'odds()' call and used 'num % 2 !== 0' for odd numbers
  }

  evens() {
    return this.data.filter((num) => num % 2 === 0); // This method is fine
  }

  sum() {
    return this.data.reduce((total, num) => total + num, 0); // This method is fine
  }

  product() {
    return this.data.reduce((total, num) => total * num, 1); // This method is fine
  }

  greaterThan(target) {
    return this.data.filter((num) => num > target); // This method is fine
  }

  howMany(target) {
    let count = 0;
    for (let num of this.data) {
      if (num === target) count++;
    }
    return count; // This method is fine
  }
}

// Prompt the user for a list of integers separated by commas
const str = prompt("Enter some numbers, like this", "1,2,3,3,5,9");

// Create an instance of Numbers
const n1 = new Numbers(str);
console.log(n1.count()); // Returns count of numbers
n1.printNumbers(); // Prints the number along with their indexes
console.log(n1.odds()); // Returns odd numbers
console.log(n1.evens()); // Returns even numbers
console.log(n1.sum()); // Returns sum of numbers
console.log(n1.product()); // Returns product of numbers
console.log(n1.greaterThan(3)); // Returns numbers greater than another number
console.log(n1.howMany(3)); // Returns the count of a specific number
