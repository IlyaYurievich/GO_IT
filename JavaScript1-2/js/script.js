function pow() {
    var x = prompt('ведите число: ');
    x = parseInt(x);
    console.log(x);
    var n = prompt('Возвести в степень: ');
    n = parseInt(n);
    console.log(n);

    if (n == 0) {
        return console.log("Результат: 1");
    }
    if (n < 0) {
        alert("Введите другое число!!");
        pow();
    } else {
        var result = 1;
        for (var i = 1; i <= n; i++) {
            result *= x;
        }
        console.log("Результат: ", result);
    }
}
pow();

var arr = [];

for (var i = 0; i < 5; i++) {
    var name = prompt('Введите имя: ');
    arr.push(name);
}
console.log(arr);

var userName = prompt('Введите проверочное имя: ');

function validName() {
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] === userName) {
            console.log("userName ", userName);
            console.log("arr[k] ", arr[k]);
            return alert(arr[k] + ', добро пожаловать!');
        }
    }
    return alert('Ошибка!!!');
}
validName();

