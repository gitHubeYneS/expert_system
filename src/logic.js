import $ from 'jquery';
'use strict';

export default function () {
    console.log('test')
    var selectors = ['.firstQ_YES', '.firstQ_NO', '.secondQ_YES', '.secondQ_NO', '.thirdQ_YES', '.thirdQ_NO', '.fourthQ_YES', '.fourthQ_NO', '.fifthQ_YES', '.fifthQ_NO', '.sixthQ_YES', '.sixthQ_NO'];
    var testingToolsDataBase = ['Jasmine', 'Mocha', 'Chai', 'QUnit', 'Sinon', 'Karma', 'Selenium', 'WebdriverIO', 'Nightwatch', 'PhantomCSS', 'PhantomFlow', 'Percy.io'];
    var links = ['https://jasmine.github.io/', 'https://mochajs.org/', 'http://www.chaijs.com/', 'http://qunitjs.com/', 'http://sinonjs.org/', 'http://karma-runner.github.io/1.0/index.html',
        'https://www.seleniumhq.org/', 'http://webdriver.io/', 'http://nightwatchjs.org/', 'https://github.com/HuddleEng/PhantomCSS', 'https://github.com/HuddleEng/PhantomFlow', 'https://percy.io/'
    ];

    var isEmpty = selectors.filter(item => $(item).prop('checked') === false).length === 12;
    var isAllSelectYES = selectors.filter((item, index) => { 
        if (!(index % 2)) return $(item).prop('checked') === true
    }).length === 6

    var isAllSelectFALSE = selectors.filter((item, index) => { 
        if ((index % 2)) return $(item).prop('checked') === true
    }).length === 6;

    var isFirstSelectFalse = selectors.filter((item, index) => { 
        if (index === 1) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }).length === 6;

    console.log(selectors.filter((item, index) => { 
        if (index === 1) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }))

    if (isEmpty) {
        alert('Вы ответили не на все вопросы! Пожалуйста, вернитесь обратно к форме и ответьте на оставшиеся вопросы ');
    } else {
        if (isAllSelectYES) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[4]},${testingToolsDataBase[7]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[4]);
                window.open(links[7]);
            }
        } else if (isFirstSelectFalse) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[0]},${testingToolsDataBase[1]},${testingToolsDataBase[4]},${testingToolsDataBase[6]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[0]);
                window.open(links[1]);
                window.open(links[4]);
                window.open(links[6]);
            }
        } else if ($('.firstQ_YES').prop("checked") && $('.secondQ_NO').prop("checked") &&
            $('.thirdQ_YES').prop("checked") && $('.fourthQ_YES').prop("checked") &&
            $('fifthQ_YES').prop("checked") && $('sixthQ_YES').prop("checked")) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[0]},${testingToolsDataBase[1]},${testingToolsDataBase[6]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[0]);
                window.open(links[1]);
                window.open(links[6]);
            }
        } else if ($('.firstQ_YES').prop("checked") && $('.secondQ_YES').prop("checked") &&
            $('.thirdQ_NO').prop("checked") && $('.fourthQ_YES').prop("checked") &&
            $('fifthQ_YES').prop("checked") && $('sixthQ_YES').prop("checked")) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[2]},${testingToolsDataBase[8]},${testingToolsDataBase[9]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[2]);
                window.open(links[8]);
                window.open(links[9]);
            }
        } else if ($('.firstQ_YES').prop("checked") && $('.secondQ_YES').prop("checked") &&
            $('.thirdQ_YES').prop("checked") && $('.fourthQ_NO').prop("checked") &&
            $('fifthQ_YES').prop("checked") && $('sixthQ_YES').prop("checked")) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[2]},${testingToolsDataBase[9]},${testingToolsDataBase[10]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[2]);
                window.open(links[9]);
                window.open(links[10]);
            }
        } else if ($('.firstQ_YES').prop("checked") && $('.secondQ_YES').prop("checked") &&
            $('.thirdQ_YES').prop("checked") && $('.fourthQ_YES').prop("checked") &&
            $('fifthQ_NO').prop("checked") && $('sixthQ_YES').prop("checked")) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[0]},${testingToolsDataBase[3]},${testingToolsDataBase[4]},${testingToolsDataBase[5]},${testingToolsDataBase[7]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[0]);
                window.open(links[3]);
                window.open(links[4]);
                window.open(links[5]);
                window.open(links[7]);
            }
        } else if ($('.firstQ_YES').prop("checked") && $('.secondQ_YES').prop("checked") &&
            $('.thirdQ_YES').prop("checked") && $('.fourthQ_YES').prop("checked") &&
            $('fifthQ_YES').prop("checked") && $('sixthQ_NO').prop("checked")) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[0]},${testingToolsDataBase[3]},${testingToolsDataBase[6]},${testingToolsDataBase[9]},${testingToolsDataBase[11]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[0]);
                window.open(links[3]);
                window.open(links[6]);
                window.open(links[9]);
                window.open(links[11]);
            }
        }
    }
}