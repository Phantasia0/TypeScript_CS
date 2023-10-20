// const names :Array<string> = []; // string[]
//
// const promise : Promise<number> = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(10);
//     }, 2000);
// });
//
// promise.then(data=>{
//     data.split(' '); // error
// })

// -------------------------------
// Constraint
function merge<T extends object,U extends object>(objA:T, objB:U) {
    return Object.assign(objA,objB);
}

const mergeObj = merge({name:'Max'}, {age:10});
const mergeObj2 = merge({name:'Max', hobbies:['Sports']}, {age:10});
// const mergeObj3 = merge<{name:string, hobbies:string[]},{age:number}>({name:'Max', hobbies:['Sports']}, {age:10});

console.log(mergeObj.age);
console.log(mergeObj2.age);

interface Length {
    length: number;
}

function countAndDescribe<T extends Length>(element:T):[T,string] {
    let descriptionText = 'Got no value.';
    if(element.length === 1){
        descriptionText = 'Got 1 elements';
    }else if (element.length > 1 ){
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText ];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sporting', 'Cooking']));


// -------------------------------
// keyof Something depends on T
function extractAndConvert<T extends object , U extends keyof T>(obj:T, key:U){
    return 'Value: ' + obj[key];
}

console.log(extractAndConvert({name:'Max'}, 'name'));

// -------------------------------
// class

class DataStorage<T extends string | number | boolean> {
    private data:T[] = [];

    addItem(item:T){
        this.data.push(item);
    }

    removeItem(item:T){
        if(this.data.indexOf(item)=== -1){
            return;
        }
        this.data.splice(this.data.indexOf(item),1);
    }

    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('John');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number | string>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name:'Max'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name:'John'});
//
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

// -------------------------------
// Utility

interface CourseGoal {
    title:string;
    description:string;
    completeUntil:Date;
}

function createCourseGoal(title:string, description:string, date: Date):CourseGoal{
    let courseGoal:Partial<CourseGoal> = {};

    courseGoal.title= title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

const names:Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();