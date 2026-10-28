import './App.css'
import {useState} from 'react'
import Header from './components/Header.jsx'
import ApplicationList from './components/ApplicationList.jsx'
import ApplicationForm from './components/ApplicationForm.jsx'

function App() {
  const [applications, setApplications] = useState([])

  function handleDelete(id){
    setApplications(applications.filter( a => a.id !== id))
  }

  function handleAdd(applicationObj){
    setApplications([...applications, applicationObj])
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
  <ApplicationForm onAdd={handleAdd}/>
  <ApplicationList applications={applications} statusLabels={statusLabels} onDelete={handleDelete}/>
  </div>
)
}
export default App