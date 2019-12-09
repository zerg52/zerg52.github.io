$(".icon").click(function () {
  $("#menu").toggleClass("menuafter");
  $(".line").toggleClass("lineafter");
  $(".line1").toggleClass("line1after");
  $(".line2").toggleClass("line2after");
  $(".icon").toggleClass("iconafter");
	$(".logo").toggleClass("logoafter");
   });
   $(document).ready(function(){
   $('.spoiler_links, .icon').click(function(){

      if ($(this).next('.spoiler_body').css("display")=="none") {
          $('.spoiler_body').hide('normal');
          $(this).next('.spoiler_body').slideToggle('normal');
      }
      else $('.spoiler_body').hide('normal');
      return false;
   });
  });
