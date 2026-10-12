const form = document.getElementById("application-form")
let applications =[]
form.addEventListener("submit", function (event){
    event.preventDefault()
    const company = document.getElementById("company").value
    const position = document.getElementById("position").value
    const status = document.getElementById("status").value
    const id = Date.now()
    const applicationObj = {id,company, position, status}
    applications.push(applicationObj)
    render()
    form.reset()
})
function render() {
    const apList = document.getElementById("application-list")
    apList.innerHTML = ""
    for (const application  of applications) {
        const item = document.createElement("li")
        const deleteButton = document.createElement("button");
        item.textContent = application.company + " – " + application.position + " – " + application.status
        deleteButton.textContent = "Löschen"
        deleteButton.addEventListener("click", function (deleteEvent){
            applications = applications.filter( a => a.id !== application.id);
            render()
        }
        )
        item.appendChild(deleteButton)
        apList.appendChild(item)
    }
}