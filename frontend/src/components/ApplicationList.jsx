function ApplicationList ({applications, statusLabels, onDelete, onStatusChange}){
    return(
        <ul>{applications.map((application) => <li key = 
        {application.id}> 
        {application.company},
        {application.position} 
        {application.deadline && <span>, Deadline: {new Date(application.deadline).toLocaleDateString("de-DE")} </span>}
        {<select value={application.status} onChange = {event => onStatusChange(application.id, event.target.value)}>
        <option value="applied">{statusLabels.applied}</option> 
        <option value="interview">{statusLabels.interview}</option> 
        <option value="rejected">{statusLabels.rejected}</option> 
        <option value="accepted">{statusLabels.accepted}</option> 
        </select>}
        <button onClick={() => onDelete(application.id)}>Löschen</button> </li>)}</ul>
    )
}

export default ApplicationList