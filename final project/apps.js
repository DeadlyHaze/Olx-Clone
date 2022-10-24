function signup() {
    var a = document.getElementById('email').value
    var b = document.getElementById('name').value
    var c = document.getElementById('pass').value
    localStorage.setItem('email', a)
    localStorage.setItem('name', b)
    localStorage.setItem('pass', c)
    alert('User Registered Succesfully')
    location.href= 'login.html'
}


function login() {
    var d = document.getElementById('2name').value
    var e = document.getElementById('2pass').value
    var getname = localStorage.getItem('name')
    var getpass = localStorage.getItem('pass')
    
    if (d == getname && e == getpass) {
        alert('User Login Successfully')
        location.href = 'index.html'
    }
    else {
    alert('You Are Not Registered!')
    location.href = 'signup.html'
    }
}

function card1() {
    window.location.href="card1.html"
}
function card2() {
    window.location.href="card2.html"
}
function card3() {
    window.location.href="card3.html"
}
function card4() {
    window.location.href="card4.html"
}
function card5() {
    window.location.href="card5.html"
}
function card6() {
    window.location.href="card6.html"
}
function card7() {
    window.location.href="card7.html"
}
function card8() {
    window.location.href="card8.html"
}
function login1() {
    window.location.href="login.html"
}

