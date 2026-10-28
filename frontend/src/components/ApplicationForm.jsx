import {useState} from 'react'

function ApplicationForm ({onAdd}){
    const [company, setCompany] = useState("")
    const [position, setPosition] = useState("")
    const [status, setStatus] = useState("applied")

  function handleSubmit(submitEvent){
    submitEvent.preventDefault()
    const id = Date.now()
    const applicationObj = {id, company, position, status}
    onAdd(applicationObj)
    setCompany(""), setPosition(""), setStatus("applied")
    }
    
    return(
    <form onSubmit={handleSubmit}>
    <label htmlFor="company">Firma </label>
    <input type="text" id="company" required value={company} onChange = {event => setCompany(event.target.value)} />
    <br/><br/>
    <label htmlFor="position">Stelle </label>
    <input type="text" id="position" required value={position} onChange = {event => setPosition(event.target.value)}/>
    <br/><br/>
    <label htmlFor="status">Status </label>
    <select id="status" value={status} onChange = {event => setStatus(event.target.value)}>
    <option value="applied">Beworben</option>
    <option value="interview">Interview</option>
    <option value="rejected">Abgesagt</option>
    <option value="accepted">Zusage</option>
    </select>
    <br/><br/>
    <button type ="submit" >Hinzufügen</button>
    </form>
    )
}

export default ApplicationForm