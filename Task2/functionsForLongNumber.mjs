import { addZero, isBigger } from "./helpFunction.mjs";

/**
 * Складывает два длинных (положительных) числа
 * @param {string} a первое число
 * @param {string} b второе число
 * @returns {string} результат суммы
 */
export function bigSum(a, b) {

    a = a.toString();
    b = b.toString();

    console.log(`${a} + ${b} = `);
    
    let helpObj = {
        a,
        b
    };
    addZero(helpObj);

    a = helpObj.a;
    b = helpObj.b;

    let memory = 0;
    let result = "";
    for (let i = a.length - 1; i >= 0; i--) {
        if (memory == 0) {
            memory = Math.floor((+a[i] + +b[i]) / 10);
            result = (+a[i] + +b[i]) % 10 + result;
        } else {
            result = (+a[i] + +b[i] + memory) % 10 + result;
            memory = Math.floor((+a[i] + +b[i] + memory) / 10);
        }
    }
    if (memory == 1) {
        result = memory + result;
    }
    return result;
}

/**
 * Вычитает из числа a число b
 * @param {string} a Уменьшаемое
 * @param {string} b Вычитаемое
 * @returns {string} Результат разности
 */
export function bigDifference(a, b) {

    console.log(`${a} - ${b} = `);
    let sign;
    if (isBigger(a, b)) {
        a = a.toString();
        b = b.toString();
        sign = "";
    } else {
        let temp = a;
        a = b.toString();
        b = temp.toString();
        sign = "-";
    }

    let helpObj = {
        a,
        b
    };

    addZero(helpObj);
    a = helpObj.a;
    b = helpObj.b;
    let result = "";

    /**
    * показывает, занимали ли разряд у след. числа
    */
    let flagMemory = false;
    for (let i = a.length - 1; i >= 0; i--) {
        if (flagMemory) {
            if (a[i] - 1 >= b[i]) {
                result = +a[i] - 1 - +b[i] + result;
                flagMemory = false;
            } else {
                flagMemory = true;
                result = +a[i] - 1 - b[i] + 10 + result;
            }
        } else {
            if (a[i] >= b[i]) {
                flagMemory = false;
                result = +a[i] - +b[i] + result;
            } else {
                flagMemory = true;
                result = +a[i] - +b[i] + 10 + result;
            }
        }
    }

    let index = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] == "0") {
            continue;
        }
        index = i;
        break;
    }
    return sign + result.substring(index);
}

export function bigMultiplication(a, b) {
/*не успел написать, но логика примерно аналогичная
Так же создает переменную для хранения памяти, проходимся вложенным
циклом и перемножаем каждое на каждое число*/
}

export function bigDivision(a, b) {
/*не успел написать*/
}