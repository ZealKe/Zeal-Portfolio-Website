//#C40003 red: #363636 grey
$(document).ready(function(){

  window.onload = function() {
      $(".loader").fadeOut("slow");
  }
  

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage'], .laptop a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if


    $('div.box').mouseover(function() {
      console.log("mouseover");
    });


  });
 
  // $(window).scroll(function() {
  //   $(".slideanim").each(function(){
  //     var pos = $(this).offset().top;

  //     var winTop = $(window).scrollTop();
  //       if (pos < winTop + 600) {
  //         $(this).addClass("slide");
  //       }
  //   });
  // });

  var scroll_start = 0;
   var startchange = $('#works');
   var offset = startchange.offset();
   if (startchange.length){
     $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('#navbar').css('background-color', '#363636');
            $('.navbar-default .navbar-nav li a').css('color','#fff');
            $('.navbar-default .navbar-nav li a').css('background-color','#363636');
            $('.navbar-default .navbar-nav>li.active>a').css('color','#363636');
            $('.navbar-default .navbar-nav>li.active>a').css('background-color','#fff');
  // .navbar-nav li a:hover, .navbar-nav li.active a {
  //     color: #fff ;
  //     background-color: #363636;
  // }
         } else {
            $('#navbar').css('background-color', 'transparent');
            $('.navbar-default .navbar-nav li a').css('color','#363636');
            $('.navbar-default .navbar-nav li a').css('background-color','transparent');
            $('.navbar-default .navbar-nav>li.active>a').css('color','#fff');
            $('.navbar-default .navbar-nav>li.active>a').css('background-color','#363636');
         }
     });
    }
})


 $('#box').mouseover(function() {
    
    console.log("mouseover");
  });