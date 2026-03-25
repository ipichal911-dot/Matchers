import sortHeroes from '../app';

describe('sortHeroes', () => {
    test('сортировка героев по убыванию здоровья', () => {
        const heroes = [
            { name: 'мечник', health: 10 },
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
        ];
        const expected = [
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
            { name: 'мечник', health: 10 },
        ];
        const result = sortHeroes(heroes);
        expect(result).toEqual(expected);
    });

    test('исходный массив не меняется', () => {
        const heroes = [
            { name: 'мечник', health: 10 },
            { name: 'маг', health: 100 },
        ];
        const copy = [...heroes];
        sortHeroes(heroes);
        expect(heroes).toEqual(copy);
    });

    test('обработка пустого массива', () => {
        expect(sortHeroes([])).toEqual([]);
    });
});