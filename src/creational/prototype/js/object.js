const personPrototype = {
  firstName: 'Lucas',
  lastName: 'Moraes',
  age: 24,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Phoebe';
console.log(anotherPerson);
console.log(anotherPerson.fullName());
