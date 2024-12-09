const name = prompt("Enter your name:");
const phoneNumber = prompt("Enter your phone number (8 digits):");
const mobileNumber = prompt("Enter your mobile number (11 digits, starting with 010, 011, or 012):");
const email = prompt("Enter your email (abc@123.com format):");


let isValid = true;


if (!isNaN(name)) {
alert("Name should be a character, not a number");
isValid = false;
}


if (isNaN(phoneNumber) || phoneNumber.length != 8) {
alert("Phone number should be a number with 8 digits");
isValid = false;
}

if (isNaN(mobileNumber) || mobileNumber.length != 11 || !/^01[012]/.test(mobileNumber)) {
alert("Mobile number should be a number with 11 digits and start with 010, 011, or 012");
isValid = false;
}


if (!/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(email)) {
alert("Email should be in the format abc@123.com");
isValid = false;
}

console.log("welcom dear guest" +name)
console.log("Your telephone number is" +phoneNumber)
console.log("your Mobile Number is" +mobileNumber)
console.log("Your Email is" +email)


