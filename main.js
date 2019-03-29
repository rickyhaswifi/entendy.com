function linkFunction() {
    var x = document.getElementById("frm1");
    var text = "";
    var i
    for (i = 0; i < x.length ;i++) {
            text += x.elements[i].value + "?sub_confirmation=1";
    }
    document.getElementById("linkPrint").innerHTML = text;
   }

   // Setup the variables
var textarea = document.getElementById("linkPrint");
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