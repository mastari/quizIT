$( document ).ready(function() {
    var centerH = $(document).height()/3;
    var centerW = $(document).width()/2;
    console.log(centerH + " is the middle brake point");
    $('.center').css({
        "margin-top": centerH
    });
    $('.items').css({
        "margin-right": centerW - (centerW/50),
        "margin-left": centerW - (centerW/5),
        "margin-top": centerH - centerH/2
    });
    $('#table').css({
        "margin-right": centerW - (centerW/50),
        "margin-left": centerW - (centerW/5),
        "margin-top": centerH - centerH/2
    });
});

