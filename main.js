const btnPrev = document.getElementById('btn'); // btn prev
const btnNext = document.getElementById('btn-next');// btn next

// ========================

const slides = document.querySelectorAll('.slide'); //pictures (their wrapper)
const dots = document.querySelectorAll('.dot'); // dots

// =======================

let index = 0;

const activeSlide = n => {
  for(slide of slides) {
    slide.classList.remove('active'); // remove class active from aat the clides
  }
  slides[n].classList.add('active'); // add class active to 1 slide
}

// ----- dots 
const activeDots = n => {
  for(dot of dots) {
    dot.classList.remove('active'); // remove class active from aat the clides
  }
  dots[n].classList.add('active'); // add class active to 1 slide
}
// ----- dots

const prepareCurrentSliode  = ind => {
  activeSlide(ind);
   activeDots(ind);
}

const nextSlide = () => {
  if(index == slides.length - 1) { //if we are on the last slide
    index = 0; //then we go to the fist slide again
    prepareCurrentSliode(index);
  } else {
    index++;
    prepareCurrentSliode(index);
  }
}

const prevSlide = () => {
  if(index == 0) { //if we are on the firs slide
    index = slides.length - 1; //then we go to the last slide again
    prepareCurrentSliode(index)
  } else {
    index--;
    prepareCurrentSliode(index)
  }
}

// ------ click on dots 

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot
    prepareCurrentSliode(index);
  })
})

// -------------------

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);


// avtomatic slider switcher

setInterval(nextSlide, 2500)


