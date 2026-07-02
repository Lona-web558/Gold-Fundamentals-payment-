//function showLogin

function showLogin(){
	document.getElementById("loginForm").style.display = "block";
	document.getElementById("signupForm").style.display = "none";
}
showLogin();

//function showSignup

function showSignup(){
	document.getElementById("loginForm").style.display = "none";
document.getElementById("signupForm").style.display = "block";
}

//function signup()

function signup(){
	let user = document.getElementById("signupUser").value;
	let pass = document.getElementById("signupPass").value;
	if (user === "" || pass === ""){
		window.alert("Details are empty. Fill out details first. ");
		return;
		}
		
		localStorage.setItem("Username", user);
		localStorage.setItem("Password", pass);
	
	window.alert("Account Created");
	
	showLogin();
}

function login(){
	let user = document.getElementById("loginUser").value;
let pass = document.getElementById("loginPass").value;


if (user === localStorage.getItem("Username") && pass === localStorage.getItem("Password") ) {
	
	
	document.getElementById("auth").style.display = "none";
	document.getElementById("dashboard").style.display = "block";
	
	loadBalance();
	
}else{
	window.alert("Invalid username or password.");
}
}

// Balance is stored in localStorage so it persists across logins.
// Defaults to 2500 the first time a user logs in.
function loadBalance(){
	let balance = localStorage.getItem("Balance");
	if (balance === null){
		balance = 2500;
		localStorage.setItem("Balance", balance);
	}
	document.getElementById("balance").innerText = "$" + Number(balance).toFixed(2);
}

function pay(){
	let recipient = document.getElementById("recipient").value;
	let amount = document.getElementById("amount").value;
	
	if (recipient === "" || amount === ""){
		window.alert("Fill out the details.");
		return;
	}
	
	amount = Number(amount);
	let balance = Number(localStorage.getItem("Balance"));
	
	if (amount <= 0){
		window.alert("Enter an amount greater than 0.");
		return;
	}
	
	if (amount > balance){
		window.alert("Insufficient funds.");
		return;
	}
	
	balance = balance - amount;
	localStorage.setItem("Balance", balance);
	document.getElementById("balance").innerText = "$" + balance.toFixed(2);
	
	document.getElementById("message").innerHTML =
"<div class='alert alert-success'>Fake payment of <b>$" +
amount +
"</b> sent to <b>" +
recipient +
"</b>.</div>";
	
	document.getElementById("recipient").value = "";
	document.getElementById("amount").value = "";
}


//function logout()


function logout(){
	
	document.getElementById("dashboard").style.display = "none";
	document.getElementById("auth").style.display = "block";
	
	document.getElementById("loginUser").value = "";
	document.getElementById("loginPass").value = "";
	
}
