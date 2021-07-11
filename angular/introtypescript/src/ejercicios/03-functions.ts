/*
    ===== Código de TypeScript =====
*/

function sum(a:number, b:number): number{
    return a + b;
}

function multiplicar(dataNumber: number, otherDataNumber?:number, base:number = 2){
    return dataNumber * base;
}




interface PersonajeActual{
    nombre:string;
    hp: number;
    showHp: ()=>void;

}

var curar = function(personaje: PersonajeActual, curarX):void{
personaje.hp += curarX;
}

const albertActual: PersonajeActual = {
    nombre: "Albert",
    hp: 100,
    showHp:function(){ console.log('my heart points are;', this.hp)}
}

curar(albertActual, 50);

albertActual.showHp();
