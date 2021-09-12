window.onload = function () {
  document.addEventListener('click', changeSlideStatus);
  let previousActiveSlide;

  function changeSlideStatus(e) {
    let currentElement = e.target;
    if (currentElement.closest('.container__slide')) {
      if (!previousActiveSlide) {
        previousActiveSlide = currentElement.closest('.container__slide');
      }
      changeActiveSlide(currentElement.closest('.container__slide'));
      previousActiveSlide = currentElement.closest('.container__slide');
    } else if (!currentElement.closest('.container__slide') && previousActiveSlide) {
      changeActiveSlide();
    }
  }

  function changeActiveSlide(cuurentElement) {
    previousActiveSlide.classList.remove('active');
    cuurentElement ? cuurentElement.classList.add('active') : '';
  }
};
