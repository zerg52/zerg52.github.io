setInterval( function() {
var date = new Date();
var hour = ( (date.getHours()-12)*30+"deg" );
var minutes = ( date.getSeconds()*6 +"deg" );
$('.clock-arrow-1').css('--rotate', hour);
$('.clock-arrow').css('--rotate-2', minutes);
	 }, 100);
