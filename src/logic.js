'use strict';

export default function () {
    if ($('.firstQ input[name=radio1]:checked')[0] == undefined || $('.secondQ input[name=radio2]:checked')[0] == undefined &&
        $('.thirdQ input[name=radio3]:checked')[0] == undefined || $('.fourthQ input[name=radio4]:checked')[0] == undefined &&
        $('.fifthQ input[name=radio5]:checked')[0] == undefined || $('.sixthQ input[name=radio6]:checked')[0] == undefined) {
        alert('Вы ответили не на все вопросы! Пожалуйста, вернитесь обратно к форме и ответьте на оставшиеся вопросы ');
    } else {
        
    }
}