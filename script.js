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
  


  let currentSlide = 0;
  const slides = document.querySelectorAll('.news-slide');
  
  // Show the first slide initially
  slides[0].classList.add('active');
  
  function showPartnerSlide(index) {
    // Hide current slide
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('animated-out');
    
    // Update current slide index
    currentSlide = index;
    
    // Show new slide
    setTimeout(() => {
      slides.forEach(slide => {
        slide.classList.remove('animated-out');
        slide.classList.remove('animated-in');
      });
      slides[currentSlide].classList.add('active');
      slides[currentSlide].classList.add('animated-in');
      
      // Update dots
      document.querySelectorAll('.partners-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }, 500);
  }

    window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  