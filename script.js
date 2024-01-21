let create = document.querySelector(".create-button");
let join = document.querySelector(".join-button");
let leave = document.querySelector(".leave");

function validateCreateForm(){
    var username = document.getElementById('username').value;
    var usernameError = document.getElementById('usernameError');

    // Check if the username is empty
    if (username.trim() === '') {
      usernameError.textContent = 'Username is required';
      return false; // Prevent form submission
    } else {
      usernameError.textContent = ''; // Clear any previous error message
      return true; // Allow form submission
    }
}
function validateJoinForm(){
    var username = document.getElementById('username').value;
    var usernameError = document.getElementById('usernameError');

    // Check if the username is empty
    if (username.trim() === '') {
      usernameError.textContent = 'Username is required';
      return false; // Prevent form submission
    } else {
      usernameError.textContent = ''; // Clear any previous error message
      return true; // Allow form submission
    }
}
create.addEventListener("click",()=>{
    if(validateCreateForm() === true){
       window.open("./index2.html");
       }
});

join.addEventListener("click",()=>{
    if(validateForm()=== true){
        window.open("./index2.html");
       }
    
});


leave.addEventListener("click",()=>{
     window.open("./index.html","");
    
});

