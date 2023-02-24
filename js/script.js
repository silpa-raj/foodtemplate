function validate() {
	let name = document.getElementById("a").value;
	let negx = /^[a-z A-Z]{2,15}$/;
	let mail = document.getElementById("b").value;
	let emrg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z]+\.[a-z A-Z]{2,4}$/;
	let msg = document.getElementById("c").value;

	if (name == "") {
		alert("Name field is mandatory");
		return false;
	} else if (!negx.test(name)) {
		alert("enter valid name");
		return false;
	} else if (mail == "") {
		alert("Email field is mandatory");
		return false;
	} else if (!emrg.test(mail)) {
		alert("enter valid mail id");
		return false;
	} else if (msg == "") {
		alert("message field is mandatory");
		return false;
	} else {
		return true;
	}
}
