
//Generate functions

function generate(){
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
      var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var numbers = "0123456789";
      var special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
      var lowercaseInput= document.getElementById("lowercase");
      var uppercaseInput = document.getElementById("uppercase");
      var specialInput = document.getElementById("special");
      var numbersInput = document.getElementById("numbers");
      var passlength =document.getElementById("text").value;

      //Check lowercase, uppercase, numbers, and/or special characters
      var userpassword = "";
      var passwordSet= "";
      if (lowercaseInput.checked) {
        passwordSet += lowercase;
      }
      if (uppercaseInput.checked) {
        passwordSet+= uppercase;
      }
      if (numbersInput.checked) {
        passwordSet+= numbers;
      }
      if (specialInput.checked) {
        passwordSet+= special;
      }

      //Loop to generate random password
      for (var i = 0; i < passlength; i++) {
        userpassword += passwordSet.charAt(Math.floor(Math.random() * passwordSet.length));
      }

      //Length restriction
      document.getElementById("password").value= userpassword;
      document.getElementById("length").innerHTML = ("Length(8-128): "+ document.getElementById("text").value);
      document.getElementById("text").oninput = function(){
        if (document.getElementById("text").value >7){
      document.getElementById("length").innerHTML = "length:" +document.getElementById("text").value;
      }
      else{
      document.getElementById("length").innerHTML="Length: 8";
      }
      }
}