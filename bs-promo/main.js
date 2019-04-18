console.log('hi')

function myFunction() {
  var x = document.getElementById("frm1");
  var text = "";
  var i
  for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value + '';
  }
  document.getElementById("demo").innerHTML = text;
}

//

function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('#top')
              .attr('src', e.target.result)
              .width(600)
              .height(600);
      };

      reader.readAsDataURL(input.files[0]);
  }
}
//

var canvas = document.getElementById('my-node');