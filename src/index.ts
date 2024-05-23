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