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

// exmaple
let score = 60;
if (score >= 90) {
  console.log("Selamat, Anda mendapatkan nilai A!");
} else if (score >= 80 && score <= 89) {
  console.log("Selamat, Anda mendapatkan nilai B!");
} else if (score >= 70 && score <= 79) {
  console.log("Selamat, Anda mendapatkan nilai C!");
} else if (score >= 60 && score <= 69) {
  console.log("Selamat, Anda mendapatkan nilai D!");
} else if (score < 60) {
  console.log("Selamat, Anda mendapatkan nilai E!");
}
