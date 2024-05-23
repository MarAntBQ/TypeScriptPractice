let mensaje: string = "Hola Mundo";

mensaje = "MarAntBQ.dev";

mensaje = "Bye World";

console.log(mensaje + ' test in console.log');

/**
* JS Types 
* number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 * 
 * TS Types
 * any
 * unkown
 * never
 * arrays
 * tuplas
 * Enums
 * 
 *  Inferred Types
 * 
*/
// Declaring Type
let extincionDinosaurio: number = 76_000_000
let favoriteDinosaur: string = "T-Rex"
// Not declaring Type -> TS will auto detect and assign
let extinted = true
// Any
let myVariable
myVariable = "Happy Dog"
myVariable = 42


function happyDog(config: any) {
  return config
}


let animals : string[] = ['dog', 'cat', 'cow'];
let nums: number[] = [1,2,3]

let checks: boolean[] = []
let nums2: Array<number> = []


// nums.map(x => x.) // The autocompletation suggest methods according to the array type

let tupla: [number, string[], boolean] = [1, ["happy dog", "sad cat"], true];


// tupla.push(12); <- Error in TypeScript

const small = 's'
const medium = 'm'
const large = 'l'
const extralarge = 'xl'

// PascalCase
enum Talla{ Small = 's', Medium = 'm', Large = 'l', ExtraLarge = 'xl'}

const variable1 = Talla.Large

console.log(variable1)


const enum LoadingState { Idle, Loading, Success, Error }

const estado = LoadingState.Success;

type Direccion = {
  numero: number,
  calle: string,
  pais: string
}

type Persona = {
  readonly id: number,
  nombre: string,
  talla: Talla,
  direccion: Direccion
}

const objeto: Persona = {
  id: 1,
  nombre: 'Hi World',
  talla: Talla.Medium,
  direccion: {
    numero: 593,
    calle: "Street A",
    pais: "Ecuador"
  }
}

// const object: {
//   readonly id: number,
//   nombre: string,
//   talla: Talla,
// } = {
//   id: 1,
//   nombre: 'Hi World',
//   talla: Talla.Medium
// }

//object.nombre = 'Hi World';
//object.id = 42