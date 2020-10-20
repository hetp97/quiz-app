const correctAnswers = ['C', 'A', 'A', 'B', 'C'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let correctAnsCount = 0;
  let score;
  let total = correctAnswers.length;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  //check answers

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      correctAnsCount += 1;
    }
  });

  score = (correctAnsCount / total) * 100;

  //check result
  window.scrollTo(0, 0);
  result.classList.remove('d-none');

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
