var getUsername = prompt("hello! who are you? please provide your name: "); 

console.log(getUsername);

document.getElementById("red").innerText = getUsername;

// tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })