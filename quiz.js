function submitQuiz() {
  let score = 0;
  const answers = {
      q1: "a",
      q2: "b",
      q3: "c",
      q6: "b",
      q7: "a",
      q8: "b",
      q9: "b",
      q10: ["a", "c", "d"],
      q4: ["search engine optimization", "seo"],
  };

  // Clear previous styles and feedback
  document.querySelectorAll("label, input").forEach(el => {
      el.classList.remove("correct", "incorrect");
  });
  document.querySelectorAll(".feedback-box").forEach(el => el.remove());

  // Radio button questions
  ["q1", "q2", "q3", "q6", "q7", "q8", "q9"].forEach(q => {
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

  // Text input question (Q9 - fill in the blank)
  const q4Input = document.getElementById("q4");
  const inputVal = q4Input.value.trim().toLowerCase();
  const q4Wrapper = document.getElementById("q4-wrapper");

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

  // Show score and pass/fail message
  const result = document.getElementById("result");
  let status = (score >= 7) ? "Pass" : "Fail"; // Passing is 7 or above
  let message = (status === "Pass") ? "🎉 Congratulations! You passed the quiz!" : "❌ Oops! Try again. You can do it!";

  result.innerHTML = `
    <h3>Your score: ${score}/10 — 
      <span style="color:${status === 'Pass' ? 'green' : 'red'}">${status}</span>
    </h3>
    <p style="font-size: 18px; margin-top: 10px;">${message}</p>
  `;
}

function restartQuiz() {
  document.getElementById("quizForm").reset();
  document.querySelectorAll("label, input").forEach(el => {
      el.classList.remove("correct", "incorrect");
  });
  document.getElementById("result").innerHTML = "";
  document.querySelectorAll(".feedback-box").forEach(el => el.remove());
}

            