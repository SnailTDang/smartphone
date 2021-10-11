

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




// var myArray = [
//   'Javascript',
//   'PHP',
// ]

// var i = 0;
//     count = myArray.length;

// while (i < (count)) {
//   console.log(myArray[i]);
//   i++;
// 


// for (var i = 100; i > 0; i--) {
//   console.log(i)
// }

function run(physics, chemistry, biology, mathematics, computer){
	var percentage = (chemistry + biology + mathematics + computer)/2;
	var sz_grade = "";
	
	if (percentage >= 9) {
		sz_grade = 'Grade A';
	}
	else if (percentage >= 8) {
		sz_grade = 'Grade B';
	}
	else if (percentage >= 7) {
		sz_grade = 'Grade C';
	}
	else if (percentage >= 6) {
		sz_grade = 'Grade D';
	}
	else if (percentage >= 4) {
		sz_grade = 'Grade E';
	} else {
		sz_grade = 'Grade F';
	}
	
	console.log(sz_grade);
}
