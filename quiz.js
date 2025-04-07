function submitQuiz() {
    let score = 0;
    let totalQuestions = 5;

    // Correct answers
    let answers = {
        q1: "a",
        q2: "b",
        q3: "c",
        q4: "On-page",
        q5: ["a", "c", "d"]
    };

    // Check single-choice answers
    if (document.querySelector('input[name="q1"]:checked')?.value === answers.q1) score++;
    if (document.querySelector('input[name="q2"]:checked')?.value === answers.q2) score++;
    if (document.querySelector('input[name="q3"]:checked')?.value === answers.q3) score++;

    // Check fill-in-the-blank (case insensitive)
    let q4Answer = document.getElementById("q4").value.trim().toLowerCase();
    if (q4Answer === answers.q4) score++;

    // Check multiple-choice
    let selectedOptions = [...document.querySelectorAll('input[name="q5"]:checked')].map(el => el.value);
    if (JSON.stringify(selectedOptions.sort()) === JSON.stringify(answers.q5.sort())) score++;

    // Display results
    let resultText = `<p>Your Score: ${score}/${totalQuestions}</p>`;
    resultText += score >= 3 ? "<p>✅ You Passed!</p>" : "<p>❌ You Failed. Try Again!</p>";
    
    document.getElementById("result").innerHTML = resultText;
}

// Restart quiz function
function restartQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("result").innerHTML = "";
}
document.getElementById("submit-btn").addEventListener("click", function () {
    // Sample logic for calculating score goes here...

    // Show result (replace with your actual logic)
    document.getElementById("result").textContent = "You scored 4/5. Pass!";
    
    // Show restart button
    document.getElementById("restart-btn").style.display = "inline-block";
});

document.getElementById("restart-btn").addEventListener("click", function () {
    // Reset all radio and checkbox inputs
    const inputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"], input[type="text"]');
    inputs.forEach(input => input.checked = false || (input.value = ""));

    // Hide result and restart button again
    document.getElementById("result").textContent = "";
    document.getElementById("restart-btn").style.display = "none";

    // Optionally scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

