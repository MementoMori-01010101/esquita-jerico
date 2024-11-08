const score = parseInt(prompt("Enter Your Score"));

if (score >= 90) {
  alert("Grade: A");
} else if (score < 90 && score >= 80) {
  alert("Grade: B");
} else if (score < 80 && score >= 70) {
  alert("Grade: C");
} else if (score < 70 && score >= 60) {
  alert("Grade: D");
} else alert("Grade: F  Your is Score: " + score);
