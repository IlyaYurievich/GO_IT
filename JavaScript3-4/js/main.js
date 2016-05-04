var table = {
    title: "Тест по программированию",
    lines: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3', 'Вопрос №4', 'Вопрос №5'],

    answers: [
        ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
        ['Вариант ответа №4', 'Вариант ответа №5', 'Вариант ответа №6'],
        ['Вариант ответа №7', 'Вариант ответа №8', 'Вариант ответа №9'],
        ['Вариант ответа №10', 'Вариант ответа №11', 'Вариант ответа №12'],
        ['Вариант ответа №13', 'Вариант ответа №14', 'Вариант ответа №15'],
    ],


   createLine: function () {
        var wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        var body = document.querySelector('body');
        body.appendChild(wrapper);

        var title = document.createElement('h3');
        title.classList.add('title');
        title.innerHTML = this.title;
        wrapper.appendChild(title);

        var list = document.createElement('ol');
        list.classList.add('list');
        wrapper.appendChild(list);

        for (var k = 0; k < this.lines.length; k++) {
            var listLine = document.createElement('li');
            listLine.innerHTML = this.lines[k];
            list.appendChild(listLine);
            var listUl = document.createElement('ul');
            listLine.appendChild(listUl);

            for (var m = 0; m < this.answers[k].length; m++) {
                var innerListLine = document.createElement('li');
                innerListLine.classList.add('list-line');

                var lineCheckbox = document.createElement('input');
                lineCheckbox.classList.add('checkbox');
                lineCheckbox.setAttribute("type", "checkbox");

                var labelCheckbox = document.createElement('label');
                labelCheckbox.classList.add('label');


                var spanCheckbox = document.createElement('span');
                spanCheckbox.classList.add('span');
                spanCheckbox.innerHTML = this.answers[k][m];

                innerListLine.appendChild(labelCheckbox);
                labelCheckbox.appendChild(lineCheckbox);
                labelCheckbox.appendChild(spanCheckbox);

                listUl.appendChild(innerListLine);
            }
        }
        var submit = document.createElement('input');
        submit.setAttribute("type", "submit");
        submit.setAttribute("value", "Проверить мои результаты");
        submit.classList.add('submit');
        wrapper.appendChild(submit);

    }

};

table.createLine();
var sendBtn = document.querySelector('js-sent');
