const characters = {
  Harvey: 0,
  Abigail: 0,
  Sebastian: 0,
  Morris: 0,
  Lewis: 0,
  Emily: 0,
};

const questions = [
  {
    question: "Твоё любимое место в универе?",
    answers: [
      { text: "Библиотека", add: "Harvey" },
      { text: "Буфет", add: "Morris" },
      { text: "Курилка", add: "Sebastian" },
      { text: "Деканат", add: "Lewis" },
    ]
  },
  {
    question: "Как ты обычно проводишь перемену?",
    answers: [
      { text: "Узнаю местные сплетни", add: "Lewis" },
      { text: "Пью кофе и болтаю с друзьями", add: "Abigail" },
      { text: "Жалуюсь на жизнь одногуппникам", add: "Sebastian" },
      { text: "Решаю важные вопросы c преподами/деканатом", add: "Morris" }
    ]
  },
  {
    question: "Ради поездки в Китай на семестр я готов(а)",
    answers: [
      { text: "Продать душу", add: "Morris" },
      { text: "Выучить китайский на HSK6", add: "Harvey" },
      { text: "Активничать во всех организациях СИБД", add: "Emily" },
      { text: "Спеть Red Sun in the Sky", add: "Abigail" }
    ]
  },
  {
    question: "Почему ты выбрал СИБД?",
    answers: [
      { text: "Это институт успеха", add: "Lewis" },
      { text: "Потому что знал(а), что попаду в крутой коллектив", add: "Abigail" },
      { text: "Так распорядилась судьба", add: "Emily" },
      { text: "Ради знаний", add: "Harvey" }
    ]
  },
  {
    question: "Кем видишь себя после универа?",
    answers: [
      { text: "Бизнеcменом", add: "Morris" },
      { text: "Важным дядей(тётей)", add: "Lewis" },
      { text: "Фрилансером", add: "Emily" },
      { text: "Пока не знаю", add: "Sebastian" }
    ]
  },
  {
    question: "Что обычно делаешь во время пар?",
    answers: [
      { text: "Учусь конечно", add: "Harvey" },
      { text: "Играю с одногруппником в 'огонь и вода'", add: "Abigail" },
      { text: "Сплю", add: "Sebastian" },
      { text: "Волонтёрю/работаю на мероприятиях", add: "Emily" }
    ]
  },
];

let currentQuestion = 0;

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.classList.add("answer-btn");
        btn.textContent = answer.text;
        btn.onclick = () => {
            characters[answer.add]++;
            nextQuestion();
        };
        answersDiv.appendChild(btn);
    });
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const winner = Object.keys(characters).reduce((a, b) =>
        characters[a] > characters[b] ? a : b
    );

    localStorage.setItem("characterResult", winner);
    window.location.href = "result.html";
}

showQuestion();