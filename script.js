const userForm = document.querySelector("#myForm");
const userEmail = document.querySelector("#email")
const err = document.querySelector("#errMsg");

userForm.addEventListener("submit", function(e){
    e.preventDefault();
   
    // Grab user input
    const userEmailValue = userEmail.value.trim();

    // Regular expression
    const regex = /^([^\s\@])+\@(([^\s\@\.])+\.)+([^\s\.]{2,})+$/gmi;
    const pattern = regex.test(userEmailValue);

    // Check to see if user input matches regex
    if(!pattern) {

        // Add err class
        userEmail.classList.add("err")
       
        // Display errMsg
        err.style.display = "block";
        return false;
    } else {
          // Remove errMsg
          err.style.display = "none";

           // Remove err class
        userEmail.classList.remove("err");

        alert("Success!");
    }

    // Reset form when user submits valid data data
    userForm.reset();
})