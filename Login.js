import {createRoot} from 'react-dom/client';
import './login.css';
import React,{useState} from 'react';
const Login = () => {
const [username,setUsername] = useState('')
const [password,setPassword] = useState('')
const [success,setSuccess] = useState('')
const [error,setError]= useState('')
const handleSubmit = (event) => {
event.preventDefault()
if(username===""||password==="") {
setError("Enter username and password")
setSuccess("")
}
else {
setSuccess("Login successful")
setError("")
}
}
return (
<>
<div className='form'>
<form onSubmit={handleSubmit}>
<div>
<br/>
<br/>
<label htmlFor="name">Username: </label>
<input
style={{ width: "10%"}}
type="text"
id="name"
value={username}
onChange={(event) => setUsername(event.target.value)}
placeholder="Enter Username"/>
</div>
<br/>
<div>
<label htmlFor="pwd">Password: </label>
<input
style={{ width: "10%"}}
type="password"
id="pwd"
value={password}
onChange={(event) => setPassword(event.target.value)}
placeholder="Enter Password"
/>
</div>
<br/>
<button type="submit">Login</button>
{success ? <div style={{ color: "green" }}>{success}</div> : null}
{error ? <div style={{ color: "red" }}>{error}</div> : null}
</form>
</div>
</>);};
const root = createRoot(document.getElementById('root'));
root.render(<Login />);
export default Login;

