function submitQuiz() {
    let score = 0;
    let totalQuestions = 5;
  
let answers = {
        q1: "a",
        q2: "b",
        q3: "c",
        q4: "on page",
        q5: ["a", "c", "d"]
    };
document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submit-btn");
  const restartBtn = document.getElementById("restart-btn");
  const resultBox = document.getElementById("result");

  submitBtn.addEventListener("click", function () {
    let score = 0;
    let total = 5;

    // === Question 1: Single-choice ===
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q1Feedback = document.querySelector("#q1 .feedback");
    if (q1 && q1.value === "A") {
      score++;
      q1Feedback.textContent = "Correct!";
      q1Feedback.style.color = "green";
    } else {
      q1Feedback.textContent = "Incorrect. Correct answer: A. Search Engine Optimization";
      q1Feedback.style.color = "red";
    }

    // === Question 2: Multi-choice ===
    const q2Inputs = document.querySelector('input[name="q2"]:checked');
    const q2Values = Array.from(q2Inputs).map(i => i.value);
    const q2Feedback = document.querySelector("#q2 .feedback");
    const correctAnswersQ2 = ["B"];
    const isCorrectQ2 = correctAnswersQ2.every(val => q2Values.includes(val)) && q2Values.length === correctAnswersQ2.length;

        if (q2Values.length > 0 && isCorrectQ2) {
          score++;
          q2Feedback.textContent = "Correct!";
          q2Feedback.style.color = "green";
        } else {
          q2Feedback.textContent = "Incorrect. Correct answers: B.";
          q2Feedback.style.color = "red";
        }
const q3 = document.querySelector('input[name="q3"]:checked');
const q3Value = Arry.from(q3).find(input => input.checked).value;
const q3Feedback = document.createElement('p');
q3Feedback.textContent = q3Value === 'c' ? 'Correct!' : 'Incorrect. The correct answer is C. Site speed and mobile-friendliness.';
 
if (q3Values.length > 0 && isCorrectQ3) {
    score++;
    q3Feedback.textContent = "Correct!";
    q3Feedback.style.color = "green";
  } else {
    q3Feedback.textContent = "Incorrect. Correct answers: C.";
    q3Feedback.style.color = "red";
  }
const q4 = document.getElementById('q4').value;   
const q4Feedback = document.createElement('p');
q4Feedback.textContent = q4 === 'on page' ? 'Correct!' : 'Incorrect. The correct answer is on page.';
if (q4 === 'on page') {
    score++;
    q4Feedback.textContent = "Correct!";
    q4Feedback.style.color = "green";
  } else {
    q4Feedback.textContent = "Incorrect. Correct answer: on page.";
    q4Feedback.style.color = "red";
  }

const q5 = document.querySelectorAll('input[name="q5"]:checked');
const q5Values = Array.from(q5).map(input => input.value);
const q5Feedback = document.createElement('p');
q5Feedback.textContent = q5Values.includes('a') && q5Values.includes('c') && q5Values.includes('d') ? 'Correct!' : 'Incorrect. The correct answers are A, C, and D.';
if (q5Values.length > 0 && q5Values.includes('a') && q5Values.includes('c') && q5Values.includes('d')) {
    score++;
    q5Feedback.textContent = "Correct!";
    q5Feedback.style.color = "green";
  } else {
    q5Feedback.textContent = "Incorrect. Correct answers: A, C, and D.";
    q5Feedback.style.color = "red";
  }
    // === Show result ===
    resultBox.innerHTML = `Score: ${score}/${total}<br>` +
      (score >= 1.5 ? "<strong>Result: Pass ✅</strong>" : "<strong>Result: Fail ❌</strong>");

    restartBtn.style.display = "inline-block";
  });

  // === Restart Quiz ===
  restartBtn.addEventListener("click", function () {
    // Reset inputs
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => input.checked = false);

    // Reset feedback
    document.querySelectorAll(".feedback").forEach(p => {
      p.textContent = "";
      p.style.color = "";
    });

    // Reset result
    resultBox.textContent = "";
    restartBtn.style.display = "none";

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

