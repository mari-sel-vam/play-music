const storedUser = localStorage.getItem('user')
let userData = {} 
if (storedUser){
    userData = JSON.parse(storedUser)
} else {
    console.log('User data not found');
    
}
console.log(userData);


const handleLogin = () => {

    let email = document.getElementById('email').value
    let pass = document.getElementById('pass').value

    console.log(email);
    console.log(pass);

    if( email == '' && pass == '' ) {
        alert('Please Enter your EmailID and Password')
    } else {
        if(email == userData.emailId && pass == userData.password) {
            document.getElementById('loginForm').action = './home.html'
            alert('You are Logged In Successfully...')
        } else {
            alert('EmaiId or Password are incorrect. please enter correct cretentials !');    
        }
    }
    
}
