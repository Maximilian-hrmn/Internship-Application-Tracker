import './App.css'
import {useState, useEffect} from 'react'
import Header from './components/Header.jsx'
import ApplicationList from './components/ApplicationList.jsx'
import ApplicationForm from './components/ApplicationForm.jsx'
import {supabase} from './supabaseClient.js'
import Auth from './components/Auth.jsx'

function App() {
  const [applications, setApplications] = useState([])
  const [session, setSession] = useState(null)


  useEffect (() => {
  supabase.auth.getSession().then(({data})=>{
  setSession(data.session)})
  const { data } = supabase.auth.onAuthStateChange((_event, session) => {
  setSession(session)
  })
  return () => data.subscription.unsubscribe()
  }, [])


  useEffect(() => {
  if (!session) {
    return
}
  async function loadApplications(){
    const {data, error} = await supabase.from("applications").select("*, contacts(*), interviews(*)")
    if (error) {
      console.log(error)
      return
    }
    setApplications(data)
    }
    loadApplications()
  }, [session])


    async function handleDelete(id){
        const {error} = await supabase.from("applications").delete().eq("id", id)
        if (error) {
        console.log(error)
        return
      }
      setApplications(applications.filter(application => application.id !== id))
  }


  async function handleAdd(application){
    const {data, error} = await supabase.from("applications").insert(application).select("*, contacts(*), interviews(*)")
    if (error) {
        console.log(error)
        return
      }
    setApplications([...applications, data[0]]) 
  }


  async function handleLogOut(){
    const {data, error} = await supabase.auth.signOut()
    if (error) {
        console.log(error)
        return
      }
    setApplications([])
    console.log(data)
  }

  async function handleStatusChange(id, newStatus){
    const {data, error} = await supabase.from("applications").update({status: newStatus}).eq("id", id).select("*, contacts(*), interviews(*)")
    if (error) {
    console.log(error)
    return
    }
    setApplications(applications.map(application => application.id === id ? data[0] : application)) 
  }

    async function handleAddContact(contact){
    const {data, error} = await supabase.from("contacts").insert(contact).select()
    if (error) {
        console.log(error)
        return
      }
    setApplications(applications.map(application =>
      application.id === data[0].application_id ? { ...application, contacts: [...application.contacts, data[0]] } : application)
    )    
  }

  async function handleDeleteContact(contactId){
        const {error} = await supabase.from("contacts").delete().eq("id", contactId)
        if (error) {
        console.log(error)
        return
      }
      setApplications(applications.map(application => ({...application,
      contacts: application.contacts.filter(contact => contact.id !== contactId)}))
    )
  }

    async function handleAddInterview(interview){
    const {data, error} = await supabase.from("interviews").insert(interview).select()
    if (error) {
        console.log(error)
        return
      }
    setApplications(applications.map(application =>
      application.id === data[0].application_id ? { ...application, interviews: [...application.interviews, data[0]] } : application)
    )    
  }

  async function handleDeleteInterview(interviewId){
        const {error} = await supabase.from("interviews").delete().eq("id", interviewId)
        if (error) {
        console.log(error)
        return
      }
      setApplications(applications.map(application => ({...application,
      interviews: application.interviews.filter(interview => interview.id !== interviewId)}))
    )
  }

  //Nur damit das Ergebnis auch auf Deutsch ist, da der Code auf Englisch ist und die Website auf Deutsch
  const statusLabels = {
    applied : "Beworben",
    interview : "Interview",
    rejected : "Abgesagt",
    accepted : "Zusage"
  }

  if (!session) {
  return <Auth />
  }

  return(
  <div>
  <Header title = "Internship Application Tracker"/>
  <button className = "LogoutButton" onClick={handleLogOut}>Logout</button>
  <ApplicationForm onAdd={handleAdd}/>
  <ApplicationList 
  applications={applications} statusLabels={statusLabels} onDelete={handleDelete} onStatusChange={handleStatusChange} 
  onAddContact={handleAddContact} onDeleteContact={handleDeleteContact} onAddInterview={handleAddInterview} onDeleteInterview={handleDeleteInterview}/>
  </div>
)
}
export default App