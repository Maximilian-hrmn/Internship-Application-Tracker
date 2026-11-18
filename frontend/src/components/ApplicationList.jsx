import ContactForm from './ContactForm.jsx'

function ApplicationList ({applications, statusLabels, onDelete, onStatusChange, onAddContact, onDeleteContact}){
    return(
        <ul>{applications.map((application) => <li key = 
        {application.id}> 
        {application.company},
        {application.position} 
        {application.deadline && <span>, Deadline: {new Date(application.deadline).toLocaleDateString("de-DE")} </span>}
        {application.followUp && <span>, Follow-up-Datum: {new Date(application.followUp).toLocaleDateString("de-DE")} </span>}
        {application.notes && <span>, Notizen: {application.notes}</span>}
        {<select value={application.status} onChange = {event => onStatusChange(application.id, event.target.value)}>
        <option value="applied">{statusLabels.applied}</option> 
        <option value="interview">{statusLabels.interview}</option> 
        <option value="rejected">{statusLabels.rejected}</option> 
        <option value="accepted">{statusLabels.accepted}</option> 
        </select>}
        <ul>{application.contacts.map((contact) => <li key ={contact.id}>
            {contact.name}
            {contact.role  && <span>, Rolle: {contact.role} </span>}
            {contact.email  && <span>, E-mail: {contact.email} </span>}
            <button onClick={() => onDeleteContact(contact.id)}> Kontakt Löschen</button>
            </li>)  }
        </ul>
        <ContactForm applicationId={application.id} onAddContact={onAddContact}/>
        <button onClick={() => onDelete(application.id)}> Löschen</button> </li>)}</ul>
    )
}

export default ApplicationList