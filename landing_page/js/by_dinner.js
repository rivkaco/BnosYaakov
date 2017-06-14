$(function() {
	//single book
	$('#mybook').booklet();

	//multiple books with ID's
	$('#mybook1, #mybook2').booklet();

	//multiple books with a class
	$('.mycustombooks').booklet();
});
$(function() {
    $('#mybook').booklet({
        width:  '90%',
        height: 600,
        closed: true,
        autoCenter: true
    });
});


// if ($(window).width() > 1200) {
// 	$(function() {
//     $('#mybook').booklet({
//         width:  '100%',
//         height: 600,
//         closed: true,
//         autoCenter: true
//     });
// });
// }
// else {

// $(function() {
//     $('#mybook').booklet({
        
//         closed: true,
//         autoCenter: true
//     });
// });


// }


    

// $(".selector").booklet({ easing: "easeInOutExpo" });

    
// //init
// $(".selector").booklet({ width: 500 });

// //getter
// var width = $(".selector").booklet("option", "width");

// //setter
// $(".selector").booklet("option", "width", 600);