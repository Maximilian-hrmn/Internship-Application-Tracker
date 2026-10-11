const form = document.getElementById("application-form")
const applications =[]
form.addEventListener("submit", function (event){
    event.preventDefault()
    const company = document.getElementById("company").value
    const position = document.getElementById("position").value
    const status = document.getElementById("status").value
    const applicationObj = { company, position, status}
    applications.push(applicationObj)
    render()
})
function render() {
    const apList = document.getElementById("application-list")
    apList.innerHTML = ""
    for (const application  of applications) {
        const item = document.createElement("li")
        item.textContent = application.company + " – " + application.position + " – " + application.status
        apList.appendChild(item)
    }
}
