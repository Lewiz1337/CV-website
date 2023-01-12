const sliderWindow = document.querySelector('.footer__info-stack');
const slider = document.querySelector('.footer__info-stack-items');

let slideNum = 0;

const slide = (start, end) => {
  if (Math.abs(start - end) > 20) {
    if (start - end < 0) {
      slideNum--;
      if (slideNum === -1) {
        slideNum = 0;
      }
    } else {
      slideNum++;
      if (slideNum === 5) {
        slideNum = 0;
      }
    }
    slider.style.right = slideNum * 50 + 'vw';
  }
};

const slideInterval = setInterval(() => slide(30, 0), 5000);
sliderWindow.addEventListener('touchstart', (e) => {
  let start = e.touches[0].clientX;
  let end;

  sliderWindow.ontouchend = (e) => {
    end = e.changedTouches[0].clientX;
    slide(start, end);
  };
});
