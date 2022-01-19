import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabase as myDatabaseFromModuleA } from './module_a';

const myDatabase = MyDatabaseFunction;
myDatabase.add({ name: 'Joey', age: 23 });
myDatabase.add({ name: 'Chihiro', age: 24 });
myDatabase.add({ name: 'Kiki', age: 30 });
myDatabase.show();

console.log(myDatabase === myDatabaseFromModuleA);
