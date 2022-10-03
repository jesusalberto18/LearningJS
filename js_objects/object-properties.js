const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.eyeColor);

// add property
person.nationality = 'English';

// delete property
delete person.eyeColor;
