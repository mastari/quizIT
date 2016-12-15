$( document ).ready(function() {
    var centerH = $(document).height()/3;
    console.log(centerH + " is the middle brake point");
    $('.center').css({
    "margin-top": centerH
    });
});
