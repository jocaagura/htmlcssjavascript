

import { Product, calculateTax } from './06-de-structuration';




const shoppingCart:Product[] = [
    {description: 'Car', price: 250},
    {description: 'Soldier toy', price: 100},

];

const [total, isv] = calculateTax(shoppingCart);

console.log('Taxes: ', isv, ' for a total amount os ', total);
