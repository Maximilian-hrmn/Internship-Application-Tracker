import './App.css'
import {useState} from 'react'

function App() {
  const [applications, setApplications] = useState([ 
  {id: 1, company: "Apple", position: "Vollzeit", status:"beworben"},
  {id: 2, company: "BMW", position: "Teilzeit", status:"interview"},
  {id: 3, company: "Microsoft", position: "Werkstudent", status:"abgelehnt"}
  ])
  return(
  <div>
  <h1>Internship Application Tracker</h1>
  <ul>{applications.map((application) => <li key = {application.id}> {application.company}, {application.position}, {application.status} </li>)}
  </ul>
  </div>
)
}
export default App