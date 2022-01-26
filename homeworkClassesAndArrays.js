// console.log('Test');

//=======Exercise #1=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years.
*/

// Create our Person Prototype (Person class)
function PersonProto(name, age) {
    let person = Object.create(personMethods);
    person.name = name;
    person.age = age;

    return person
}

// create the printInfo method
// Create another method for the addAge method

const personMethods = {

    printInfo: function(){
        console.log(`${this.name} is ${this.age} years old.`)
    },

    aging: function(){
        this.age += 1;
    }
}
const person1 = PersonProto('Johnny Rose', 65)
const person2 = PersonProto('Moira Rose', 60)
console.log(person1, person2)



//=======Exercise #2=========//

/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// function evenIndex(arr){
//     for (let i = 0; i <= arr.length; i+2){
//         let newArr = arr.splice(i,1,"even index")
//     }
// }
// evenIndex(["Max","Baseball","Reboot","Goku","Trucks","Rodger"])
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

function evenIndex(arr){
    for (let i=0; i<=arr.length-1; i += 2){
        arr.splice(i,1,'even index');  
    }
}
console.log(arr);