function sumInput() {

    let sumArray = [];
    let input;
    let sum = 0;

    while (true) {
        input = prompt("Введите значение", '');

        if (!input || !isFinite(input)) { // так как "0" строка содержит 0, значит она не пустая - true, а в нашем условие false
            break;
        }

        sumArray.push(input);
    }

    for (let value of sumArray) {
        sum += +value;
    }

    return sum;
}

sumInput();