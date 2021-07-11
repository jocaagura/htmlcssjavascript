/*
    ===== Código de TypeScript =====
*/


let habilidades: string[] = ['bash', 'counter'];

interface Personaje{
    nombre:string;
    hp:number;
    habilidades: string[];
    puebloNatal?: string;
}
const albert: Personaje = {
    nombre: 'Albert',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing'],
    }


    console.table(albert);

console.table(albert);