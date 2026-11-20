import {useState} from 'react'

function ApplicationForm ({onAdd}){
    const [company, setCompany] = useState("")
    const [position, setPosition] = useState("")
    const [status, setStatus] = useState("applied")
    const [deadline, setDeadline] = useState("")
    const [followUp, setFollowUp] = useState("")
    const [notes, setNotes] = useState("")


  function handleSubmit(submitEvent){
    submitEvent.preventDefault()
    const applicationObj = {company, position, status, deadline: deadline || null, followUp: followUp || null, notes: notes || null}
    onAdd(applicationObj)
    setCompany(""), setPosition(""), setStatus("applied"), setDeadline(""), setFollowUp(""), setNotes("")
    }
    
    return(
    <form onSubmit={handleSubmit}>
    <dl className="form-grid">
    <dt><label htmlFor="company">Firma:</label></dt>
    <dd><input type="text" id="company" required value={company} onChange = {event => setCompany(event.target.value)} /></dd>
    <dt><label htmlFor="position">Stelle:</label></dt>
    <dd><input type="text" id="position" required value={position} onChange = {event => setPosition(event.target.value)}/></dd>
    <dt><label htmlFor="status">Status:</label></dt>
    <dd><select id="status" value={status} onChange = {event => setStatus(event.target.value)}>
    <option value="applied">Beworben</option>
    <option value="interview">Interview</option>
    <option value="rejected">Abgesagt</option>
    <option value="accepted">Zusage</option>
    </select></dd>
    <dt><label htmlFor="deadline">Datum (optional):</label></dt>
    <dd><input type="date" id="deadline" value={deadline} onChange = {event => setDeadline(event.target.value)}/></dd>
    <dt><label htmlFor="followUp">Follow-Up Datum (optional):</label></dt>
    <dd><input type="date" id="followUp" value={followUp} onChange = {event => setFollowUp(event.target.value)}/></dd>
    <dt><label htmlFor="notes">Notizen (optional):</label></dt>
    <dd><textarea id="notes" value={notes} onChange = {event => setNotes(event.target.value)}/></dd>
    <button type ="submit" >Hinzufügen</button>
    </dl>
    </form>
    )
}

export default ApplicationForm