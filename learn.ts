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

// In this case typescript know what type will return 
// the last :string is saying that the function must return a string value
function saludarReturn({name,age}:{name:string, age:number}):string{
    console.log(`Hola ${name}, tienes ${age} años`);
    return name;
}

// Function like paramenter, bellow I telling for typescript that the function
// need at lest one string parameter and must return nothing
const sayHiFromFunction = (fn:(name:string)=>void)=>{
    fn("Miguel")
}
const sayHi = (name:string)=>{
    console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi)

// Type Arrow functions:
const sumar = (a: number, b:number): number =>{
    return a +b;
}

// Use NEVER when function never return something instead of any that indicades the will or wont a return a value
function throwError(message: string): never{
    throw new Error(message)
}

//Inference data in anonymous functions, in this case typescripts knows
// what type of parameter is passing for function because he knows
// what type of values is in avengers or the  array value. 
const avengers = ['Spidey','Hulk','Avengers']
avengers.forEach(function (avenger){
    console.log(avenger.toUpperCase());
})


// TEMPLATE UNION TYPES
type HeroId = `${string}-${string}-${string}-${string}-${string}`
// UNION TYPES: variables of this type will just have the below options 
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

// Example of union types
let ann : number | string
ann = 3;


// Types hero always use pascal Case.
// whit ? indicates that the value or property is optional

type heroBasicInfo = {
    name: string,
    age: number
}
type HeroProperties = {
    readonly id?:HeroId,
    isActive?:boolean,
    powerScale?: HeroPowerScale
}

// INTERSECTION TYPES, so it's possible join two types. 
type Hero = heroBasicInfo & HeroProperties;

let hero: Hero = {
    name:'thor',
    age:1500
}

// I indicating that createHero must return a data Hero type.
function createHero(input:heroBasicInfo): Hero{
    const {name, age} = hero;
    return {
        id:crypto.randomUUID(),
        name, 
        age, 
        isActive: true
    };
}

const thor = createHero({name:'thor',age: 15000})
// the ask symbol is for validate if the property exist and after that you can use it. the property. 
thor.id?.toString();
thor.powerScale = "multiversal"
// this will throw an error because powerScale is HeroPowerSclae type and that type just admits the nexts value 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'
//thor.powerScale = 'bajo'


//Template union types 
type HexadecimalColor = `#${string}`;

//below line will throw an error because the string doesn't cumplite whit the format.
//const color: HexadecimalColor = '0033ff';
const color2: HexadecimalColor = '#0033ff';


//TYPE INDEXING 
type HeroPropertiesAddress ={
    isActive:boolean,
    address:{
        planet:string,
        city:string
    }
}

const addressHero: HeroPropertiesAddress['address'] = {
    planet: 'Earth',
    city:'Madrid'
}

// TYPE FROM VALUE
const address = {
    planet:'Earth',
    city:'Madrid'
}

type Address = typeof address;

const addressTwitch: Address = {
    planet:'mars',
    city:'Twitch'
}

// Type from function
function createAddress(){
    return{
        planet:'Tierra',
        city:'Barcelona'
    }
}

type AddressFromFunction = ReturnType<typeof createAddress>

//RECOMENDATIONS
// Type less types as you can, let the inference typescript work
// Avoid any type and unknown
// Avoid use Function for type a function.