$( document ).ready(function() {
    var centerH = $(document).height()/3;
    var centerW = $(document).width()/2;
    console.log(centerH + " is the middle brake point");
    $('.center').css({
    "margin-top": centerH
    });
    $('.items').css({
        "margin-right": centerW - (centerW/50)
    });
    $('.items').css({
        "margin-left": centerW - (centerW/5)
    });
    $('.items').css({
        "margin-top": centerH - centerH/2
    });
});
