/*

********************************************
* Lesson 4 - Concatenation & Interpolation *
********************************************

*/

/*

String Concatenation

*/

let firstName = "Amirhossein";
let lastName = "Moravveji";
let output = "My first name is " + firstName + ". And my family name is " + lastName;
console.log(output);

/*

String Interpolation (Template Literals)

*/

let sample_str = `My first name is ${firstName} and my family name is ${lastName}`;
console.log(sample_str);

/*

Extra materials after knowing arrays
Access String Characters

*/

let str1 = "Hello";
console.log(`The index 2 of the string "Hello" is: ${str1[2]}`);

let str2 = "World!";
console.log(`The index 1 of the string "World!" is: ${str2.charAt(1)}`);

/*

Strings are immutable

*/

let my_name = "amirhossein";
let my_name_cap = "AMIRHOSSEIN";

my_name[0] = "A";

// be statement will cause an error as strings are immutable
// my_name[0] = "b";

console.log(my_name);

/*

String Methods

*/

// display the number of characters of a string.
console.log(my_name.length);

// convert a string's characters into capital letters
console.log(my_name.toUpperCase());

// convert a string's characters into lower letters
console.log(my_name_cap.toLowerCase());
