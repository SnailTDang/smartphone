

// function User(firstName, lastName, avatar) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.avatar = avatar;

//   this.getName = function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
 
// var author = new User('Son', 'Dang', 'Avatar');
// var user = new User('Vũ', 'Nguyễn', 'Avatar');

// author.title = 'Chia sẻ dạo tại F8';
// user.comment = 'Liệu có khóa asp.net k ad :)';

// console.log(author.getName());
// console.log(user);

$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      900, 
      'linear'
    );

  });

});