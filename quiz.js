function submitQuiz() {
  let score = 0;

  const answers = {
    q1: "a",
    q2: "c",
    q3: "c",
    q4: "b",
    q5: "a",
    q6: "b",
    q7: "b",
    q8: "a",
    q9: ["search engine optimization", "SEO"],
    q10:["a","c","d",],
  };

  // Clear previous styles and feedback
  document.querySelectorAll("label, input").forEach(el => {
    el.classList.remove("correct", "incorrect");
  });

  document.querySelectorAll(".feedback-box").forEach(el => el.remove());

  // Radio button questions
  ["q1", "q2", "q3","q4", "q5", "q6", "q7", "q8",].forEach(q => {
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

  // Checkbox question (Q10)
  
  const q10Selected = Array.from(document.querySelectorAll('input[name="q10"]:checked')).map(cb => cb.value);
  const correctQ10 = answers.q10.sort().join(",");
  const selectedQ10 = q10Selected.sort().join(",");

  document.querySelectorAll('input[name="q10"]').forEach(cb => {
    const label = cb.parentElement;
    if (answers.q10.includes(cb.value)) {
      label.classList.add("correct");
    }
    if (cb.checked && !answers.q10.includes(cb.value)) {
      label.classList.add("incorrect");
    }
  });

  if (correctQ10 === selectedQ10) score++;

  // Text input (Q9)
  const q9Input = document.getElementById("q9");
  const inputVal = q9Input.value.trim().toLowerCase();
  const q9Wrapper = document.getElementById("q9-wrapper");

  // Remove any previous feedback in Q4
  q9Wrapper.querySelectorAll(".feedback-box").forEach(el => el.remove());

  if (answers.q9.includes(inputVal)) {
    q9Input.classList.add("correct");
    score++;
  } else {
    q9Input.classList.add("incorrect");
    const feedback = document.createElement("div");
    feedback.classList.add("feedback-box", "correct-box");
    feedback.textContent = `Correct Answer: ${answers.q9[0]}`;
    q9Wrapper.appendChild(feedback);
  }

  // Show score
  const result = document.getElementById("result");
  result.innerHTML = `<h3>Your score: ${score}/10</h3>`;
}
