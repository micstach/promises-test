
console.log('promises test');

var _ = require('lodash');
var Promises = require('bluebird');

var promises = [];

var names = ["michal", "dominika"]; 

_.forEach(names, (name)=>{
    //Create a new promise for each image processing
    var promise = new Promise((resolve, reject)=>{
      if (name === "michal") {
        resolve('a boy');
      } else if (name === "dominika") {
        resolve('a girl');
      } else {
        reject('undefined')
      }
    });

    promises.push(promise);
});

function countItemsPromise(items) {
  return new Promise((resolve, reject)=>{
    resolve(items.length);
  });
}


var ret = Promise.all(promises);

//Call the convertImgs method and pass the image files as its argument
ret.then((stringArray)=>{
    console.log('Processing done');
    return countItemsPromise(stringArray);
  })
  .then((number) => {
    console.log('Counted: ' + number);
  })
  .catch((someThing) => {
    console.log('error - ' + someThing);
  });

console.log('end of test.js');