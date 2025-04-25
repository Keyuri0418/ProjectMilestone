function submitQuiz() {
  let score = 0;
  const totalQuestions = 10;
  const answers = {
    q1: "a",
    q2: "b",
    q3: "c",
    q4: ["b"] // New question added
    q5: "a",
    q6: "b",
    q7: "b",
    q8: "a", 
    q9: ["on-page", "on page", "onpage"],
    q10: ["a", "c", "d"],
  };

  // Clear old highlights
  document.querySelectorAll("label").forEach(label => {
    label.classList.remove("correct", "incorrect", "highlight");
  });

  // Q1
  const q1Options = document.getElementsByName("q1");
  q1Options.forEach(opt => {
    const label = opt.parentElement;
    if (opt.value === answers.q1) label.classList.add("correct");
    if (opt.checked) {
      if (opt.value !== answers.q1) label.classList.add("incorrect");
      else score++;
    }
  });

  // Q2
  const q2Options = document.getElementsByName("q2");
  q2Options.forEach(opt => {
    const label = opt.parentElement;
    if (opt.value === answers.q2) label.classList.add("correct");
    if (opt.checked) {
      if (opt.value !== answers.q2) label.classList.add("incorrect");
      else score++;
    }
  });

  // Q3
  const q3Options = document.getElementsByName("q3");
  q3Options.forEach(opt => {
    const label = opt.parentElement;
    if (opt.value === answers.q3) label.classList.add("correct");
    if (opt.checked) {
      if (opt.value !== answers.q3) label.classList.add("incorrect");
      else score++;
    }
  });
  // Q4 - New question added
  const q4Options = document.getElementsByName("q4");
  q4Options.forEach(opt => {
    const label = opt.parentElement;
    if (answers.q4.includes(opt.value)) label.classList.add("correct");
    if (opt.checked) {
      if (!answers.q4.includes(opt.value)) label.classList.add("incorrect");
      else score++;
    }
  });
  // Q5
  const q5Options = document.getElementsByName("q5");
  q5Options.forEach(opt => {
    const label = opt.parentElement;
    if (opt.value === answers.q5) label.classList.add("correct");
    if (opt.checked) {
      if (opt.value !== answers.q5) label.classList.add("incorrect");
      else score++;
    }
  });
  // Q6
  const q6Options = document.getElementsByName("q6");
  q6Options.forEach(opt => {
    const label = opt.parentElement;
    if (opt.value === answers.q6) label.classList.add("correct");
    if (opt.checked) {
      if (opt.value !== answers.q6) label.classList.add("incorrect");
      else score++;
    }
  });
  // Q7
  const q7Options = document.getElementsByName("q7");
  q7Options.forEach(opt => {
    const label = opt.parentElement;
    if (opt.value === answers.q7) label.classList.add("correct");
    if (opt.checked) {
      if (opt.value !== answers.q7) label.classList.add("incorrect");
      else score++;
    }
  });
  // Q8 - Multiple correct  
  const q8Options = document.getElementsByName("q8");
  const selectedQ8 = [];
  q8Options.forEach(opt => {
    const label = opt.parentElement;
    if (answers.q8.includes(opt.value)) label.classList.add("correct");
    if (opt.checked) {
      selectedQ8.push(opt.value);
      if (!answers.q8.includes(opt.value)) label.classList.add("incorrect");
    }
  });
  selectedQ8.sort();
  const correctQ8 = answers.q8.slice().sort();
  const matchQ8 = JSON.stringify(selectedQ8) === JSON.stringify(correctQ8);
  if (matchQ8) score++;

  // Q9 - Fill in the blank
  const q9Input = document.getElementById("q9");
  const inputVal = q9Input.value.trim().toLowerCase();
  const q9Container = document.getElementById("q9-wrapper");
  const correctAnswerQ9 = answers.q9[0];

  // Remove previous feedback box if exists
  const oldBox = document.getElementById("q9-feedback");
  if (oldBox) oldBox.remove();

  const feedbackBox = document.createElement("div");
  feedbackBox.id = "q9-feedback";
  feedbackBox.classList.add("feedback-box");

  if (answers.q9.includes(inputVal)) {
    q9Input.classList.add("correct");
    feedbackBox.classList.add("correct-box");
    feedbackBox.innerHTML = "✔ Correct";
    score++;
  } else {
    q9Input.classList.add("incorrect");
    feedbackBox.classList.add("incorrect-box");
    feedbackBox.innerHTML = `✘ Correct: <strong>${correctAnswerQ9}</strong>`;
  }

  q9Container.appendChild(feedbackBox);

  // Q10 - Multiple correct
  const q10Options = document.getElementsByName("q10");
  const selected = [];
  q10Options.forEach(opt => {
    const label = opt.parentElement;
    if (answers.q10.includes(opt.value)) label.classList.add("correct");
    if (opt.checked) {
      selected.push(opt.value);
      if (!answers.q10.includes(opt.value)) label.classList.add("incorrect");
    }
  });

  selected.sort();
  const correct = answers.q10.slice().sort();
  const match = JSON.stringify(selected) === JSON.stringify(correct);
  if (match) score++;

  // Result
  let resultText = `<p>Your Score: ${score}/${totalQuestions}</p>`;
  resultText += score >= 5
    ? "<p>✅ You Passed!</p>"
    : "<p>❌ You Failed. Try Again!</p>";

  document.getElementById("result").innerHTML = resultText;
}
// Function to submit the quiz
function submitQuiz() {
  const resultElement = document.getElementById("result");
  const answer = document.getElementById("question1").value;

  // Example logic for checking the answer
  if (answer.toLowerCase() === "correct answer") 
  {
      resultElement.innerHTML = "Correct!";
      resultElement.classList.add("correct");
      resultElement.classList.remove("incorrect");
  } 
  else 
  {
      resultElement.innerHTML = "Incorrect. Try again!";
      resultElement.classList.add("incorrect");
      resultElement.classList.remove("correct");
  }
}
// Function to restart the quiz
function restartQuiz() {
  document.getElementById("quizForm").reset();
  document.getElementById("result").innerHTML = "";
  document.querySelectorAll("label, input").forEach(e => {
      e.classList.remove("correct", "incorrect");
  });
}

// Attach event listeners to buttons after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submitButton").addEventListener("click", event => {
      event.preventDefault(); // Prevent default form submission
      submitQuiz();
  });

  document.getElementById("restartButton").addEventListener("click", restartQuiz);
});

