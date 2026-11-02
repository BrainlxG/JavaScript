'use strict';

import { fib } from '../lab2/lab2.js';

/**
 * Возвращает дробную часть числа.
 * @param {number} num Число.
 * @returns {number} Дробная часть числа.
 */
function getDecimal(num) {
    return +(num - Math.floor(num)).toFixed(10);
}

/**
 * Делит числа с остатком.
 * @param {number} divident Делимое.
 * @param {number} divisor Делитель.
 * @returns {Array<number>} Массив вида [частное, остаток].
 */
function divmod(divident, divisor) {
    let quotient = Math.floor(divident / divisor);
    let remainder = divident - (quotient * divisor);
    return [quotient, remainder];
}

/**
 * Возвращает строку с заглавным первым символом.
 * @param {string} str Входная строка.
 * @returns {string} Строка с заглавным первым символом.
 */
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

/**
 * Нормализует URL, добавляя https://.
 * @param {string} url Адрес сайта.
 * @returns {string} Нормализованный URL.
 */
function normalizeUrl(url) {
    if (url.startsWith('http://')) return url.replace('http://', 'https://');
    if (url.startsWith('https://')) return url;
    return 'https://' + url;
}

/**
 * Проверяет наличие спама в строке.
 * @param {string} str Входная строка.
 * @returns {boolean} true, если есть спам, иначе false.
 */
function checkSpam(str) {
    let lower = str.toLowerCase();
    return lower.includes('viagra') || lower.includes('xxx');
}

/**
 * Усекает строку до указанной длины и добавляет многоточие.
 * @param {string} str Входная строка.
 * @param {number} maxlength Максимальная длина.
 * @returns {string} Усеченная строка.
 */
function truncate(str, maxlength) {
    if (str.length <= maxlength) return str;
    return str.slice(0, maxlength - 1) + '…';
}

/**
 * Преобразует строку вида 'var-test-text' в 'varTestText'.
 * @param {string} str Входная строка.
 * @returns {string} Преобразованная строка.
 */
function camelize(str) {
    return str.split('-').map((word, index) => index === 0 ? word : ucFirst(word)).join('');
}

/**
 * Возвращает массив чисел Фибоначчи до указанного числа n.
 * @param {number} n Количество чисел.
 * @returns {Array<BigInt>} Массив чисел Фибоначчи.
 */
function fibs(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(fib(i));
    }
    return arr;
}

/**
 * Возвращает массив, отсортированный по убыванию.
 * @param {Array<number>} arr Входной массив.
 * @returns {Array<number>} Отсортированный массив.
 */
function arrReverseSorted(arr) {
    return arr.slice().sort((a, b) => b - a);
}

/**
 * Возвращает массив уникальных значений.
 * @param {Array<any>} arr Входной массив.
 * @returns {Array<any>} Массив уникальных значений.
 */
function unique(arr) {
    return Array.from(new Set(arr));
}

export { getDecimal, divmod, ucFirst, normalizeUrl, checkSpam, truncate, camelize, fibs, arrReverseSorted, unique };
