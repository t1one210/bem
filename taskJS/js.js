

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