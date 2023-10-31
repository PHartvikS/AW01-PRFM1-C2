/*1.2. Lesson - Strings*/

/*
Escape sequences
The backslash (\) turns the next character inside a string into a special one. Here are the escape sequences:
\’ – single quote
\” – double quote
\\ - backslash
\b – backspace
\f – form feed
\n – new line
\r – carriage return
\t – horizontal tabulator
\v – vertical tabulator
*/

let text = "My favourite book is \"Harry Potter\"";

/*
Operations on strings

let a = "abc";
let b = "de";
let c = "xyz";
let d = a + b;
document.writeln(d); //abcde
let e = a.concat(c);
document.writeln(e); //abcxyz

let a = "abc";
let b = "de";
a += b;
document.writeln(a); //abcde

et a = "abc";
let b = "de";
let c = "abcd";
document.writeln(a > b); //false
document.writeln(b > c); //true
document.writeln(a > c); //false
document.writeln(a < b); //true
document.writeln(b < c); //false
document.writeln(a < c); //true
*/

const str1 ='Hello';
const str2 ='My';
const str3 ='Pretty';
const str4 ='World';
const res = str2 +" "+ str3 +" "+ str4 +"!";
document.writeln(res);

/*
Extraction of string elements

let text = "My favourite book is \"Harry Potter\"";
let part = text.slice(8, 14);
document.writeln(part); //rite b

let text = "My favourite book is \"Harry Potter\"";
let part = text.slice(-27, -21);
document.writeln(part); //rite b

let text = "My favourite book is \"Harry Potter\"";
let part = text.slice(4);
document.writeln(part); //avourite book is "Harry Potter"
let part2 = text.slice(-4);
document.writeln(part2); //ter"

let text = "My favourite book is \"Harry Potter\"";
let part = text.substr(4, 5);
document.writeln(part); //avour
*/

/*
Replacement of string elements

let text = "My favourite book is \"Harry Potter\". I love this book so much.";
let result = text.replace("book", "movie");
document.writeln(result); //My favourite movie is "Harry Potter". I love this book so much.
let result2 = text.replace(/book/g, "movie");
document.writeln(result2); //My favourite movie is "Harry Potter". I love this movie so much.
*/

/*
Conversion to lower and upper case

let text = "My favourite book is \"Harry Potter\". I love this book so  much.";
let result = text.toLowerCase();
document.writeln(result); //my favourite book is "harry potter". i love this book so much.
let result2 = text.toUpperCase();
document.writeln(result2); //MY FAVOURITE BOOK IS "HARRY POTTER". I LOVE THIS BOOK SO MUCH.
*/

/*
String search methods

let text = "My favourite book is \"Harry Potter\". I love this book so much.";
let result = text.indexOf("book");
document.writeln(result); //13

let text = "My favourite book is \"Harry Potter\". I love this book so much.";
let result = text.lastIndexOf("book");
document.writeln(result); //49

let text = "My favourite book is \"Harry Potter\". I love this book so much.";
let result1 = text.startsWith("My");
let result2 = text.includes("My");
let result3 = text.includes("My", 4);
let result4 = text.endsWith("book");
document.writeln(result1); //true
document.writeln(result2); //true
document.writeln(result3); //false
document.writeln(result4); //false
*/

/*
If statement

if (condition) {
    //  block of code to be executed
}

let a = 10;
if (a > 5) {
    document.writeln(a);
}
*/

const myName = 'John';
if (myName.length <= 10){document.writeln(myName);}

/*
Else statement


if (condition) {
    //  block of code to be executed if condition == true
} else {
    //  block of code to be executed if condition == false
}

if (condition1) {
    //  block of code to be executed if condition1 == true
} else if(condition2) {
    //  block of code to be executed if condition1 == false and condition2 == true
} else if(condition3) {
    //  block of code to be executed if condition1 == false and condition2 == false and condition3 == true
} else {
    //  block of code to be executed if all conditions are false
}
*/

/*
Nested if statements

let a = 1;
if ( a > 0 ) {
  let b = 3;
    document.writeln(a);
}
document.writeln(b);

let a = 1;
let b = 3;
if ( a > 0) {
    if( b > 0) {
        document.writeln(b);
    }
    else {
        document.writeln(a);
    }
}

let a = 1;
let b = 3;
if ( a > 0 && b > 0) {
    document.writeln(b);
}
else if( a > 0 && b <= 0) {
    document.writeln(a);
}
*/

/*
Switch statement

switch(expression) {
  case x:
        // code block
        break;
    case y:
        // code block
        break;
    case z:
        // code block
        break;
    default:
        // code block
}

switch(expression) {
  case x:
        // code block
        break;
    case y:
        // code block
        break;
    case z:
        // code block
        break;
    default:
        // code block
}

let x = 2
if (x == 1) {
        // code block
        document.write("1");
} else if (x == 2) {
        // code block
        document.write("2");
} else {
    document.write("3");
}
*/

let h = window.prompt("Please enter 1 or 2.");

h = parseInt(h);

switch(h) {
    case 1:
        document.write("You entered 1");
        break;
    case 2:
        document.write("You entered 2");
        break;
    default:
        document.write("You entered sometthing other than 1 or 2");
}

/*
The ternary operator

x = condition ? expression1 : expression2

let a = 1;
let b = 2;
let c = a > b ? a : b;

*/