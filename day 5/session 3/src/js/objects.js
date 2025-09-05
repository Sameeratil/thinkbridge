// ===============================
// Session 3 - Objects
// src/js/objects.js
// ===============================

// ---------- 1. Creating an Object ----------
const person = {
  name: "Sameer",
  age: 23,
  profession: "Developer",
};

console.log(person.name);
console.log(person.age);
console.log(person.profession);

// ---------- 2. Adding & Updating Properties ----------
person.city = "Pune"; // Add new property
person.age = 24;
console.log(person);
// Output: { name: 'Sameer', age: 24, profession: 'Developer', city: 'Pune' }

// ---------- 3. Iterating Over Object Properties ----------

// Using for...in loop
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Using Object.keys() and forEach
Object.keys(person).forEach((key) => {
  console.log(`${key} => ${person[key]}`);
});

// ---------- 4. Object Methods ----------
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  },
};

console.log(calculator.add(2, 3));
console.log(calculator.multiply(4, 5));

// ---------- 5. Nested Objects ----------
const student = {
  myname: "Sameer",
  marks: {
    math: 95,
    english: 88,
  },
};

console.log(student.myname);
console.log(student.marks.math);
console.log(student.marks.english);

// ---------- 6. Object Destructuring ----------
const { name, age, city } = person;
console.log(myname);
console.log(age);
console.log(city);
