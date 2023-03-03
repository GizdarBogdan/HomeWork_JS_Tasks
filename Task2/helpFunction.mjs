/**
 * Сравнивает число a с числом b
 * (Число a больше числа b?)
 * @param {string} a длинное число в виде строки
 * @param {string} b длинное число в виде строки
 * @returns true, если a >= b, иначе false
 */
export function isBigger(a, b) {
    let result;
    a = a.toString();
    b = b.toString();

    let helpObj = {
        a,
        b
    };
    
    addZero(helpObj);
    a = helpObj.a;
    b = helpObj.b;

    for (let i = Math.max(a.length, b.length) - 1; i >= 0; i--) {
        if (a[i] == b[i]) {
            continue;
        }
        if (a[i] >= b[i]) {
            result = true;
        } else if (a[i] < b[i]) {
            result = false;
        }
    }
    return result;
}

/**
 * Функция получает объект, содержащий
 * числа в виде строки
 * В зависимости от длины числа дополняет меньшее число нулями
 * @param {object} helpObj Объект - Чтобы менять значение по ссылке
 */
export function addZero(helpObj) {

    if (helpObj.a.length > helpObj.b.length) {
        let countZero = helpObj.a.length - helpObj.b.length;
        helpObj.b = "0".repeat(countZero).concat(helpObj.b);
    } else {
        let countZero = helpObj.b.length - helpObj.a.length;
        helpObj.a = "0".repeat(countZero).concat(helpObj.a);
    }

}
