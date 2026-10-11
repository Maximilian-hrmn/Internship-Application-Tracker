const form = document.getElementById("application-form")
const applications =[]
form.addEventListener("submit", function (event){
    event.preventDefault()
    console.log("Formular Abgeschickt")
    const company = document.getElementById("company").value
    const position = document.getElementById("position").value
    const status = document.getElementById("status").value
    const applicationObj = { company, position, status}
    applications.push(applicationObj)
    console.log(applications)
})
