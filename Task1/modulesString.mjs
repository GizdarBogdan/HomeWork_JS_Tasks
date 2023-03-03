/** 
Возвращает строку, где первая буква заглавная,
а остальные строчные
@params {string} str Строка для преобразования
@return {string} С первой заглавной буквой
**/
export function getToStringCorrectCase(str)
{
    let result = str.toString().toLowerCase();
    result = result[0].toUpperCase() + result.substring(1);
    return result;
}

/** 
Правильно расставляет пробелы в строке, удаляет лишние 
пробелы до знаков препинания
@params {string} str Строка для преобразования
@return {string} Новая строка с исправленными пробелами
**/
export function fixSpacesString(str) 
{
    let punctuations = [',', '.', ':', ';'];
    let result = "";
    str = str.trim();
    for (let i = 0; i < str.length; i++)
    {
        if (i != str.length - 1 &&
            str[i] == " " && 
            (str[i + 1] == " " || punctuations.includes(str[i + 1])))  {
            continue;
        }
        if (i != str.length - 1 && 
            punctuations.includes(str[i]) && 
            str[i + 1] != " ") {
            result += (str[i] + " ");
        }
        else {
            result += str[i];
        }
    }
    return result.trimEnd();
}

/** 
Получает количество слов в строке (включая цифры)
@params {string} str Строка для подсчета
@return {number} Количество слов
**/
export function getCountWords(str)
{
    return str.split(' ').filter(item => item != '').length;
}

export function findCountUniqueWords(str) {
    //Стоит добавить в массив большее количество знаков препинания
    str = str.toLowerCase();
    let punctuations = [',', '.', ':', ';', ' '];
    let array = new Map();
    let key = "";
    for (let i = 0; i <= str.length; i++)
    {
        if (punctuations.includes(str[i])) {
            if (key != "") {
                if (array.has(key)) {
                    let value = array.get(key) + 1;
                    array.set(key, value);
                    key = "";
                } else {
                    array.set(key, 1);
                    key = "";
                }
            } 
        } else {
            key += str[i];
        }
    }
    return array;
}