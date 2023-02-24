let age: number = 23;
age = 15;

let userName: string | string[];
userName = 'Sody15';

let isInstructor: boolean;
isInstructor = true;

type Person = {
  name: string;
  age: number;
};

let people: Person[];

let course: string | number = 'React - The Complete Guide';

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');
