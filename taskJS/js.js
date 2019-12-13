

function handleFileSelect(event) {
    var files = event.target.files;
    var len = files.length; 
    for (var i = 0; i < len; i++) {

      if (!files[i].type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      reader.onloadend = function() {
        let img = document.createElement('img')
        img.src = reader.result
        document.getElementById('list').appendChild(img)
      }
      reader.onload = (function(theFile) {
        return function(e) {
          var li = document.createElement('li');
          li.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').prepend(li);
        };
        
      })(files[i]);
      
      reader.readAsDataURL(files[i]);
    }
}
  window.onload=function(){
  document.getElementById('fils').addEventListener('change', handleFileSelect, false);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();

  var files = event.dataTransfer.files; 
  var len = files.length; 
    for (var i = 0; i < len; i++) {

      var reader = new FileReader();
      reader.onload = (function(File) {
        return function(e) {
          var li = document.createElement('li');
          li.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(File.name), '"/>'].join('');
          document.getElementById('list').prepend(li);
      };
        
      })(files[i]);

      reader.readAsDataURL(files[i]);
    }    
}

  $(document).ready(function(){
    $("#list").sortable();
 });
 
var promise = new Promise(function(resolve,reject){
  var n = function () {
    var sum;
    sum++;
    resolve (sum);
    //console.log (sum);
  };

  () => {
    for (let i = 0; i< 3; i++)
    i = 8;
    reject(new Error ("error"));
    //console.log (i);
  }
})

promise.then(function(value) {
  console.log(value);
})
//console.log(promise.then(1))
console.log(error => promise.catch('Error: ' + error))

var promise1 = new Promise (function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, 300);

  setTimeout(function (){
    resolve('nyobo nyobo');
  },1);
});

promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise]

var array = [0,1,2,3];
var vvod = parseInt(prompt('vvedite znachenie', ''));
console.log(vvod);
console.log(array.includes(vvod));
  for (let i = 0; i<=array.length; i++){
    if (array.includes(vvod) == i || typeof isNaN(vvod)){
    switch (i){
      case 0:
        console.log('index = 0');
        break;
      case 1:
        console.log('index = 1')
        break;
      case 3:
        console.log('index = 4')
        break;
      default:
        console.log("isn't number or not found");
    }
  } 
} 

function greeting(name) {
  console.log('Hello ' + name);
}

function processUserInput(collback) {
  var name = prompt('Please enter your name.');
  collback(name);
}

processUserInput(greeting);




Array.prototype.partition = function(pred) {
  let passed = []
  let passed2 = []
  let failed = []
  for(let i = 0; i < this.length; i++) {
    if (pred(this[i])) {
      passed.push(this[i])
      passed2.push(this[i])
    } else {
     failed.push(this[i])
   }
  }
  return [ passed, failed, passed2 ]
}

console.log([1,2,3,4,56,7].partition (e => e <= 2));