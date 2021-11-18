
function flatten(unflatObject) {

    let result = {};
    temp2=''
    for (const each_key in unflatObject) {
    if ((typeof unflatObject[each_key]) === 'object' && !Array.isArray(unflatObject[each_key])) {
          
          const temp = flatten(unflatObject[each_key]);
           for (const inner_key in temp) {
             
 
     result[each_key + '.' + inner_key] = temp[inner_key];
           }
       }
    else {
           result[each_key] = unflatObject[each_key];
       }
   }
   return result;
}

var obj={

  car:"Bmw",

  tree:
  {
       coffee:"Tea",        
       fruit:{
          f1:"Mago",
     
   }


 }
};
// console.log(flatten(obj))


arr=[3,5,2,1,6]

function sh (arr) {
  var max = Math.max.apply(null,arr)
  arr.splice(arr.indexOf(max), 1);
  console.log(Math.max.apply(null,arr))
}


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
