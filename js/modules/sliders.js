function sliders({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
// Создание слайдеров 1 вариант
 

// const sliders = document.querySelectorAll('.offer__slide'),
//       prev = document.querySelector('.offer__slider-prev'),
//       next = document.querySelector('.offer__slider-next'),
//       current = document.querySelector('#current'),
//       total = document.querySelector('#total');
// let slideIndex = 1;

// function showSlides (n) {
// if (n > sliders.length){
//   slideIndex = 1;
// }
// if (n < 1) {
//   slideIndex = sliders.length;
// }

// sliders.forEach(item => {
//   item.style.display = 'none';
// });

// sliders[slideIndex -1].style.display = 'block';

// if (sliders.length < 10) {
//   current.textContent = `0${slideIndex}`;
// } else {
//   current.textContent = slideIndex;
// }

// }

// showSlides(slideIndex);

// function plusSlider (n) {
//   showSlides(slideIndex += n);
// }

// prev.addEventListener('click', () => {
// plusSlider(-1);
// });


// next.addEventListener('click', () => {
//   plusSlider(1);
//   });

//   if (sliders.length < 10) {
//     total.textContent = `0${sliders.length}`;
//   } else {
//     total.textContent = sliders.length;
//   }

  //создание слайдеров 2 вариант (карусель)
//   const sliders = document.querySelectorAll('.offer__slide'),
//         prev = document.querySelector('.offer__slider-prev'),
//         next = document.querySelector('.offer__slider-next'),
//         current = document.querySelector('#current'),
//         total = document.querySelector('#total'),
//         sliderWrapper = document.querySelector('.offer__slider-wrapper'),
//         sliderField = document.querySelector('.offer__slider-inner'),
//         width = window.getComputedStyle(sliderWrapper).width;
          

//   let slideIndex = 1;
//   let offSet = 0;
  
//   if(sliders.length < 10) {
//     total.textContent = `0${sliders.length}`;
//     current.textContent = `0${slideIndex}`;
//   } else {
//     total.textContent = sliders.length;
//     current.textContent = slideIndex;
//   }

//   sliderField.style.width = 100 * sliders.length + '%';

//   sliders.forEach(slide => {
//     slide.style.width = width;
//   })

//   sliderField.style.display = 'flex';
//   sliderField.style.transition = '0.5s all';

//   sliderWrapper.style.overflow = 'hidden';


//   next.addEventListener('click', () => {
//     if (offSet == +width.slice(0, width.length-2) * (sliders.length-1)) {
//        offSet = 0;
//     } else {
//        offSet += +width.slice(0, width.length-2);
//     }

//     sliderField.style.transform = `translateX(-${offSet}px)`;

//     if (slideIndex == sliders.length){    //границы
//       slideIndex = 1;
//     } else {
//     slideIndex ++;
//     }

//     if (sliders.length < 10) {                     //цифры при перегартовании
//       current.textContent = `0${slideIndex}`;
//     } else {
//       current.textContent = slideIndex;
//     }
// })
  
// prev.addEventListener('click', () => {
//   if (offSet == 0){
//     offSet = +width.slice(0, width.length-2) * (sliders.length-1);
//   } else {
//      offSet -= +width.slice(0, width.length-2);
//   }

//   sliderField.style.transform = `translateX(-${offSet}px)`;

//   if (slideIndex == 1){    //границы
//     slideIndex = sliders.length;
//   } else {
//   slideIndex --;
//   }

//   if (sliders.length < 10) {                     //цифры при перегартовании
//     current.textContent = `0${slideIndex}`;
//   } else {
//     current.textContent = slideIndex;
//   }


// новигация для слайдера

const   sliders = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        current = document.querySelector(currentCounter),
        total = document.querySelector(totalCounter),
        sliderWrapper = document.querySelector(wrapper),
        sliderField = document.querySelector(field),
        width = window.getComputedStyle(sliderWrapper).width,
        dots = [];

  let slideIndex = 1;
  let offSet = 0;


       if(sliders.length < 10) {
        total.textContent = `0${sliders.length}`;
        current.textContent = `0${slideIndex}`;
      } else {
        total.textContent = sliders.length;
        current.textContent = slideIndex;
      }

      sliderField.style.width = 100 * sliders.length + '%';
      sliderField.style.display = 'flex';
      sliderField.style.transition = '0.5s all';
      sliderWrapper.style.overflow = 'hidden';

      sliders.forEach(slide => {
            slide.style.width = width;
          });

      slider.style.position = 'relative';
      const indicator = document.createElement('ol');
      indicator.classList.add('carousel-indecator');
      indicator.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
      `;

      slider.append(indicator);

      for (let i=0; i<sliders.length; i++){
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i+1)
        dot.style.cssText =`
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
        `;
        if (i == 0){
          dot.style.opacity = 1;
        }

        indicator.append(dot);
        dots.push(dot);
      }


     function correntSlide () {
      if (sliders.length < 10) {                     //цифры при перегартовании
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }
     }

     function dotsStyle () {
      dots.forEach(dot => dot.style.opacity = '.5');
      dots[slideIndex - 1].style.opacity = 1;
     }

     function deleteNotDigits (str) {
      return +str.replace(/\D/g,'');
     } 


      next.addEventListener('click', () => {
            if (offSet == deleteNotDigits(width) * (sliders.length-1)) {
               offSet = 0;
            } else {
               offSet += deleteNotDigits(width);
            }
        
            sliderField.style.transform = `translateX(-${offSet}px)`;
        
            if (slideIndex == sliders.length){    //границы
              slideIndex = 1;
            } else {
            slideIndex ++;
            }
        
           correntSlide();
           dotsStyle();
            
        })

        prev.addEventListener('click', () => {
            if (offSet == 0){
              offSet = deleteNotDigits(width) * (sliders.length-1);
            } else {
               offSet -= deleteNotDigits(width);
            }
          
            sliderField.style.transform = `translateX(-${offSet}px)`;
          
            if (slideIndex == 1){    //границы
              slideIndex = sliders.length;
            } else {
            slideIndex --;
            }
        
           correntSlide();
           dotsStyle();
          })


dots.forEach (dot => {
  dot.addEventListener('click', (e) => {
    const slideTo = e.target.getAttribute('data-slide-to');
    slideIndex = slideTo;
    offSet = +width.slice(0, width.length-2) * (slideTo-1);
    
    sliderField.style.transform = `translateX(-${offSet}px)`;
  
    correntSlide();
    dotsStyle();
         });
     });
}

export default sliders;