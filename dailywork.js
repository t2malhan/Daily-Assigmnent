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
