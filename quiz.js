function submitQuiz() {
  let score = 0;

  const answers = {
    q1: "a",
    q2: "c",
    q3: ["a", "c"],
    q4: ["search engine optimization"],
    q5: "b",
    q6: "b",
    q7: "c",
    q8: "a",
    q9: "a",
    q10: "d"
  };

  // Clear previous styles and feedback
  document.querySelectorAll("label, input").forEach(el => {
    el.classList.remove("correct", "incorrect");
  });

  document.querySelectorAll(".feedback-box").forEach(el => el.remove());

  // Radio button questions
  ["q1", "q2", "q5", "q6", "q7", "q8", "q9", "q10"].forEach(q => {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    const correctAnswer = answers[q];

    const radios = document.querySelectorAll(`input[name="${q}"]`);

    radios.forEach(input => {
      const label = input.parentElement;
      if (input.value === correctAnswer) {
        label.classList.add("correct");
      }
    });

    if (selected && selected.value !== correctAnswer) {
      selected.parentElement.classList.add("incorrect");
    }

    if (selected && selected.value === correctAnswer) {
      score++;
    }
  });

  // Checkbox question (Q3)
  const q3Selected = Array.from(document.querySelectorAll('input[name="q3"]:checked')).map(cb => cb.value);
  const correctQ3 = answers.q3.sort().join(",");
  const selectedQ3 = q3Selected.sort().join(",");

  document.querySelectorAll('input[name="q3"]').forEach(cb => {
    const label = cb.parentElement;
    if (answers.q3.includes(cb.value)) {
      label.classList.add("correct");
    }
    if (cb.checked && !answers.q3.includes(cb.value)) {
      label.classList.add("incorrect");
    }
  });

  if (correctQ3 === selectedQ3) score++;

  // Text input (Q4)
  const q4Input = document.getElementById("q4");
  const inputVal = q4Input.value.trim().toLowerCase();
  const q4Wrapper = document.getElementById("q4-wrapper");

  // Remove any previous feedback in Q4
  q4Wrapper.querySelectorAll(".feedback-box").forEach(el => el.remove());

  if (answers.q4.includes(inputVal)) {
    q4Input.classList.add("correct");
    score++;
  } else {
    q4Input.classList.add("incorrect");
    const feedback = document.createElement("div");
    feedback.classList.add("feedback-box", "correct-box");
    feedback.textContent = `Correct Answer: ${answers.q4[0]}`;
    q4Wrapper.appendChild(feedback);
  }

  // Show score
  const result = document.getElementById("result");
  result.innerHTML = `<h3>Your score: ${score}/10</h3>`;
}
