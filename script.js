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

    
    if(userEmailValue === "") {
        err.textContent = "Whoops! It looks like you forgot to add your email" 
    } else if(!pattern) {
        err.textContent = "Please provide a valid email address!"
        userEmail.classList.add("err")
        return false;
    } else {
        err.style.display = "none";
        userEmail.classList.remove("err");
        alert("Success!");
    }

    // Reset form when user submits valid data data
    userForm.reset();
})