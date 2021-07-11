
interface Reproductor{
    volume: number;
    second: number;
    song: string;
    details: Details;
}

interface Details{
    author:string;
    year: number;
}

const reproductor: Reproductor ={
    volume: 90,
    second: 30,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }

}

const{volume, second, details:{author}} = reproductor;

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const[goku, ,p3 ] = dbz;
console.log('Personaje 1:', goku );
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', p3);


console.log('El volumen actual es: ', volume);
console.log('El autor actual es: ', author);


