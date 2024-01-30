console.log("Your index.js file is loaded correctly!");

var x = window.matchMedia("max-width: 600px")

$(".workHover").hover(function(){
    $(".workHover").toggleClass("active");
    if ($(".workHover").hasClass("active")) {
      if(window.innerWidth < 600){
        $(this).find(".workBackground").css("height", "23.5rem");
      }
      else{
        $(this).find(".workBackground").css("height", "35.5rem");
      }
      $(this).find(".workDescription").css("opacity","1");
      $(this).find(".workButton").css("opacity","1");
    }
    else {
      $(this).find(".workBackground").css('height', "2.18rem");
      $(this).find(".workDescription").css("opacity","0");
      $(this).find(".workButton").css("opacity","0");
    }
  });