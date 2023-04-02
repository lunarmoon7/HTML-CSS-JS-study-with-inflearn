$('.stars .fa').click(function () { 
    $(this).addClass('active');
    $(this).prevAll().addClass('active');
    $(this).nextAll().removeClass('active');
    var num = $(this).index()
    // $('.print').text(num);
    var starRate = num + 1;
    if(starRate === 1){
        $('.print').html('<img src="images/star-lv1.png">' + '정말 별로에요');
    }else if(starRate === 2){   
        $('.print').html('<img src="images/star-lv2.png">' +"약간 별로에요");    
    }else if(starRate === 3){
        $('.print').html('<img src="images/star-lv3.png">' +'그냥 그래요');
    }else if(starRate === 4){
        $('.print').html('<img src="images/star-lv4.png">' +'맘에 들어요');
    }else{
        $('.print').html('<img src="images/star-lv5.png">' +'아주 좋아요');    
    }
});
