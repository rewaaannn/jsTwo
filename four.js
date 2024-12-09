// the value of a circle’s radius 

let radius = prompt("What is the value of your circle's radius?");

if (radius !== null && !isNaN(radius) && radius > 0) {
    radius = parseFloat(radius);
    const area = Math.PI * radius * radius;
    alert('Total area of the circle is ' +area);
} else {
    alert("Please enter positive number for the radius.");
}


// another value to calculate its square root 
let value = prompt("What is the value you want to calculate its square root?");

if (value !== null && !isNaN(value) && value >= 0) {
    value = parseFloat(value);
    const sqrtValue = Math.sqrt(value);
    alert('Square root of' +value +'is' +sqrtValue );
} else {
    alert("Please enter non-negative number.");
}



// An angle to calculate its cos value 

let angle = prompt("Enter an angle to calculate its cos value:");


if (angle !== null && !isNaN(angle)) {
    angle = parseFloat(angle);
    const cosValue = Math.cos((angle * Math.PI) / 180); 
    alert ("cos"+angle+'°' +'is' +cosValue.toFixed(4));
} else {
    alert("Please enter a number for the angle.");
}