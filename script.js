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
		
	}else if(localStorage.length==2){
		localStorage.remove("username")
		localStorage.remove("password");		
	}
	if (localStorage.length==2) {
		existingBtn.hidden=false;
	}else{
		existingBtn.hidden=true;
	}
	alert("Logged in as");
}