var apply_bttn = document.getElementById('apply-bttn');

apply_bttn.onclick = function () {
  var lib_txtbox = document.getElementById("library-textbox");
  var lib_name = document.getElementById('library-name');
  lib_name.textContent = "at " + lib_txtbox.value + " Library!";

  var type_selector = document.getElementById('type');
  var type_text1 = document.getElementById('type-text1');
  var type_text2 = document.getElementById('type-text2');

  if (type_selector.value == "first") {
    type_text1.textContent = "You joined in your first Book Bug session";
    type_text2.textContent = "We are so glad you could come!";
  } else {
    type_text1.textContent = "We are so glad that you came to Bookbug";
    type_text2.textContent = "Good luck on your next adventure!";
  }
}
