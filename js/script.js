function click_Btn(){
  var text = document.getElementById("input_text");
  console.log(text.value);
  var target = document.getElementById("target");
  target.innerHTML = text.value;
  // return false;
}


// var val = text.value;
