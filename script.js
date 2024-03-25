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
  responseDiv.style.opacity = 0; // Начальная прозрачность

  // Скрываем текст с анимацией

  responseDiv.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 700, // Продолжительность анимации в миллисекундах
    fill: "forwards", // Завершаем анимацию с последним кадром
  });

  // Показываем текст снова через 2.3 секунды

  setTimeout(() => {
    responseDiv.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 1000, // Продолжительность анимации в миллисекундах
      fill: "forwards", // Завершаем анимацию с последним кадром
    });
  }, 2380);
}

const showElement = () => {
  const randomElement = variants[Math.floor(Math.random() * variants.length)];

  // Удаляем класс, если он уже есть

  ballElement.classList.remove("animate");

  // Добавляем класс для запуска анимации запуска функции исчезновения текста, чтобы к концу отрисовки был уже новый
 
  setTimeout(() => {
    ballElement.classList.add("animate");
    setTimeout(fadeInOut, 10); // Добавляем задержку перед вызовом fadeInOut()
    inputField.value = "";
  }, 10); // Задержка в миллисекундах (можно изменить)

  //  Вывод ответа с задержкой для совпадения с последним  кадром
  
  setTimeout(() => {
    responseDiv.textContent = randomElement;

    // Добавление вывода ответа для screenreader
  
    responseDiv.setAttribute("aria-live", "polite");
  }, 2250);
};

inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Предотвращаем стандартное действие браузера и сброс отрисовки так как работало обновление страницы как submit ))) Баг исправлен.
    showElement();
  }
});

//  По клику запускаем всё))))

button.addEventListener("click", showElement);

click.addEventListener("click", showElement);

// Добавляем реакцию на взаимодействие при использовании мобильных и планшетов

const form = document.querySelector(".form");

// Для загрузки ответа после ввода в поле input
// Обработчик события submit для формы

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Предотвращаем стандартное действие отправки формы

  // Здесь вы можете добавить необходимую логику для обработки отправки формы, например, вызов функции showElement()
  showElement();
});

// Функция для обработки события нажатия на кнопку или магический шар

function handleTouchStart(event) {
  event.preventDefault(); // Предотвращаем стандартное действие браузера
  showElement(); // Вызываем функцию для отображения результата
}

// Добавляем обработчик события касания для кнопки

button.addEventListener("touchstart", handleTouchStart);

// Добавляем обработчик события касания для магического шара

magicBall.addEventListener("touchstart", handleTouchStart);
