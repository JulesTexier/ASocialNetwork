import React from 'react'
import { useHistory } from 'react-router-dom'
import './style.css';
import Cookies from 'js-cookie'
import { LogFailure, LogSuccess } from 'reduxx/Log/LogActions';
import { useDispatch } from 'react-redux' 


const Register = () => {
    const [username, setUsername] = React.useState('');
    const [email, setUserEmail] = React.useState('');
    const [password, setUserPassword] = React.useState('');
    const history = useHistory()
    const dispatch = useDispatch()
    
    const data = {
      username: username,
      email: email,
      password: password
    };

  const handleFetch = (e) => {
      e.preventDefault();

      fetch('http://localhost:1337/auth/local/register',{
        method:'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body : JSON.stringify(data)
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'error') {
          dispatch(LogFailure(data.message, false))
        } else {
          dispatch(LogSuccess(data, true));
          Cookies.set('token', data.jwt );
          Cookies.set('id', data.user.id );
          history.push("/");
        }
      })
      }

return (
        <div className="form">
          <form onSubmit={handleFetch}>
            <h1>Register</h1>
            <h2>Nom</h2>
            <input type="text" value={username} name="username" onChange={(e)=>setUsername(e.target.value)} required />
            <h2>Email</h2>
            <input type="email" value={email} onChange={(e)=>setUserEmail(e.target.value)} name="email" />
            <h2>Password</h2>
            <input type="password" value={password} onChange={(e)=>setUserPassword(e.target.value)} name="password"/>
            <input type="submit" value="Envoyer"/>
          </form>
        </div>
      )

}


export default Register;