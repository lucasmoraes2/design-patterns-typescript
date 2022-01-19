import { MyDatabaseFunction } from './db/my-database-function';

const myDatabase = MyDatabaseFunction;
myDatabase.add({ name: 'Lucas', age: 23 });
myDatabase.add({ name: 'Aurora', age: 24 });
myDatabase.add({ name: 'Phoebe', age: 30 });

export { myDatabase };
