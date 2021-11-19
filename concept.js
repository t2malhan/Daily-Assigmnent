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



  function dis(some) {
       console.log(some)
  }
  function myFirst() {
     dis("1");
   }

// //    myFirst();

const person = {
     firstName: "tushar",
     lastName : "malhan",
     fullName : function() {
       return this.firstName + " " + this.lastName;
     }
   };
// // console.log(person.fullName())