//your JS code here. If required.
const username=document.getElementById("username");
const password=document.getElementById("password");
const remember=document.getElementById("checkbox");
const existingBtn=document.getElementById("existing");
const btn=document.getElementById("submit");
function handleSubmit() {
	this.event.preventDefault();
	if (remember.checked) {
		localStorage.setItem("username",username.value)
		localStorage.setItem("password",password.value);	
	}else {
		localStorage.removeItem("username")
		localStorage.removeItem("password");		
	}
	const alreadyUser=localStorage.getItem("username");
	const alreadyPassword=localStorage.getItem("password");
	console.log(alreadyPassword,alreadyUser,remember.checked)
if (alreadyPassword && alreadyUser) {
	existingBtn.hidden=false;
	
}else{
	existingBtn.hidden=true;
}
	
	alert("Logged in as");
}