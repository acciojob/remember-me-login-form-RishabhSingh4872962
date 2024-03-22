//your JS code here. If required.
const username=document.getElementById("username");
const password=document.getElementById("password");
const remember=document.getElementById("checkbox");
const existingBtn=document.getElementById("existing");
const btn=document.getElementById("submit");
function handleClick() {
	if (remember.checked) {
		localStorage.setItem("username",username.value)
		localStorage.setItem("password",password.value);
		
	}else {
		localStorage.removeItem("username")
		localStorage.removeItem("password");		
	}
	if (localStorage.length==2) {
		existingBtn.hidden=false;
	}else{
		existingBtn.hidden=true;
	}
	alert("Logged in as");
}