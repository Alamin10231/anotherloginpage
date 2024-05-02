
function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var male = document.getElementById("male");
    var female = document.getElementById("female");
  
    if (name === '' || email === '' || password === '' || male === '' || female === '') {
      alert("Please fill out all fields.");
    } else {
      // Redirect to index.html
      window.location.href = "index.html";
    }
  }

      function validateForm() {
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const name = document.getElementById('name').value.trim();
        const male = document.getElementById('male').value.trim();
        const female = document.getElementById('female').value.trim();

        if (name === '' || email === '' || password === '' || male === ''|| female === ''  ) {
            alert("Please fill out all fields.");
            return false;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        if (!validateGender()) {
            return false;
        }

        return true;
    }
  

