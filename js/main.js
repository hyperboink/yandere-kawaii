(function(){
  var date = 'Sep 30, 2022 23:59:59',
  countDownDate = new Date(date).getTime(),
  interval = setInterval(function() {
        var now = new Date().getTime(),
          distance = countDownDate - now,
          days = Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector('.days').innerHTML = days;
        document.querySelector('.hours').innerHTML = hours;
        document.querySelector('.minutes').innerHTML = minutes;
        document.querySelector('.seconds').innerHTML = seconds;
          
        if (distance < 0) {
          clearInterval(interval);
          Array.prototype.forEach.call(
              document.getElementsByClassName('time'),
              function(node){
                  node.innerHTML = '00';
              }
          );
        }
  }, 1000);
})();