$('.container .navi li').mouseenter(function () { 
    var changeImg = $(this).attr('data-img');
    $('.container .photo').css({
        'background-image' : 'url(' + changeImg + ')' 
    })
});
$('.container .navi li').mouseleave(function () { 
    $('.photo').css({
        'background-image': ''
    });
});