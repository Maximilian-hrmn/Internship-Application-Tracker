import {useState} from 'react'

function ContactForm ({applicationId, onAddContact}){
    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const [email, setEmail] = useState("")

  function handleSubmit(submitEvent){
    submitEvent.preventDefault()
    const contactObj = {application_id : applicationId, name, role : role || null, email : email || null}
    onAddContact(contactObj)
    setName(""), setRole(""), setEmail("")
    }
    
    return(
    <form className="form" onSubmit={handleSubmit}>
    <label>Name </label>
    <input type="text" required value={name} onChange = {event => setName(event.target.value)} />
    <label>Role </label>
    <input type="text" value={role} onChange = {event => setRole(event.target.value)}/>
    <label>Email </label>
    <input type="email" value={email} onChange = {event => setEmail(event.target.value)}/>
    <button type ="submit" >Kontakt Hinzufügen </button>
    </form>
    )
}

export default ContactForm