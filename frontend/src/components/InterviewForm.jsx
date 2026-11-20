import {useState} from 'react'

function InterviewForm ({applicationId, onAddInterview}){
    const [date, setDate] = useState("")
    const [type, setType] = useState("")
    const [notes, setNotes] = useState("")

  function handleSubmit(submitEvent){
    submitEvent.preventDefault()
    const contactObj = {application_id : applicationId, date, type : type || null, notes : notes || null}
    onAddInterview(contactObj)
    setDate(""), setType(""), setNotes("")
    }
    
    return(
    <form className="form" onSubmit={handleSubmit}>
    <label>Date </label>
    <input type="date" required value={date} onChange = {event => setDate(event.target.value)} />
    <label>Type </label>
    <input type="text" value={type} onChange = {event => setType(event.target.value)}/>
    <label>Notes </label>
    <input type="text" value={notes} onChange = {event => setNotes(event.target.value)}/>
    <button type ="submit" >Interview Hinzufügen </button>
    </form>
    )
}

export default InterviewForm