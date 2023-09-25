// Primitives: number, string, boolean
// More complex types: arrays, objects
// Functions types, Parameters

//Primitives

let age: number; 

age = 12;

let userName: string | string[];

userName = 'Kyle';

let isInstructor: boolean;

isInstructor = true;

// More complex type

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: 'Kyle',
    age: 32
};

// person = {
//     isEmployee: true
// };

let people: {
    name: string;
    age: number;
}[];

// Type inference/Union Type 

let course: string | number = 'React - The Complete Guide';

course = 12341;

// Functions & types 

function add(a: number, b: number): number | string {
    return a + b;
}

function print(value: any){
    console.log(value);
}

//Generics

function insertAtBeginning<T>(array: T[], value:T) {
    const newArray =[value,...array];
    return newArray;
}

const demoArray = [1,2,3];

const updateArray = insertAtBeginning(demoArray, -1); 
const stringArray = insertAtBeginning(['a','b','c'], 'd')

// updateArray[0].split('');

class Student {
    // firstName: string;
    // lastName: string;
    // age:number;
    // private courses: string[];

    constructor(public firstName:string, public lastName:string, public age:number, private courses:string[]) {
        // this.firstName = first;
        // this.lastName = last;
        // this.age = age;
        // this.courses = courses;
    }

    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice;
    }
}

const student = new Student('Kyle', 'Wells', 32, ['Angular']);
student.enrol('React');
// student.listCourses(); => Angular, React

// student.course => Angular, React

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let max: Human;

max = {
    firstName: 'Max',
    age: 32,
    greet() {
        console.log('Hello');
    },
};

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Hello!!!');
    }
}