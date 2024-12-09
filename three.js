const numbers = [];
for (let i = 0; i < 5; i++) {
    const value = parseInt(prompt('Enter number:'), 10);
    numbers.push(value);
}

const descending = [...numbers].sort((a, b) => b - a);

const ascending = [...numbers].sort((a, b) => a - b);


console.log("You've entered the values of:", numbers.join(", "));
console.log("Your values after being sorted descending:", descending.join(", "));
console.log("Your values after being sorted ascending:", ascending.join(", "));