function submitQuiz() {
    let score = 0;
    let totalQuestions = 5;

    // Correct answers
    let answers = {
        q1: "a",
        q2: "b",
        q3: "c",
        q4: "on-page",
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
