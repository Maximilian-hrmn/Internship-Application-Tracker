import './App.css'
import {useState} from 'react'
import Header from './components/Header.jsx'
import ApplicationList from './components/ApplicationList.jsx'

function App() {
  const [applications, setApplications] = useState([])
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

  //Nur damit das Ergebnis auch auf Deutsch ist, da der Code auf Englisch ist und die Website auf Deutsch
  const statusLabels = {
    applied : "Beworben",
    interview : "Interview",
    rejected : "Abgesagt",
    accepted : "Zusage"
  }

  return(
  <div>
  <Header title = "Internship Application Tracker"/>
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
    <ApplicationList applications={applications} statusLabels={statusLabels} onDelete={handleDelete}/>
  </div>
)
}
export default App