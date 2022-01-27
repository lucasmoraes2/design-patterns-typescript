function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const personPrototype = {
    firstName: 'Lucas',
    lastName: 'Moraes',
    age: 24,

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function Person2(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);
    this.fromPerson2 = 'Hi';
}

Person2.prototype = Object.create(Person.prototype);
Person2.prototype.constructor = Person2;

const person1 = new Person('Phoebe', 'Buffay', '30');
console.log(person1);
console.log(person1.fullName());

const person2 = new Person2('Aurora', 'Aksnes', '25');
console.log(person2);
console.log(person2.fullName());
