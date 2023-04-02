// Trigger
$('.trigger').click(function () { 
    $(this).toggleClass('active');
    $('.modal-gnb').fadeToggle();
});

// Audio Control\
var bgm = document.getElementById('myAudio');
bgm.volume = 0.1 // Audio Volume : 0(0%) ~ 1(100%)