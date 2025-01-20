const tg = window.Telegram.WebApp;

document.addEventListener("DOMContentLoaded", () => {
  // Расширяем приложение на весь экран
  tg.expand();

  // Получаем информацию о пользователе
  const user = tg.initDataUnsafe.user;
  const greeting = document.getElementById("greeting");
  greeting.textContent = `Привет, ${user.first_name || "пользователь"}!`;

  // Обработка кнопки "Узнать мой рейтинг"
  const getRatingBtn = document.getElementById("getRatingBtn");
  getRatingBtn.addEventListener("click", async () => {
    const userId = user.id; // Telegram ID пользователя
    const apiUrl = `https://app-a30zq98n6-lucys-projects-24f006e5.vercel.app/get_user_rating?telegram_id=${userId}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      const resultDiv = document.getElementById("result");
      if (response.ok) {
        resultDiv.textContent = `Ваш рейтинг: ${data.rating}`;
      } else {
        resultDiv.textContent = `Ошибка: ${data.rating}`;
      }
    } catch (error) {
      console.error("Ошибка при запросе API:", error);
    }
  });
});
