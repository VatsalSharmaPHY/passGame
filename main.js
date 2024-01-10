var input = document.getElementById("input");
var txt = document.getElementById('txt');
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    if (input.value == 'Password') {
        txt.innerHTML = 'The Password is Incorrect'
    } else if (input.value == 'Incorrect') {
        txt.innerHTML = 'Try Again'
    } else if (input.value == 'Again') {
        txt.innerHTML = 'Try Again later'
    } else if (input.value == 'Again later') {
        div_1.remove();
        div_2.remove();
        var x = document.createElement("IMG");
        x.setAttribute("src", "bruh.jpg");
        document.getElementById('img').appendChild(x);
    }
  }
});