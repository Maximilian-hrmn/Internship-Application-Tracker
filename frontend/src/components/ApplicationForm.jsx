import {useState} from 'react'

function ApplicationForm ({onAdd}){
    const [company, setCompany] = useState("")
    const [position, setPosition] = useState("")
    const [status, setStatus] = useState("applied")
    const [deadline, setDeadline] = useState("")


  function handleSubmit(submitEvent){
    submitEvent.preventDefault()
    const applicationObj = {company, position, status, deadline: deadline || null }
    onAdd(applicationObj)
    setCompany(""), setPosition(""), setStatus("applied"), setDeadline("")
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
    <label htmlFor="deadline">Datum </label>
    <input type="date" id="deadline" value={deadline} onChange = {event => setDeadline(event.target.value)}/>
    <br/><br/>
    <button type ="submit" >Hinzufügen</button>
    </form>
    )
}

export default ApplicationForm