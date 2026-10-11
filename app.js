const form = document.getElementById("application-form")
form.addEventListener("submit", function (event){
    event.preventDefault()
    console.log("Formular Abgeschickt")
    const company = document.getElementById("company").value
    const position = document.getElementById("position").value
    const status = document.getElementById("status").value
    console.log(company, position, status);
})
