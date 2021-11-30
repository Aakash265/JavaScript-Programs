// 1. Ways to print in JS
// document.write("This is document write.");
// console.log("Hello World");
// alert("Hello");




// 2. Console API in JS
// console.log("Hello World", 10, "Another Log");
// console.warn("Warning");
// console.error("Error");




// 3. JS Variables
// What are Variables? - Containers to store data values

// var number1 = 26;
// var number2 = 34;
// console.log(number1 + number2);




// 4. Data types in JS
// var str1 = "This is a string";
// var str2 = 'This is also a string';
// var num1 = 259;
// var num2 = 26.5;
// var marks = {
//         Aakash: 98,
//         Aman: 94,
//         Ashu: 90.5
// }

// console.log(marks);

// var a = true;
// var b = false;
// console.log(a, b);

// var und = undefined;
// console.log(und);

// var n = null;
// console.log(n);

// At a very high level there are two types of data tytpes in JS.
// 1. Primitive - undefined, null, number, string, boolean, symbol
// 2. Reference - arrays and objects

// Arrays
//  var arr = [1,2,"Sky",4,5];
//  console.log(arr);




// 5. Operators in JS

// var a = 12;
// var b = 6;
// console.log("The value of a+b is ", a+b);
// console.log("The value of a-b is ", a-b);
// console.log("The value of a*b is ", a*b);
// console.log("The value of a/b is ", a/b);

// var c = b;
// console.log(c);

// Comparison Operators
// var x = 3;
// var y = 5;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators

// console.log(true && true);
// console.log(true && false);

// console.log(true || false);
// console.log(false || false);

// console.log(!true);
// console.log(!false);




// 6. Functions in JS

// function avg (a, b)
// {
//         return (a+b)/2;
// }

// c1 = avg(2, 4);
// c2 = avg(12, 18);
// console.log(c1, c2);




// 7. Conditionals in JS

// var age = 2;
// if (age > 8)
// {
//         console.log("You are not a kid.");
// }
// else
// {
//         console.log("You are a kid.");
// }

// If-else ladder

// var age = 21;
//  if (age <= 18)
//  {
//          console.log("You are a kid.")
//  }
//  else if (age >= 18 && age < 60)
//  {
//          console.log("You are an adult.")
//  }
//  else
//  {
//          console.log("You are old.");
//  }




// 8. Loops in JS

// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);

// for loop

// for (var i = 0; i < arr.length; i++)
// {
//         console.log(arr[i]);
// }

// forEach loop

// arr.forEach(function(element)
// {
//         console.log(element);
// })

// while loop

// let j = 2;

// while (j < arr.length)
// {
//         console.log(arr[j]);
//         j++;
// }

// do-while Loop

// do {
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);




// 9. Break and Continue

// var arr = [1, 2, 3, 4, 5, 6, 7];

// for (var i = 0; i < arr.length; i++)
// {
//         if (i == 2)
//         {
//         //        break;
//                 continue;
//         }
//         console.log(arr[i]);
// }




// 10. Array methods

// let myArr = ["Aakash", "Sky", 26, 5, null, true];

// console.log(myArr, myArr.length);
// myArr.pop();
// console.log(myArr);

// myArr.shift()
// myArr.unshift();
// console.log(myArr);

// const newLen = myArr.unshift("Oraayan");
// console.log(newLen);
// console.log(myArr);


// x = [5, 2, 56, 26, 18, 1, 7];
// x.sort();
// console.log(x);




// 11. String methods

// let str = "My name is Aakash";
// // console.log(str.length);
// console.log(str.indexOf("Aakash"));
// console.log(str.lastIndexOf("Aakash"));

// console.log(str.slice(11,17));
// console.log(str.replace("Aakash", "Oraayan"));




// 12. Dates in JS

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());




// 13. DOM in JS

// let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// // elemClass[0].style.background = "lightgreen";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");

// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// tn = document.getElementsByTagName('button');
// console.log(tn);

// tn = document.getElementsByTagName('div');
// console.log(tn);

// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created paragraph.";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold.";
// tn[0].replaceChild(createdElement2, createdElement);

// removeChild(element); --> removes an element.

// Selecting using query
// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);




// 14. Events in JS

function clicked()
{
    console.log("The button was clicked.");
}

// window.onload = function()
// {
//     console.log("The document was loaded.");
// }

// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked. </b>"
//     console.log("Clicked on container.");
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("On mouse over.");
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("On mouse out.");
// })


// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("On mouse up.");
// })
// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Clicked... </b>"
//     console.log("On mouse down.");
// })




// 15. Arrow functions

// function sum(a,b)
// {
//     return a+b;
// }

// sum = (a,b) => {
//     return a+b;
// }




// 16. Set-Timeout and Set-Interval

// logkaro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b> SetTimeout fired.</b>"
//     console.log("I am your log");
// }

// setTimeout(logkaro, 3000);

// // setInterval(logkaro, 2000);

// // Use of clear Interval
// clr = setInterval(logkaro, 2200);




// 17. Local Storage in JS

// localStorage.setItem('name', 'Aakash');
// console.log(localStorage);

// val = localStorage.getItem('name');
// console.log(val)
// localStorage.removeItem('name');
// localStorage.clear();



// 18. JSON

// JSON does not support single quote
// obj = {name: "Aakash", lenght: 1, nickname: {aka: "Oraayan"}};
// jso = JSON.stringify(obj);
// console.log(jso);

// parsed = JSON.parse(`{"name":"Aakash","lenght":1,"nickname":{"aka":"Oraayan"}}`);
// console.log(parsed);




// 19. Backticks - Template Literals

// a = 26;
// console.log(`My fav no is ${a}.`);