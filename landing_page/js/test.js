// $(document).ready(function () {
// 	function show_info(){
// 		document.getElementById('info').style.visibility="visible";
// 	}
// 	function hide_info(){
// 		document.getElementById('info').style.visibility="hidden";
// 	}
// });

// $(document).ready(function() {
	// alert('hi');
    // $('#wrapper').hover(function() 
    // {
    //     $(this).find('div:first').hide()
    // }, 
    // function() {
        // $(this).find('div:first').show();
    // });
// });


alert('hi');

$(document).ready(function(){
	$('.hidden_info').hide();
    $('#sec1').mouseover(function(){
    	$('#testing').slideDown(1500);
    });
    $('.BY-section').mouseout(function(){
    	$('#testing').slideUp(1500);
    });
});

// $('.hidden_info').hide();
// $('h2').mouseover(function(){
//     $(this).children('.hidden_info').show();
// });
// $('h2').mouseout(function(){
//     $(this).children('hidden_info').hide();
// });



// $( "test" ).click(function() {
//   $( ".words" ).slideDown( "slow", function() {
//     // Animation complete.
//   });
// });










