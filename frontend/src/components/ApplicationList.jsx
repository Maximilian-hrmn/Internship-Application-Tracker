function ApplicationList ({applications, statusLabels, onDelete}){
    return(
        <ul>{applications.map((application) => <li key = {application.id}> {application.company},
        {application.position}, {statusLabels[application.status]} {application.deadline && <span>, Deadline: {application.deadline}</span>}
        <button onClick={() => onDelete(application.id)}>Löschen</button> </li>)}</ul>
    )
}

export default ApplicationList