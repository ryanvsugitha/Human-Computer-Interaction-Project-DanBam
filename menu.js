const imageCount = $(".images-food").length
const imageWidth = $(".images-food").width()
const imageHeight = $(".images-food").height()
const totalWidth = imageCount*imageWidth

$("#image-slider-food").css({
    width: imageWidth,
    height: imageHeight
});

$("#slider-food").css({
    width: totalWidth,
    marginLeft: -imageWidth
});

$("#image-slider-bev").css({
    width: imageWidth,
    height: imageHeight
});

$("#slider-bev").css({
    width: totalWidth,
    marginLeft: -imageWidth
});

setInterval(function(){
    $("#slider-food").animate({
        left: -imageWidth
    }, 1000, function(){
        $(".images-food:first-child").appendTo("#slider-food");
        $("#slider-food").css("left", "")
    })
    $("#slider-bev").animate({
        left: -imageWidth
    }, 1000, function(){
        $(".images-bev:first-child").appendTo("#slider-bev");
        $("#slider-bev").css("left", "")
    })
}, 2000);
