//let name='Saquib';
//let age=30;

//using objects
let person={
    name:'Saquib',
    age:30
};
console.log(person);

person.name='Nazeeb'; //dot Notation
let selection='name';
person[selection]='Rose';

person['name']='Mary'; //Bracket Notation

console.log(person.name);