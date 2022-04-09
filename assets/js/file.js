$(document).ready(function () {
   $('.Testimonials .container .box .img img').click(function(){

    $(this).parent().parent().find('.text').toggle();('none');

   });

   
   $(window).scroll(function () { 
       if($(this).scrollTop() >=0){
         $('header nav').css({
            'background':'rgba(0,0,0,1)',
         })
      }
      else{
         $('header nav').css('background','transparent')
      }
      });

});
