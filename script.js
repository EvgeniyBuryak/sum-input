function sumInput() {

    let sumArray = [];
    let input;
    let sum = 0;

    for (let i = 0; ; i++) {
        input = prompt("Введите значение", '');

        if (!input) { // так как "0" строка содержит 0, значит она не пустая - true, а в нашем условие false
            break;
        }

        sumArray[i] = +input;
        continue;
    }

    for (let value of sumArray) {
        sum += +value;
    }

    return sum;
}

sumInput();
