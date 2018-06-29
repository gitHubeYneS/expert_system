'use strict';

export default function () {
    var testingToolsDataBase = ['Jasmine', 'Mocha', 'Chai', 'QUnit', 'Sinon', 'Karma', 'Selenium', 'WebdriverIO', 'Nightwatch', 'PhantomCSS', 'PhantomFlow', 'Percy.io'];
    var links = ['https://jasmine.github.io/', 'https://mochajs.org/', 'http://www.chaijs.com/', 'http://qunitjs.com/', 'http://sinonjs.org/', 'http://karma-runner.github.io/1.0/index.html',
        'https://www.seleniumhq.org/', 'http://webdriver.io/', 'http://nightwatchjs.org/', 'https://github.com/HuddleEng/PhantomCSS', 'https://github.com/HuddleEng/PhantomFlow', 'https://percy.io/'
    ];
    if ($('.firstQ input[name=radio1]:checked')[0] == undefined || $('.secondQ input[name=radio2]:checked')[0] == undefined &&
        $('.thirdQ input[name=radio3]:checked')[0] == undefined || $('.fourthQ input[name=radio4]:checked')[0] == undefined &&
        $('.fifthQ input[name=radio5]:checked')[0] == undefined || $('.sixthQ input[name=radio6]:checked')[0] == undefined) {
        alert('Вы ответили не на все вопросы! Пожалуйста, вернитесь обратно к форме и ответьте на оставшиеся вопросы ');
    } else {
        if ($('.firstQ input[name=radio1][value=fHave]').prop('checked') && $('.secondQ input[name=radio2][value=sHave]').prop('checked', true) &&
            $('.thirdQ input[name=radio3][value=tHave]').prop('checked', true) && $('.fourthQ input[name=radio4][value=frHave]').prop('checked', true) &&
            $('.fifth input[name=radio5][value=fiHave]').prop('checked', true) && $('.sixthQ input[name=radio6][value=siHave]').prop('checked', true)) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[4]},${testingToolsDataBase[7]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[4]);
                window.open(links[7]);
            }
        } 
        else if ($('.firstQ input[name=radio1][value=fNO]').prop('checked', true) && $('.secondQ input[name=radio2][value=sHave]').prop('checked', true) &&
        $('.thirdQ input[name=radio3][value=tHave]').prop('checked', true) && $('.fourthQ input[name=radio4][value=frHave]').prop('checked', true) &&
        $('.fifth input[name=radio5][value=fiHave]').prop('checked', true) && $('.sixthQ input[name=radio6][value=siHave]').prop('checked', true)) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[0]},${testingToolsDataBase[1]},${testingToolsDataBase[4]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[0]);
                window.open(links[1]);
                window.open(links[4]);
            }
        } 
    }
}

