function linkFunction() {
    var x = document.getElementById("frm1");
    var text = ' <div class="video-container"> ' + "";
    var i
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + '  '  + ' </div>  <style> .video-container { position:relative; padding-bottom:56.25%; padding-top:30px; height:0; overflow:hidden; } .video-container iframe, .video-container object, .video-container embed { position:absolute; top:0; left:0; width:100%; height:100%; }  </style>';
    }
    document.getElementById("codePrint").innerHTML = text;
   }

   // Setup the variables
var textarea = document.getElementById("codePrint");
var answer  = document.getElementById("copyAnswer");
var copy    = document.getElementById("copyBlock");
copy.addEventListener('click', function(e) {
event.preventDefault();
// Select some text (you could also create a range)
textarea.select();

// Use try & catch for unsupported browser
try {

		// The important part (copy selected text)
		var ok = document.execCommand('copy');

		if (ok) answer.innerHTML = 'Copied!';
		else    answer.innerHTML = 'Unable to copy!';
} catch (err) {
		answer.innerHTML = 'Unsupported Browser!';
}
});

// 
var acc = document.getElementsByClassName("accordion");
          var i;
          
          for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
              this.classList.toggle("active");
              var panel = this.nextElementSibling;
              if (panel.style.maxHeight){
                panel.style.maxHeight = null;
              } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
              }
            });
          }