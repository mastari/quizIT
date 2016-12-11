$( document ).ready(function() {
    var centerH = $(document).height()/3;
    console.log(centerH);
    $('#account').css({
    "margin-top": centerH
    });
    $("#start").mouseout(function () {
      console.log("the mouse is out!");
    //     $(this).css({
        
      //  "border-width": "3px"
     // });
     $("#start").animate({
       borderColor: green
     });
      
    });
    $("#start").mouseenter(function () {
      console.log("mouse is in!");
      $("#start").animate({
        borderColor: red
      });
    });
});