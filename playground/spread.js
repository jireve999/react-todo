// function add (a,b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9,5];
// console.log(add(...toAdd));

// var groupA = ['Jen','Cory'];
// var groupB = ['Vikram'];
// //var final =[3,group]; //[ 3, [ 'Jen', 'Cory' ] ]
// var final = [...groupB,3,...groupA]; //[ 'Vikram', 3, 'Jen', 'Cory' ]
//
// console.log(final); //[ 3, 'Jen', 'Cory' ]


var person = ['Saji',25];
var personTwo = ['Jen',29];
//Hi Saji,you are 25
function greet(name,age){
  console.log('Hi ' + name + ', you are ' + age);
}
greet(...person);  //Hi Saji, you are 25
greet(...personTwo);  //Hi Jen, you are 29


var names = ['Mike','Ben'];
var final = ['saji',...names];
//Hi Saji
final.forEach(function(name){
  console.log('Hi ' + name);
});
