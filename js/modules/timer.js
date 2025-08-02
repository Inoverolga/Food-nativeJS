function timer(id, deadLine) {
  

    function getTimeRemaining (endtime) {
     const t = Date.parse(endtime) - Date.parse(new Date());  //403482000 m/sek 
     const days = Math.floor(t/(1000 * 60 * 60 * 24)), //4 дня
           hours = Math.floor((t/(1000 * 60 * 60)) % 24), // 15 часов
           minutes = Math.floor((t/1000 / 60) % 60), // 35 минут
           seconds = Math.floor((t/1000) % 60); // 30 секунд

           return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes':minutes,
            'seconds': seconds
           }
      }

      function getZero (num) {
        if (num >= 0 && num < 10){
          return `0${num}`;
        } else {
          return num;
        }
      }

      function setClock (selector, endtime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(upDateClock, 1000);

upDateClock(); //убираем мигание
              function upDateClock () {
                const t = getTimeRemaining(endtime); //{ total: 401358000, days: 4, hours: 15, minutes: 29, seconds: 18 } 
                  days.innerHTML = getZero(t.days);
                  hours.innerHTML = getZero(t.hours);
                  minutes.innerHTML = getZero(t.minutes);
                  seconds.innerHTML = getZero(t.seconds);

                  if (t.total <= 0) {
                    clearInterval(timeInterval);
                  }
               }
          }
setClock(id, deadLine);
}

export default timer;