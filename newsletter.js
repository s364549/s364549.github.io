const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const input = document.getElementById('email').value;

  if (!input.match(validRegex)){
    alert("Please enter a valid email address.");
  } else {
    window.location.href = "index.html";
    alert("Your mail has been registered to our mailing list.");
  }
});