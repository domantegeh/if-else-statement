// If-else example
let language = "French";
let greeting = "Selamat Pagi";

if (language === "English") {
  greeting = "Good Morning!";
} else if (language === "French") {
  greeting = "Bonjour!";
} else if (language === "Japanese") {
  greeting = "Ohayou Gozaimasu!";
}

console.log(greeting);

// Ternary operator or conditional expression
const isMember = true;
const discount = isMember ? 0.1 : 0;
console.log(`You got ${discount * 100}% discount!`);

// Truthy and Falsy
let name = "";

if (name) {
  console.log(`Halo, ${name}!`);
} else {
  console.log("Name is empty!");
}
