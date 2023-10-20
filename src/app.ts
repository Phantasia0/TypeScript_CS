// ----------------------
// Intersection Type

interface Admin  {
    name:string;
    privileges: string[];
}

interface Employee  {
    name:string;
    startDate:Date;
}

interface ElevatedEmployee extends Employee, Admin {

}


// type ElevatedEmployee = Admin & Employee;

const e1:ElevatedEmployee = {
    name:'Max',
    privileges:['create-server'],
    startDate:new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// ----------------------
// Type Guard / Function Overloading / Optional Chaining / Nullish

function add(a:number, b:number): number;
function add(a:string, b:string): string;
function add(a:Combinable, b:Combinable){
    if(typeof a==='string' || typeof b==='string'){
        return a.toString() + b.toString();
    }
    return a+b;
}

const result = add('Max','Week');
result.split(' ');

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: {title:'CEO', description:'My own company'}
}
console.log(fetchedUserData?.job?.title);

const userInput = null; // null or undefined
const storedData = userInput ?? 'DEFAULT';
console.log(storedData);


type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp:UnknownEmployee){
    console.log('Name' + emp.name);

    if('privileges' in emp){
        console.log('Privileges: ' + emp.privileges);
    }

    if('startDate' in emp){
        console.log('StartDate: ' + emp.startDate)
    }
}

printEmployeeInformation(e1);
printEmployeeInformation({name:'Manu', startDate:new Date()});

// ----------------------
interface Bird {
    type:'bird';
    flyingSpeed:number;
}

interface Horse {
    type:'horse';
    runningSpeed:number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    let speed;
   switch (animal.type){
       case 'bird':
           speed = animal.flyingSpeed;
           break;
       case 'horse':
           speed = animal.runningSpeed;
           break;
   }

    console.log('Moving with speed: ' + speed);
}

moveAnimal({type:'bird', flyingSpeed: 10});

// ----------------------
// Type Casting

// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
userInputElement.value = 'Hi there!';

const userInputElementss = document.getElementById('user-input');
if(userInputElementss) {
    (userInputElementss as HTMLInputElement).value = 'Hi there!';
}

// ----------------------
// Index Type

interface ErrorContainer { // {email:'Not a valid email', username:'Must start wit a character'}
    [prop:string] : string;
}

const errorBag : ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a capital character!'
}

