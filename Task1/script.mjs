"use strict"
import {
    getToStringCorrectCase,
    fixSpacesString,
    getCountWords,
    findCountUniqueWords
} from "./modulesString.mjs"

let s = "Вот пример строки,в которой     используются знаки препинания .После    знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены. Слов будет 33";

let str = "Итак, я человек, и я программист. Программирование, это интересная наука, и я буду изучать программирование, так как я программист.";

console.log(getToStringCorrectCase(s));
console.log(fixSpacesString(s));
console.log(getCountWords(s));
console.log(findCountUniqueWords(str).entries());

