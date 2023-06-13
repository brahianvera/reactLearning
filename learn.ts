// DATA TYPES 
// INFERENCIA: the typescript hability for know that type of data is the variable.
let  persona  = "hello"; //How to use types
// persona = 2; error typescript

//TypeScript knows automatically witch is the data type its called type inference
const personaObj = {
    name: 'Pepe',
    age: 30
}

// thiw will be throw error.
// personaObj.name = 4 // because this is a number
// personaObj.lastName // this index doesn't exist

// number 
let number = 1;
let n: number = 2;

// string 
let a = 'hola';

// null
let nul = null;

// undefined 
let b = undefined;

//What happends when typescript doesn't know what type of variable is 
let anyValue; // type any so, it will ignore typescripts types
let unk: unknown; // unknown value, use it when you don't know what type data is the var. 


//// FUNCTIONS 
// parameter should have a type
function saludar(name: string){
    console.log(`Hola ${name}`);
}
saludar('Pepe');
// saludar(2); it will be throw a error.

// the index in the objectt parametrer wil be any so that is bad.
// so use the saludarObjType for a better experience with typeScript
function saludarObj({name, age}){
    console.log(`Hola ${name}, tienes ${age} años`);
}

// so use the below statment for type an object
function saludarObjType({name,age}:{name:string, age:number}){
    console.log(`Hola ${name}, tienes ${age} años`);
}




//RECOMENDATIONS
// Type less types as you can, let the inference typescript work
// Avoid any type and unknown