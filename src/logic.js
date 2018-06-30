import $ from 'jquery';
'use strict';

export default function () {
    var selectors = ['.firstQ_YES', '.firstQ_NO', '.secondQ_YES', '.secondQ_NO', '.thirdQ_YES', '.thirdQ_NO', '.fourthQ_YES', '.fourthQ_NO', '.fifthQ_YES', '.fifthQ_NO', '.sixthQ_YES', '.sixthQ_NO'];
    var testingToolsDataBase = ['Jasmine', 'Mocha', 'Chai', 'QUnit', 'Sinon', 'Karma', 'Selenium', 'WebdriverIO', 'Nightwatch', 'PhantomCSS', 'PhantomFlow', 'Percy.io'];
    var links = ['https://jasmine.github.io/', 'https://mochajs.org/', 'http://www.chaijs.com/', 'http://qunitjs.com/', 'http://sinonjs.org/', 'http://karma-runner.github.io/1.0/index.html',
        'https://www.seleniumhq.org/', 'http://webdriver.io/', 'http://nightwatchjs.org/', 'https://github.com/HuddleEng/PhantomCSS', 'https://github.com/HuddleEng/PhantomFlow', 'https://percy.io/'
    ];
    //-------------------------------------checking block-------------------------------------
    //-------------------------------------one F-------------------------------------
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

    var isSecondSelectFalse = selectors.filter((item, index) => {
        if (index === 3) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }).length === 6;

    var isThirdSelectFalse = selectors.filter((item, index) => {
        if (index === 5) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }).length === 6;

    var isFourthSelectFalse = selectors.filter((item, index) => {
        if (index === 7) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }).length === 6;

    var isFifthSelectFalse = selectors.filter((item, index) => {
        if (index === 9) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }).length === 6;

    var isSixthSelectFalse = selectors.filter((item, index) => {
        if (index === 11) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }).length === 6;
    //-------------------------------------two F-------------------------------------
    var isFSSelectFalse = selectors.filter((item, index) => {
        if (index === 1) return $(item).prop('checked') === true;
        if (index === 3) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }).length === 6;

    var isFTSelectFalse = selectors.filter((item, index) => {
        if (index === 1) return $(item).prop('checked') === true;
        if (index === 5) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }).length === 6;

    var isFFRSelectFalse = selectors.filter((item, index) => {
        if (index === 1) return $(item).prop('checked') === true;
        if (index === 7) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }).length === 6;

    var isFFSelectFalse = selectors.filter((item, index) => {
        if (index === 1) return $(item).prop('checked') === true;
        if (index === 9) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }).length === 6;

    var isFSISelectFalse = selectors.filter((item, index) => {
        if (index === 1) return $(item).prop('checked') === true;
        if (index === 11) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }).length === 6;
    //----------------------------------------------------------------------------------------
    //-------------------------------------three F-------------------------------------
    var isFSTSelectFalse = selectors.filter((item, index) => {
        if (index === 1) return $(item).prop('checked') === true;
        if (index === 3) return $(item).prop('checked') === true;
        if (index === 5) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }).length === 6;

    var isFSFRSelectFalse = selectors.filter((item, index) => {
        if (index === 1) return $(item).prop('checked') === true;
        if (index === 3) return $(item).prop('checked') === true;
        if (index === 7) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }).length === 6;

    var isFSFSelectFalse = selectors.filter((item, index) => {
        if (index === 1) return $(item).prop('checked') === true;
        if (index === 3) return $(item).prop('checked') === true;
        if (index === 9) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }).length === 6;

    var isFSSISelectFalse = selectors.filter((item, index) => {
        if (index === 1) return $(item).prop('checked') === true;
        if (index === 3) return $(item).prop('checked') === true;
        if (index === 11) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }).length === 6;
    //----------------------------------------------------------------------------------------

    //-------------------------------------four F-------------------------------------
    var isFSTFRSelectFalse = selectors.filter((item, index) => {
        if (index === 1) return $(item).prop('checked') === true;
        if (index === 3) return $(item).prop('checked') === true;
        if (index === 5) return $(item).prop('checked') === true;
        if (index === 7) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }).length === 6;

    var isFSTFSelectFalse = selectors.filter((item, index) => {
        if (index === 1) return $(item).prop('checked') === true;
        if (index === 3) return $(item).prop('checked') === true;
        if (index === 5) return $(item).prop('checked') === true;
        if (index === 9) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }).length === 6;

    var isFSTSISelectFalse = selectors.filter((item, index) => {
        if (index === 1) return $(item).prop('checked') === true;
        if (index === 3) return $(item).prop('checked') === true;
        if (index === 5) return $(item).prop('checked') === true;
        if (index === 11) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }).length === 6;
    //----------------------------------------------------------------------------------------

    //-------------------------------------five F-------------------------------------
    var isFSTFRFSelectFalse = selectors.filter((item, index) => {
        if (index === 1) return $(item).prop('checked') === true;
        if (index === 3) return $(item).prop('checked') === true;
        if (index === 5) return $(item).prop('checked') === true;
        if (index === 7) return $(item).prop('checked') === true;
        if (index === 9) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }).length === 6;

    var isFSTFRSISelectFalse = selectors.filter((item, index) => {
        if (index === 1) return $(item).prop('checked') === true;
        if (index === 3) return $(item).prop('checked') === true;
        if (index === 5) return $(item).prop('checked') === true;
        if (index === 7) return $(item).prop('checked') === true;
        if (index === 11) return $(item).prop('checked') === true;
        if (!(index % 2)) return $(item).prop('checked') === true;
    }).length === 6;
    //----------------------------------------------------------------------------------------

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
        } else if (isSecondSelectFalse) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[0]},${testingToolsDataBase[1]},${testingToolsDataBase[6]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[0]);
                window.open(links[1]);
                window.open(links[6]);
            }
        } else if (isThirdSelectFalse) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[2]},${testingToolsDataBase[8]},${testingToolsDataBase[9]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[2]);
                window.open(links[8]);
                window.open(links[9]);
            }
        } else if (isFourthSelectFalse) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[2]},${testingToolsDataBase[9]},${testingToolsDataBase[10]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[2]);
                window.open(links[9]);
                window.open(links[10]);
            }
        } else if (isFifthSelectFalse) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[0]},${testingToolsDataBase[3]},${testingToolsDataBase[4]},${testingToolsDataBase[5]},${testingToolsDataBase[7]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[0]);
                window.open(links[3]);
                window.open(links[4]);
                window.open(links[5]);
                window.open(links[7]);
            }
        } else if (isSixthSelectFalse) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[0]},${testingToolsDataBase[3]},${testingToolsDataBase[6]},${testingToolsDataBase[9]},${testingToolsDataBase[11]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[0]);
                window.open(links[3]);
                window.open(links[6]);
                window.open(links[9]);
                window.open(links[11]);
            }
        } else if (isFSSelectFalse) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[1]},${testingToolsDataBase[3]},${testingToolsDataBase[5]},${testingToolsDataBase[8]},${testingToolsDataBase[10]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[0]);
                window.open(links[3]);
                window.open(links[5]);
                window.open(links[8]);
                window.open(links[10]);
            }
        } else if (isFTSelectFalse) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[0]},${testingToolsDataBase[5]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[0]);
                window.open(links[5]);

            }
        } else if (isFFRSelectFalse) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[0]},${testingToolsDataBase[8]},${testingToolsDataBase[10]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[0]);
                window.open(links[8]);
                window.open(links[10]);
            }
        } else if (isFFSelectFalse) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[2]},${testingToolsDataBase[8]},${testingToolsDataBase[10]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[2]);
                window.open(links[8]);
                window.open(links[10]);
            }
        } else if (isFSISelectFalse) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[0]},${testingToolsDataBase[10]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[0]);
                window.open(links[10]);
            }
        } else if (isFSTSelectFalse) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[1]},${testingToolsDataBase[4]},${testingToolsDataBase[7]},${testingToolsDataBase[10]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[1]);
                window.open(links[4]);
                window.open(links[7]);
                window.open(links[10]);

            }
        } else if (isFSFRSelectFalse) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[6]},${testingToolsDataBase[7]},${testingToolsDataBase[11]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[6]);
                window.open(links[7]);
                window.open(links[11]);

            }
        } else if (isFSFSelectFalse) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[0]},${testingToolsDataBase[3]},${testingToolsDataBase[8]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[0]);
                window.open(links[3]);
                window.open(links[8]);
            }
        } else if (isFSSISelectFalse) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[3]},${testingToolsDataBase[5]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[3]);
                window.open(links[5]);
            }
        }else if (isFSTFRSelectFalse) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[5]},${testingToolsDataBase[8]},${testingToolsDataBase[11]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[5]);
                window.open(links[8]);
                window.open(links[11]);
            }
        }else if (isFSTFSelectFalse) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[0]},${testingToolsDataBase[2]},${testingToolsDataBase[5]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[0]);
                window.open(links[2]);
                window.open(links[5]);
            }
        }else if (isFSTSISelectFalse) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[3]},${testingToolsDataBase[8]},${testingToolsDataBase[10]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[3]);
                window.open(links[8]);
                window.open(links[10]);
            }
        } else if (isFSTFRFSelectFalse) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[3]},${testingToolsDataBase[10]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[3]);
                window.open(links[10]);
            }
        }else if (isAllSelectFALSE) {
            if (confirm(`Вам подойдут такие инструменты тестирования:${testingToolsDataBase[0]},${testingToolsDataBase[4]},${testingToolsDataBase[8]}.\nПерейти на сайт для ознакомления?`)) {
                window.open(links[0]);
                window.open(links[4]);
                window.open(links[8]);
            }
        }
    }
}