
function whatTypeAm<T>(argument: T){
    return argument;
}



let amString = whatTypeAm("Hello world");
let amNumber = whatTypeAm(100);
let amArray = whatTypeAm([1,2,3,4,5,6,7,8,9]);
let amExplicit = whatTypeAm<number>(100);


