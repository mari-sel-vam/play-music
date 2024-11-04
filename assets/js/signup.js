const otpgen = () =>{
    const otp = Math.random() * 9000
    return Math.floor(1000 + otp)
}

const storedUser = localStorage.getItem('user')

    let userData = {} 
    if (storedUser){
        userData = JSON.parse(storedUser)
    } else {
        console.log('User data not found');
        
    }

function handleUserData(){

    let userName = document.getElementById('userName').value
    let email = document.getElementById('emailId').value
    let DOB = document.getElementById('dob').value
    let pass = document.getElementById('password').value
    let repass = document.getElementById('repassword').value
    let newOTP = otpgen()

    if ( userName != '' && email != '' && DOB != '' && pass != '' && repass != '' ) {

        const userObj = {
            'userName':'',
            'emailId' :'',
            'dob':'',
            'password': '',
            'repassword':'',
            'otp' : ''
        }
    
        userObj.userName = userName
        userObj.emailId = email
        userObj.dob = DOB
        userObj.password = pass
        userObj.repassword = repass
        userObj.otp = newOTP
    
        console.log(userObj)
        console.log('otp is', userObj.otp);
    
        localStorage.setItem('user' ,JSON.stringify(userObj))
        alert(`Your OTP is ${userObj.otp}`)
        document.getElementById('signupform').action = './otp.html'

    } else {
        alert('Please Fill Your Details...!')
    }

    
}

function handleCancelBtn() {
    // document.getElementById('signupform').action = './index.html'
    window.history.back()
}

function userSubmit() {
    const storedUser = localStorage.getItem('user')

    let userData = {} 
    if (storedUser){
        userData = JSON.parse(storedUser)
    } else {
        console.log('User data not found');
        
    }

    let otpinput = document.getElementById('otpinput').value
    console.log(userData.otp);
    console.log(otpinput);

    if( userData.otp == otpinput) {
        alert(`welcome ${userData.userName}`)
        document.getElementById('otpform').action = './welcomeMsg.html'
    } else {
        alert('Please Enter Correct OTP !')
    }

}


function fpotp() {
    const storedUser = localStorage.getItem('user')
    let userData = {} 
    if (storedUser){
        userData = JSON.parse(storedUser)
    } else {
        console.log('User data not found');
        
    }
    const email = document.getElementById('emailId').value
    if (email != '') {

        let newOTP = otpgen()
        
        userData.otp = newOTP

        console.log(userData)
        
        localStorage.setItem('user' ,JSON.stringify(userData))
        alert(`Your OTP is ${userData.otp}`)
        document.getElementById('verifyForm').action = './fpotp.html'
    } else {
        alert('Please Enter Your EmailId...!')
    }

}

function fpotpverify() {
    const storedUser = localStorage.getItem('user')
    let userData = {} 
    if (storedUser){
        userData = JSON.parse(storedUser)
    } else {
        console.log('User data not found');
        
    }

    const otpinput = document.getElementById('otpinput').value

    if ( otpinput != userData.otp ) {
        alert('Please Enter Correct OTP...!')
    } else {
        alert('OTP Verified successfully...!')
        document.getElementById('fpotpform').action = './newpassword.html'
    }
}


function handleNewPass() {
    const storedUser = localStorage.getItem('user')
    let userData = {} 
    if (storedUser){
        userData = JSON.parse(storedUser)
    } else {
        console.log('User data not found');        
    }

    let newpassword = document.getElementById('newpassword').value
    let renewpassword = document.getElementById('renewpassword').value

    if ( newpassword != '' && renewpassword != '' ) {
        
        userData.password = newpassword
        userData.repassword = renewpassword

        localStorage.setItem('user' ,JSON.stringify(userData))
        document.getElementById('newPassForm').action = './welcomeMsg.html'

    } else {
        alert('Please Set a New Password...!')
    }
}
