
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


let object = {
    firstName: "Hello",
    lastName: "World",
    "car.name": "Duster",
    "car.price": 9.9,
    "car.mileage": 16.42,
    "car.seat.0.seater": 5,
    "car.seat.0.seatLength": 4360,
  };
  
  let unflattenObject = (data) => {
    let result = {};
    for (let inner_key in data) {
      let keys = inner_key.split(".");
      keys.reduce((acc, value, index) => {
        return (
          acc[value] ||
          (acc[value] = isNaN(Number(keys[index + 1]))
            ? keys.length - 1 === index
              ? data[inner_key]
              : {}
            : [])
        );
      }, result);
    }
    return result;
  };
  console.log(JSON.stringify(
    unflattenObject(object), null, 4));
