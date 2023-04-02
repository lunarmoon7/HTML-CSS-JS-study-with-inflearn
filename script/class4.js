$('.btn li').click(function () { 
    $(this).addClass('active');
    $(this).siblings('li').removeClass('active');
    
    var tab = $(this).attr('data-alt');
    $('#' + tab).addClass('active');
    $('#' + tab).siblings().removeClass('active');
    // $('.tabs div').removeClass('active');
    // $('#' + tab).addClass('active');
});