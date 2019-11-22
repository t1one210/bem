

function handleFileSelect(event) {
    var files = event.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      reader.onloadend = function() {
        let img = document.createElement('img')
        img.src = reader.result
        document.getElementById('list').appendChild(img)
      }
      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').prepend(span);
        
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }
  window.onload=function(){
  document.getElementById('files').addEventListener('change', handleFileSelect, false);
}

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text/plain", event.currentTarget.id);
}

function drop(event) {
  event.preventDefault();
  var data = document.createElement('span');
  data.innerHTML = ['<img class="thumb" src="', event.target.result,
  '"/>'].join('');
  document.getElementById('list').prepend(data);
}

/*var target = document.getElementById("list")
  target.addEventListener("dragover", function(event) {
    event.preventDefault(); // отменяем действие по умолчанию
  }, false);
  target.addEventListener("drop", function(event) {
        // отменяем действие по умолчанию
    event.preventDefault();
    event.stopPropagation();
      var i = 0,
      files = event.dataTransfer.files,
      len = files.length;
      for (; i < len; i++) {
          console.log("Filename: " + files[i].name);
          console.log("Type: " + files[i].type);
          console.log("Size: " + files[i].size + " bytes");
      }
  }, false);*/

  $(document).ready(function(){
    $("#list").sortable();
 });
    
    
