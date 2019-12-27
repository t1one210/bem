function Select(event) {
  var files = event.target.files;
  handleFile(files);
}

function drop(event) {
  event.preventDefault();
  var files = event.dataTransfer.files; 
  handleFile(files);
}

  document.getElementById('fils').addEventListener('change', Select, false);
  document.getElementById('target').addEventListener('drop', drop, false);

function handleFile(files){
  var len = files.length;
  var sum = document.getElementById('sortable').getElementsByTagName('li');
  if (len > 12){
    alert('Максимум 11 картинок');
  }
  else {
    
    let x = 13 - sum.length - len;
    if (x > 0){
      for (var i = 0; i < len; i++) {
        console.log('Add file', i);
        if (!files[i].type.match('image.*')) {
          continue;
      }
  
      var reader = new FileReader();
        reader.onload = (function(theFile) {
          return function(e) {
            let img = document.createElement('img');
            img.src = reader.result;
            var li = document.createElement('li');
            li.innerHTML = ['<img class="thumb" src="', e.target.result,
            '" title="', escape(theFile.name), '"/>'].join('');
            document.getElementById('list').prepend(li);
            sum.length;
            move(files);                
            };
        })(files[i]);  
        reader.readAsDataURL(files[i]);
      } 
    }
  }
}

function allowDrop(event) {
  event.preventDefault();
}

$(document).ready(function(){
  $("#list").sortable();
});

function move(files) {
  var elem = document.getElementById("greenBar");
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {    
    for (let i = 0; i <= files.length; i++){
        if (width >= 100) {
          clearInterval(id);
        } else{
            width++;
            //elem.style.width = (files.length) / files.length * 100 + '%'; 
            elem.style.width = width + '%'; 
            elem.innerHTML = Math.round(files.length / files.length * 100) + '%';
          }
    }       
  }  
} 