var target = document.getElementById("target");
var btn = document.getElementById("btn_one");

let arr = {};

btn.addEventListener('click', function(e) {
  e.preventDefault();
  var text = document.getElementById("input_text");
  // arr[0] = text.value;
  // console.log(arr); 
  target.innerHTML = text.value;
});

