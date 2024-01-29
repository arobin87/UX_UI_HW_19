console.log("Your index.js file is loaded correctly!");

var x = window.matchMedia("max-width: 600px")

$(".searchButton").hover(function(){
    $(".searchButton").toggleClass("active");
    if ($(".searchButton").hasClass("active")) {
      if(window.innerWidth < 600){
        console.log("small screen");
        $(this).find(".searchForm").css("height", "23.5rem");
      }
      else{
        $(this).find(".searchForm").css("height", "35.5rem");
        console.log("big screen");
      }
      $(this).find(".workDescription").css("opacity","1");
      $(this).find(".workButton").css("opacity","1");
    }
    else {
      $(this).find(".searchForm").css('height', "2.18rem");
      $(this).find(".workDescription").css("opacity","0");
      $(this).find(".workButton").css("opacity","0");
    }
  });