var btn = document.getElementById("btn_one"); 
var text = document.getElementById("input_text");
// var i = 0;

btn.addEventListener('click', function(e) {
  e.preventDefault();
  // i++;
  // var target = document.getElementById("str_" + i);

  let newCom = document.createElement("div");
  newCom.classList.add("str_div");
  newCom.innerHTML = text.value;
  document.getElementById("win_com").appendChild(newCom);

  console.log(text.value); 
  if (text.value == '/clear') {
    window.location.reload();
    
  }
  document.getElementById('input_text').value = '';

});

