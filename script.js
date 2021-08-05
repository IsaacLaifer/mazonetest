$(document).ready(function(){
  $('.post-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 2250,
      nextArrow:$('.next'),
      prevArrow:$('.prev'),
      infinite:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    
  $('.list').click(function() {
    if(!$(this).is('.active')){
      var category = $(this).data('filter'),
          slider = $('.post-wrapper');
          
      $(this).addClass('active').siblings().removeClass('active');
      
      slider.slick('slickUnfilter'); 
      if(category != 'Tout'){
        slider.slick('slickFilter','.'+category);
      }
    }       
  });
  });



