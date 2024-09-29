const variants = [
  "Бесспорно",
  "Предрешено",
  "Не сомневайтесь в этом",
  "Можете быть уверены",
  "Определённо да",
  "Мне кажется, что да",
  "Вероятнее всего",
  "Хорошие перспективы",
  "Знаки говорят, что да",
  "Да",
  "Пока неясно, попробуйте снова",
  "Спросите позже",
  "Лучше не рассказывать",
  "Сейчас нельзя предсказать",
  "Даже не думайте",
  "Мой ответ нет",
  "По моим данным, нет",
  "Весьма сомнительно",
  "Нет",
];

const responseDiv = document.querySelector(".response");
const ballElement = document.querySelector(".magic-ball");
const button = document.querySelector(".button");
const click = document.querySelector(".click");
const inputField = document.querySelector(".input-field");

function fadeInOut() {
  responseDiv.style.opacity = 0;

  responseDiv.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 400,
    fill: "forwards",
  });

  setTimeout(() => {
    responseDiv.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 1000,
      fill: "forwards",
    });
  }, 2380);
}

const showElement = () => {
  const randomElement = variants[Math.floor(Math.random() * variants.length)];

  ballElement.classList.remove("animate");

  setTimeout(() => {
    ballElement.classList.add("animate");
    setTimeout(fadeInOut, 10);
    inputField.value = "";
  }, 10);

  setTimeout(() => {
    responseDiv.textContent = randomElement;
    responseDiv.setAttribute("aria-live", "polite");
  }, 2250);
};

inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    showElement();
  }
});

button.addEventListener("click", function (event) {
  event.preventDefault();
  showElement();
});

click.addEventListener("click", function (event) {
  event.preventDefault();
  showElement();
});

const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  showElement();
});

function handleTouchStart(event) {
  event.preventDefault();
  showElement();
}

button.addEventListener("touchstart", handleTouchStart);

const magicBall = document.querySelector(".magic-ball-container");

magicBall.addEventListener("touchstart", handleTouchStart);
