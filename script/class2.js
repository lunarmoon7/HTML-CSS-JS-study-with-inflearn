$('.login button').click(function () { 
    var age = $('#id').val();
    if(age.length == 0) {
        alert('나이를 입력하세요.');
    }else if(age < 20){
        alert('성인이 아닙니다.');
    }else if(age >= 20){
        alert('성인입니다.');
    }else{
        alert('문자가 아닌 숫자를 입력하세요.')
    }
});