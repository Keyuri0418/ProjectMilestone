function submitQuiz() {
    let score = 0;
    let totalQuestions = 5;

    // Correct answers
    let answers = {
        q1: "a",
        q2: "b",
        q3: "c",
        q4: "on page",
        q5: ["a", "c", "d"]
    };

    // Check single-choice answers
    //if (document.querySelector('input[name="q1"]:checked')?.value === answers.q1) score++;
    //if (document.querySelector('input[name="q2"]:checked')?.value === answers.q2) score++;
    //if (document.querySelector('input[name="q3"]:checked')?.value === answers.q3) score++;
// Question 1 - Single choice
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q1Feedback = document.querySelector("#q1 .feedback");
  if (q1) {
    if (q1.value === "A") {
      score++;
      q1Feedback.textContent = "Correct!";
      q1Feedback.style.color = "green";
    } else {
      q1Feedback.textContent = "Incorrect. Correct answer: A. Search Engine Optimization";
      q1Feedback.style.color = "red";
    }
  } else {
    q1Feedback.textContent = "You didn’t answer this one.";
    q1Feedback.style.color = "orange";
  }

  // Question 2 - Multi-choice
  const q2Inputs = document.querySelectorAll('input[name="q2"]:checked');
  const q2Values = Array.from(q2Inputs).map(i => i.value);
  const q2Feedback = document.querySelector("#q2 .feedback");
  const correctAnswersQ2 = ["A", "B"];

  if (q2Values.length > 0) {
    const isCorrect = correctAnswersQ2.every(val => q2Values.includes(val)) && q2Values.length === correctAnswersQ2.length;
    if (isCorrect) {
      score++;
      q2Feedback.textContent = "Correct!";
      q2Feedback.style.color = "green";
    } else {
      q2Feedback.textContent = "Incorrect. Correct answers: A and B.";
      q2Feedback.style.color = "red";
    }
  } else {
    q2Feedback.textContent = "You didn’t answer this one.";
    q2Feedback.style.color = "orange";
  }

  // Final Result
  //const result = document.getElementById("result");
  //result.innerHTML = `Score: ${score}/${total}<br>` +
                     //(score >= 1.5 ? "<strong>Result: Pass ✅</strong>" : "<strong>Result: Fail ❌</strong>");
// Final Result
  const result = document.getElementById("result");
  result.innerHTML = `Score: ${score}/${total}<br>` +
                     (score >= 1.5 ? "<strong>Result: Pass ✅</strong>" : "<strong>Result: Fail ❌</strong>");
  // Show Restart Button
  //document.getElementById("restart-btn").style.display = "inline-block";
    // Show Restart Button
  document.getElementById("restart-btn").style.display = "inline-block";
});
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
//function restartQuiz() {
  //  document.getElementById("quizForm").reset();
    //document.getElementById("result").innerHTML = "";
// Restart Button Logic
document.getElementById("restart-btn").addEventListener("click", function () {
  const inputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
  inputs.forEach(input => input.checked = false);

  document.querySelectorAll(".feedback").forEach(p => {
    p.textContent = "";
    p.style.color = "";
  });

  document.getElementById("result").textContent = "";
  document.getElementById("restart-btn").style.display = "none";

  window.scrollTo({ top: 0, behavior: 'smooth' });
});
}
