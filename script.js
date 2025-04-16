const phrases = [
    "Сертифицируем",
    "Развиваем профессионализм",
    "Объединяем бухгалтеров",
    "Предоставляем обучение",
    "Поддержка и ресурсы"
  ];
  
  let index = 0;
  const phraseElement = document.getElementById("slider-phrase");
  let intervalId;
  
  function updatePhrase() {
    phraseElement.textContent = phrases[index];
  }
  
  function nextPhrase() {
    index = (index + 1) % phrases.length;
    updatePhrase();
    restartAutoSlide();
  }
  
  function prevPhrase() {
    index = (index - 1 + phrases.length) % phrases.length;
    updatePhrase();
    restartAutoSlide();
  }
  
  function startAutoSlide() {
    intervalId = setInterval(() => {
      index = (index + 1) % phrases.length;
      updatePhrase();
    }, 3000); // каждые 3 секунды
  }
  
  function restartAutoSlide() {
    clearInterval(intervalId);
    startAutoSlide();
  }
  
  updatePhrase();
  startAutoSlide();
  

  
  