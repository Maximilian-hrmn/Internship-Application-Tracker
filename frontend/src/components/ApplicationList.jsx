import ContactForm from './ContactForm.jsx'
import InterviewForm from './InterviewForm.jsx'

function ApplicationList ({applications, statusLabels, onDelete, onStatusChange, onAddContact, onDeleteContact, onAddInterview,
     onDeleteInterview }){
    return(
        <ul className="application-list">{applications.map((application) => <li className="application-card" key = 
        {application.id}> 
        <h3>{application.company}</h3>
        <dl className="details">
        <dt>Beworbene Position: </dt><dd>{application.position}</dd>
        {application.deadline && <><dt>Deadline: </dt><dd>{new Date(application.deadline).toLocaleDateString("de-DE")}</dd></>}
        {application.followUp && <><dt>Follow-Up Deadline: </dt><dd>{new Date(application.followUp).toLocaleDateString("de-DE")}</dd></>}
        {application.notes && <><dt>Notizen: </dt><dd>{application.notes}</dd></>}
        <dt>Status: </dt><dd>{<select value={application.status} onChange = {event => onStatusChange(application.id, event.target.value)}>
        <option value="applied">{statusLabels.applied}</option> 
        <option value="interview">{statusLabels.interview}</option> 
        <option value="rejected">{statusLabels.rejected}</option> 
        <option value="accepted">{statusLabels.accepted}</option> 
        </select>}</dd>
        </dl>
        <h4>Kontakt Liste</h4>
        <ul>{application.contacts.map((contact) => <li key ={contact.id}>
            {contact.name}
            {contact.role  && <span>, Rolle: {contact.role} </span>}
            {contact.email  && <span>, E-mail: {contact.email} </span>}
            <button onClick={() => onDeleteContact(contact.id)}> Kontakt Löschen</button>
            </li>)  }
        </ul>
        <ContactForm applicationId={application.id} onAddContact={onAddContact}/>
        <h4>Interview Liste</h4>
        <ul>{application.interviews.map((interview) => <li key ={interview.id}>
            {interview.date && <span>, Date: {new Date(interview.date).toLocaleDateString("de-DE")}</span>}
            {interview.type  && <span>, Type: {interview.type} </span>}
            {interview.notes  && <span>, Notizen: {interview.notes} </span>}
            <button onClick={() => onDeleteInterview(interview.id)}> Interviewrunde Löschen</button>
            </li>)  }
        </ul>
        <InterviewForm applicationId={application.id} onAddInterview={onAddInterview}/>
        <br></br>
        <button onClick={() => onDelete(application.id)}> Löschen</button> </li>)}</ul>
    )
}

export default ApplicationList