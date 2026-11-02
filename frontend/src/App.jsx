import './App.css'
import {useState, useEffect} from 'react'
import Header from './components/Header.jsx'
import ApplicationList from './components/ApplicationList.jsx'
import ApplicationForm from './components/ApplicationForm.jsx'
import {supabase} from './supabaseClient.js'

function App() {
  const [applications, setApplications] = useState([])
  useEffect (() => {
    async function loadApplications(){
      const {data, error} = await supabase.from("applications").select()
      if (error) {
        console.log(error)
        return
      }
      setApplications(data)
    }
    loadApplications()
  }, [])

    async function handleDelete(id){
        const {error} = await supabase.from("applications").delete().eq("id", id)
        if (error) {
        console.log(error)
        return
      }
      setApplications(applications.filter(a => a.id !== id))
  }

  async function handleAdd(application){
    const {data, error} = await supabase.from("applications").insert(application).select()
    if (error) {
        console.log(error)
        return
      }
    setApplications([...applications, data[0]]) 
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