import {useState} from 'react'
import {supabase} from '../supabaseClient.js'

function Auth(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    async function handleSignUp(){
            const {data, error} = await supabase.auth.signUp({ email, password })
        if (error) {
            console.log(error)
            return
        }
        console.log(data)
    }

    async function handleLogin(submitEvent){
        submitEvent.preventDefault()
        const {error} = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
            console.log(error)
            return
        }
    }
    
    return(
    <form onSubmit={handleLogin}>
    <label htmlFor="email">E-Mail </label>
    <input type="email" id="email" value={email} onChange = {event => setEmail(event.target.value)}/>
    <br/><br/>
    <label htmlFor="password">Passwort</label>
    <input type="password" id="password" value={password} minLength={6} onChange = {event => setPassword(event.target.value)}/>
    <br/><br/>
    <button type ="submit">LogIn</button>
    <br/><br/>
    <button type ="button" onClick={handleSignUp}>Registrieren</button>
    </form>
    )
}
export default Auth