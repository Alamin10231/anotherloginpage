const register = document.getElementById('Register');
const email = document.getElementById('email');
const password = document.getElementById('password');




//document.addEventListener("DOMContentLoaded",function(){
//register.addEventListener('click',function(){
//    if(email === ' ' || password === ' '){
//        alert("Login successfull")
//    }else{
//        window.location.href = 'index.html';
//    }
//})
// 
//
//})

document.addEventListener('DOMContentLoaded', function() {
    // Get the "Forget Password" link element
    const forgetPasswordLink = document.getElementById('forgetpassword');

    // Add click event listener to the "Forget Password" link
    forgetPasswordLink.addEventListener('click', function(event) {
        // Prevent the default behavior of the link (preventing navigation)
        event.preventDefault();
       
        // Display an alert message
        alert("Forgot your password? Please contact support for assistance.");
    });
});
// document.addEventListener('DOMContentLoaded',function() {
//    register.addEventListener('click',function(event){
//event.preventDefault();
//    })
//    register.addEventListener('click',function(){
//        if(password === '' || email === ''){
//            alert("please fillup it")
//        }else{
//            window.location.href = 'index.html';
//        }
//    })
//            
// });

function myfunction(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(email === '' || password === ''){
        alert("Please fill in both email and password fields.");
    } else {
        // Redirect to registration.html
        window.location.href = "registration.html";
    }
}
function myfunction(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(email === '@' || password === ''){
        alert("Please fill in both email and password fields.");
    }  
    else {
        // Redirect to registration.html
        window.location.href = "registration.html";
    }
}
//function myfunction(){
//    const email = document.getElementById('email').value;
//document.addEventListener('click',function(event){
//    event.preventDefault();
//    if(!email.includes('@')){
//        alert("please enter @ ")
//        
//    }  
//    else{
//        window.location.href = "registration.html";
//    }
//})
//
//}

