import './App.css'
import {useState} from 'react'

function App() {
  const [applications, setApplications] = useState([ 
  {id: 1, company: "Apple", position: "Vollzeit", status:"applied"},
  {id: 2, company: "BMW", position: "Teilzeit", status:"interview"},
  {id: 3, company: "Microsoft", position: "Werkstudent", status:"rejected"}
  ])
  const [company, setCompany] = useState("")
  const [position, setPosition] = useState("")
  const [status, setStatus] = useState("applied")

  function handleSubmit(submitEvent){
    submitEvent.preventDefault()
    const id = Date.now()
    const applicationObj = {id, company, position, status}
    setApplications([...applications, applicationObj])
    setCompany(""), setPosition(""), setStatus("applied")
  }

  function handleDelete(id){
    setApplications(applications.filter( a => a.id !== id))
  }

  return(
  <div>
  <h1>Internship Application Tracker</h1>
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
  <ul>{applications.map((application) => <li key = {application.id}> {application.company}, {application.position}, {application.status}
    <button onClick={() => handleDelete(application.id)}>Löschen</button> </li>)}</ul>
  </div>
)
}
export default App