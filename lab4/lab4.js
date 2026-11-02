'use strict';

export class Book {
    _title;
    _pubYear;
    #price;

    /**
     * Создаёт книгу.
     * @param {string} title Название книги.
     * @param {number} pubYear Год издания.
     * @param {number} price Цена книги.
     */
    constructor(title, pubYear, price) {
        this.title = title;
        this.pubYear = pubYear;
        this.price = price;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (value.trim() === '') {
            throw new Error('Название книги не может быть пустой строкой');
        }
        this._title = value;
    }

    get pubYear() {
        return this._pubYear;
    }

    set pubYear(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Год издания должен быть положительным числом');
        }
        this._pubYear = value;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Цена должна быть положительным числом');
        }
        this.#price = value;
    }

    show() {
        console.log(`${this.title}, ${this.#price}`);
    }

    /**
     * Сравнивает книги по году издания.
     * @param {Book} a Первая книга.
     * @param {Book} b Вторая книга.
     * @returns {number} Разница годов.
     */
    static compare(a, b) {
        return a.pubYear - b.pubYear;
    }
}

/**
 * Проверяет, пуст ли объект.
 * @param {Object} obj Проверяемый объект.
 * @returns {boolean|undefined} true если пуст, false если нет, undefined если это не объект.
 */
export function isEmpty(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return undefined;
    }
    return Reflect.ownKeys(obj).length === 0;
}

/**
 * Добавляет объекту методы работы с className.
 * @param {Object} obj Объект.
 * @returns {Object} Объект с методами.
 */
export function addClassMethods(obj) {
    obj.addClass = function(cls) {
        let classes = this.className ? this.className.split(' ') : [];
        if (!classes.includes(cls)) {
            classes.push(cls);
            this.className = classes.join(' ');
        }
        return this;
    };

    obj.removeClass = function(cls) {
        let classes = this.className ? this.className.split(' ') : [];
        this.className = classes.filter(c => c !== cls).join(' ');
        return this;
    };

    return obj;
}

/**
 * Возвращает количество секунд с начала текущего дня.
 * @returns {number} Количество секунд.
 */
export function getSecondsToday() {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((now - start) / 1000);
}

/**
 * Форматирует дату в строку дд.мм.гг.
 * @param {Date} date Дата.
 * @returns {string} Отформатированная дата.
 */
export function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}.${month}.${year}`;
}