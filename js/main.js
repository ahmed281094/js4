
let registeredUsers ;
if(localStorage.getItem('userData') == null){
     registeredUsers = []
}else{
    registeredUsers = JSON.parse(localStorage.getItem('userData'))
}

function register() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    if (!isValidEmail(email)) {
        alert('Invalid email address');
        return;
    }

    
    if (isEmailRegistered(email)) {
        alert('Email already registered. Choose another email.');
        return;
    }

   
    registeredUsers.push({name, email, password });
    alert('Registration successful. You can now login.');

  
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';

    localStorage.setItem('userData',JSON.stringify(registeredUsers))
}

function login() {
   
    let loginEmail = document.getElementById('loginEmail').value;
    let loginPassword = document.getElementById('loginPassword').value;

    
    if (!isValidEmail(loginEmail)) {
        alert('Invalid email address');
        return;
    }

    
    let user = registeredUsers.find(u => u.email === loginEmail);
    if (!user) {
        alert('Email not registered. Please register first.');
        return;
    }

    
    if (user.password !== loginPassword) {
        alert('Incorrect password');
        return;
    }

    
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    document.getElementById('Name').innerText = user.name.value[0];
}

function logout() {
    
    document.getElementById('home').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function isValidEmail(email) {
    
    return /\S+@\S+\.\S+/.test(email);
}


function isEmailRegistered(email) {
    return registeredUsers.some(u => u.email === email);
}
function signIn(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
}