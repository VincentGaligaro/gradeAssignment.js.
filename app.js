// Prompt the user to input their score
let score = prompt("Please enter your score:");

// Convert the input to a number
score = Number(score);

// Check if the score is a valid number
if (isNaN(score)) {
    console.log("Invalid input. Please enter a valid number for the score.");
} else {
    // Determine the grade based on the score
    if (score >= 90) {
        console.log("Excellent");
    } else if (score >= 80) {
        console.log("Good");
    } else if (score >= 70) {
        console.log("Fair");
    } else {
        console.log("Needs Improvement");
    }
}
