function submitQuiz() {
  let score = 0;
  const totalQuestions = 5;
  const answers = {
    q1: "a",
    q2: "b",
    q3: "c",
    q4: ["on-page", "on page", "onpage"],
    q5: ["a", "c", "d"]
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

  // Q4 - Fill in the blank
  const q4Input = document.getElementById("q4");
  const inputVal = q4Input.value.trim().toLowerCase();
  const q4Container = document.getElementById("q4-wrapper");
  const correctAnswerQ4 = answers.q4[0];

  // Remove previous feedback box if exists
  const oldBox = document.getElementById("q4-feedback");
  if (oldBox) oldBox.remove();

  const feedbackBox = document.createElement("div");
  feedbackBox.id = "q4-feedback";
  feedbackBox.classList.add("feedback-box");

  if (answers.q4.includes(inputVal)) {
    q4Input.classList.add("correct");
    feedbackBox.classList.add("correct-box");
    feedbackBox.innerHTML = "✔ Correct";
    score++;
  } else {
    q4Input.classList.add("incorrect");
    feedbackBox.classList.add("incorrect-box");
    feedbackBox.innerHTML = `✘ Correct: <strong>${correctAnswerQ4}</strong>`;
  }

  q4Container.appendChild(feedbackBox);

  // Q5 - Multiple correct
  const q5Options = document.getElementsByName("q5");
  const selected = [];
  q5Options.forEach(opt => {
    const label = opt.parentElement;
    if (answers.q5.includes(opt.value)) label.classList.add("correct");
    if (opt.checked) {
      selected.push(opt.value);
      if (!answers.q5.includes(opt.value)) label.classList.add("incorrect");
    }
  });

  selected.sort();
  const correct = answers.q5.slice().sort();
  const match = JSON.stringify(selected) === JSON.stringify(correct);
  if (match) score++;

  // Result
  let resultText = `<p>Your Score: ${score}/${totalQuestions}</p>`;
  resultText += score >= 3
    ? "<p>✅ You Passed!</p>"
    : "<p>❌ You Failed. Try Again!</p>";

  document.getElementById("result").innerHTML = resultText;
}

function restartQuiz() {
  document.getElementById("quizForm").reset();
  document.getElementById("result").innerHTML = "";
  document.querySelectorAll("label, input").forEach(e => {
    e.classList.remove("correct", "incorrect");
  });

  const oldBox = document.getElementById("q4-feedback");
  if (oldBox) oldBox.remove();
}
