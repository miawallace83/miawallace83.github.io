alert('Estas a punto de entrar en un espacio Femininja');

document.addEventListener("DOMContentLoaded", () => {
	const name = document.querySelector("#name")
	const email = document.querySelector("#email")
	const submit = document.querySelector("#submit")	

	const checkInput = () => {

	if (name.value !== "" && email.value !== "") {
	submit.disabled = ""
}
}

email.addEventListener("change", checkInput) 

})
