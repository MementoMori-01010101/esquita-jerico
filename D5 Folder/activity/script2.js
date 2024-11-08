const start = parseInt(prompt("Enter the starting number:"));
const end = parseInt(prompt("Enter the ending number:"));

if (start <= end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
} else {
  console.log("Invalid input.");
}
