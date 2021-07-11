export interface Product{
    description: string;
    price: number;
}


const telephone:Product = {
    description: 'Iphone',
    price: 2500
}

const samsungTablet: Product = {
    description: 'Samsung A570',
    price: 750
}



export var calculateTax = function(products: Product[]): [number, number]{
let total = 0;
products.forEach(function ({price}: Product, index){
    total += price;
});

return [total, total * 0.5];
}

const allProducts:Product[] = [telephone, samsungTablet];
const [total, tos] = calculateTax(allProducts);


console.log('All taxes: ', total, tos);