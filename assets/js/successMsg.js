let userName = document.getElementById("userName");

const storedUser = localStorage.getItem("user");

let userData = {};
if (storedUser) {
  userData = JSON.parse(storedUser);
} else {
  console.log("User data not found");
}

userName.innerHTML = userData.userName

function handleSuccessPage() {
    document.getElementById('successform').action = './index.html'
}