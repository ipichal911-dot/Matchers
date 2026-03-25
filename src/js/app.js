export default function sortHeroes(heroes) {
    return [...heroes].sort((a, b) => b.health - a.health);
}

import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));
