
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

var promiseLast = new Promise((resolve, reject)=>{
  resolve('a developer');
});

promises.push(promiseLast);

var ret = Promise.all(promises);

//Call the convertImgs method and pass the image files as its argument
ret.then((stringArray)=>{
  console.log('Processing done');
  console.log(stringArray);
}).catch((someThing) => {
  console.log('error - ' + someThing);
});

