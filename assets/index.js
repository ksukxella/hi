new Swiper('.image-slider', {
navigation: {
   nextEl:'.swiper-button-next',
   prevEl:'.swiper-button-prev'
},
pagination: {
  el:'.swiper-pagination',
  clickable:true,
  dynamicBullets:true,
  renderBullet: function (index, className) {
    return'<span class="' + className +'">' +(index + 1)+'</span>';
  },
 },
 loop: true,

});

new Swiper('.image-slider2', {
  navigation: {
     nextEl:'.swiper-button-next2',
     prevEl:'.swiper-button-prev2'
  },
  pagination: {
    el:'.swiper-pagination2',
    clickable:true,
    dynamicBullets:true,
    renderBullet: function (index, className) {
      return'<span class="' + className +'">' +(index + 1)+'</span>';
    },
   },
   loop: true,
  
  });

videojs(document.querySelector('.video-js'));
