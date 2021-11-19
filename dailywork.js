// Setimeout

function LevelTwo() {
    console.log("Inside Level Two!")
    setTimeout(
         function display(){ console.log('B'); }
       ,0);
 }
   
 function LevelOne() {
    LevelTwo()
 }
 
 function Levelthree() {
    console.log('3')
 }
 //   LevelOne()
//   Levelthree()


// Try,catch
let num = 1;
try {
//   num.toUpperCase();   
// }
catch(err) {
//     console.log('You cannot convert a number to upper case')
//    }


// Flatten
function flatten(unflatObject) {

    let result = {};
        for (const i in unflatObject) {
    if ((typeof unflatObject[i]) === 'object' && !Array.isArray(unflatObject[i])) {
          
          const temp = flatten(unflatObject[i]);
           for (const j in temp) {
          
 
     result[i + '.' + j] = temp[j];
           }
       }
    else {
           result[i] = unflatObject[i];
       }
   }
 //   return result;
//  }

var obj={

  car:"Bmw",

  tree:
  {
       coffee:"Tea",    
       fruit:{
          f1:"Mago",
     
   }


   
//assginment ques.

function Fre(str) {
    var frequency = {};
      for (var i=0; i<str.length;i++) {
       var character = str.charAt(i);
        if (frequency[character]) {
         frequency[character]++;
      } else {
         frequency[character] = 1;
      }
  }

  return frequency;
};
// console.log(Fre('calculator')

a=[3,5,2,1,6]

function sh (arr) {
  var max = Math.max.apply(null,arr)
  arr.splice(arr.indexOf(max), 1);
  console.log(Math.max.apply(null,arr))
}
// Console.log(sh(a))
