( function( $ ) {
$( document ).ready(function() {
$('#cssmenu').prepend('<div id="menu-button">Menu</div>');
	$('#cssmenu #menu-button').on('click', function(){
		var menu = $(this).next('ul');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
		}
		else {
			menu.addClass('open');
		}
	});
});
} )( jQuery );

$('#cssmenu').on('click touchstart','li.dropdown-control > a',function(event){
    event.preventDefault()
    var nextSibling = $(this).next();
    nextSibling.toggleClass("dropped");  
    $('.dropped').not(nextSibling).removeClass('dropped'); 
 });