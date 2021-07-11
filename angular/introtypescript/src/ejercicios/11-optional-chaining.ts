interface Passenger {
    name: string;
    children?: string[];
}


const passenger1: Passenger = {
    name: "Carolina Agudelo"
}

const passenger2: Passenger = {
    name: "Giovanna Romanova",
    children: [
        "Jacob",
        "Juliana"
    ]
}


function printChildren(passenger: Passenger):void{

const howManyChildren = passenger.children ? passenger.children.length : 0;
console.log(passenger.name + " has " + howManyChildren  + " children");
}
printChildren(passenger1);
printChildren(passenger2);