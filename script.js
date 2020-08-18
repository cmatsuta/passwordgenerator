
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
      var isChecked=0;
      if (lowercaseInput.checked) {
        passwordSet += lowercase;
        isChecked=1;
      }
      if (uppercaseInput.checked) {
        passwordSet+= uppercase;
        isChecked=1;
      }
      if (numbersInput.checked) {
        passwordSet+= numbers;
        isChecked=1;
      }
      if (specialInput.checked) {
        passwordSet+= special;
        isChecked=1;
      }
      if (isChecked==1) {
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
    } else{
      confirm("select criteria!");
    }
}