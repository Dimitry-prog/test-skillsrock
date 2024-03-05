// Подсчёт положительных элементов в массиве
// Дан массив чисел, необходимо написать функцию, которая возвращает количество положительных элементов в этом массиве.

const positiveElementsInArr = (arr) => {
    return arr.reduce((acc, num) => num > 0 ? acc + 1 : acc, 0);
};

// Обратный порядок строки
// Дана строка, необходимо написать функцию, которая возвращает эту же строку, но в обратном порядке.

const revertedStr = (str) => {
    return str.split('').reverse().join('');
};

// Сумма элементов массива чисел
// Дан массив чисел, необходимо написать функцию, которая возвращает сумму всех элементов массива.

const sumElementsInArr = (arr) => {
    return arr.reduce((acc, item) => acc += item, 0);
};

// Сортировка по длине
// Дан массив строк, необходимо написать функцию, которая возвращает этот же массив, отсортированный по длине строк от самой короткой к самой длинной.

const sortingByLength = (arr) => {
    return arr.slice().sort((a, b) => a.length - b.length);
};

// Поиск уникальных пар чисел с заданной суммой
// Описание задачи:
//     Напишите функцию, которая принимает два аргумента: массив чисел и число n. Функция должна найти все уникальные пары чисел из массива, сумма которых равна n, и вернуть их в виде массива пар.

const findPairsWithSum = (arr, n) => {
    const pairs = [];
    const hash = new Set();

    for (const num of arr) {
        let delta = n - num;

        if (hash.has(delta)) {
            pairs.push([num, delta]);
        }

        hash.add(num);
    }

    return pairs;
};

// Максимальная прибыль на акциях
// Описание задачи:
// Вы получаете массив prices, где prices[i] указывает цену данной акции в i-ый день.
// Вы хотите максимизировать свою прибыль, выбрав один день для покупки одной акции и выбрав другой день в будущем для продажи этой акции.

const maxProfit = (arr) => {
    let maxProfit = 0;
    let minPrice = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minPrice) {
            minPrice = arr[i];
        } else {
            maxProfit = Math.max(maxProfit, arr[i] - minPrice);
        }
    }

    return maxProfit;
};
