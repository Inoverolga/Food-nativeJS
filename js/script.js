'use strict'
import 'nodelist-foreach-polyfill'

  import tabs from './modules/tabs';
  import modal from './modules/modal';
  import timer from './modules/timer';
  import cards from './modules/cards';
  import calculator from './modules/calculator';
  import forms from './modules/forms.js';
  import  sliders from './modules/sliders';
  import {openModal} from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {
const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);
   tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
   modal('[data-modal]', '.modal', modalTimerId);
   timer('.timer', '2025-05-25');
   cards();
   calculator();
   forms('form', modalTimerId);
   sliders({
    container: '.offer__slider',
    slide: '.offer__slide',
    prevArrow: '.offer__slider-prev',
    nextArrow: '.offer__slider-next',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'

   });

 });




	


      




     

