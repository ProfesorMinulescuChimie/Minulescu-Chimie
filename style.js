const observer = new IntersectionObserver((entries) => {
			  entries.forEach(entry => {
			    if (entry.isIntersecting) {
			      entry.target.classList.add('visible');
			    }
			  });
			}, { threshold: 0.1 }); // Trigger when 10% of the element is visible

			// Observe all elements with class 'fade-in-element'
			document.querySelectorAll('.fade-in-element').forEach(el => {
			  observer.observe(el);
			});    

document.querySelectorAll(".verifyBtn").forEach(button => {

  button.addEventListener("click", function () {

    const exercise = this.closest(".exercise");

    // stop if already answered
    if (exercise.classList.contains("answered")) return;

    const correctAnswer = exercise.dataset.correct;

    const selected = exercise.querySelector("input[type='radio']:checked");

    if (!selected) {
      alert("Selectează un răspuns.");
      return;
    }

    const options = exercise.querySelectorAll(".option");

    options.forEach(option => {

      const radio = option.querySelector("input");

      if (radio.value === correctAnswer) {
        option.classList.add("correct");
      }

      if (radio === selected && radio.value !== correctAnswer) {
        option.classList.add("wrong");
      }

      radio.disabled = true;
    });

    exercise.classList.add("answered");

  });

});

document.querySelectorAll(".resetBtn").forEach(button => {

  button.addEventListener("click", function () {

    const exercise = this.closest(".exercise");

    const options = exercise.querySelectorAll(".option");
    const radios = exercise.querySelectorAll("input[type='radio']");

    // remove visual feedback
    options.forEach(option => {
      option.classList.remove("correct", "wrong");
    });

    // reset radios
    radios.forEach(radio => {
      radio.checked = false;
      radio.disabled = false;
    });

    // allow answering again
    exercise.classList.remove("answered");

  });

});

document.querySelectorAll(".explainBtn").forEach(button => {
  button.addEventListener("click", function () {
    const exercise = this.closest(".exercise");
    const explainText = exercise.querySelector(".explain-text");
    explainText.classList.toggle("visible");
  });
});