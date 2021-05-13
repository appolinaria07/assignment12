// STEP 1
// function Cat() {

// }

// const Dog = function() {

// };


// STEP 2
// const cat1 = new Cat();
// const dog1 = new Dog();


// STEP 3
// const Animal = function () {
//     this.method1 = function () {
//         return "The Animal has been created.";
//     }
// };
// const animal1 = new Animal();
// console.log(animal1.method1());

// STEP 4
// const Animal = function (species) {
//         this.method1 = function () {
//             return species;
//         }
//     };
//     const animal1 = new Animal('Zebra');
//     console.log(animal1.method1());

// STEP 5
// function Animal(type, breed, color, height, length) {
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length = length;
// }
// const animal1 = new Animal('dog', 'Cavalier', 'Bleinheim', '12', '19');


// STEP 6
// function Animal(type, breed, color, height, length) {
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length = length;
// }
// const animal1 = new Animal('dog', 'Cavalier', 'Bleinheim', '12', '19');
// for (let property in animal1) {
//     console.log(property);
// }


// STEP 7
// function Animal(type, breed, color, height, length) {
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length = length;
// }
// Animal.prototype.speak = function() {
//     if (this.type === 'dog') {
//         return `The <${this.color}> dog is barking!`;
//     } else if (this.type === 'cat') {
//         return `The <${this.color}> cat is meowing!`;
//     }
// };
// const animal1 = new Animal('dog', 'Cavalier', 'Bleinheim', '12', '19');
// console.log(animal1.speak());

// STEP 8
// function Animal(type, breed, color, height, length) {
//         let _type = type;
//         let _breed = breed;
//         let _color = color;
//         let _height = height;
//         let _length = length;
//         let checkType = function() {
//             if (_type === 'dog') {
//                 return 'dog';
//             } else {
//                 return 'cat';
//             }
//         };
//         this.speak = function() {
//             return checkType();
//         }
//     }
//     const animal1 = new Animal('dog', 'Cavalier', 'Blenheim', '12', '19');
//     console.log(`The <${animal1.speak()}> has made a noise!`);


// STEP 9
String.prototype.findWords = function() {
    'use strict';
    let wordCount = 0;
    paragraph = paragraph.toLowerCase();
    paragraph = paragraph.replace(/,/g, '');              
    paragraph = paragraph.replace(/:/g, '');
    paragraph = paragraph.replace(/\./g, '');
    paragraph = paragraph.replace(/\)/g, '');
    paragraph = paragraph.replace(/\(/g, '');
    paragraph = paragraph.split(' ');

    for (let i = 0; i < paragraph.length; i++) {
        if (word === paragraph[i]) {
            wordCount++;
        } 
    }
     return wordCount;
};
let paragraph = 'Fanciers of the 1920s wondered whether there still existed the old-type toy spaniel immortalized in ancestor portraits hanging in the stately halls of English manors. A wealthy American named Roswell Eldridge offered a cash prize to British breeders who could produce “Bleinheim Spaniels of the Old World type.” The prospect of prize money drove breeders to revive the old style. These dogs were dubbed Cavalier King Charles Spaniels. (The name Cavalier is a nod to the monarchist party that supported the Stuarts during the civil war that cost Charles I his head.)';
let word = 'the';
console.log(`The word <${word}> has been found <${paragraph.findWords()}> times in the paragraph.`);



