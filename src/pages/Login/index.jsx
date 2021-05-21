import React from 'react'
import './style.css';
import { LogFailure, LogSuccess } from 'reduxx/Log/LogActions';
import { useDispatch } from 'react-redux' 
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'



const Login = () => {

  const [identifier, setIdentifier] = React.useState('');
  const [password, setGivenPassword] = React.useState('');

  const dispatch = useDispatch()
  const history = useHistory()


  const data = {
    identifier: identifier,
    password: password,
  };


const handleFetch = (e) => {
  e.preventDefault();

     fetch("http://localhost:1337/auth/local", {
       method: 'POST',
       headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
     })
     .then ((response) => response.json())
     .then ((data) => {
        if (data.status === 'error') {
          dispatch(LogFailure(data.message, false))
        } else {
          console.log(data)
          dispatch(LogSuccess(data, true));
          Cookies.set('token', data.jwt );
          Cookies.set('id', data.user.id );
          history.push('/')
        }
     })
     .catch((data) => alert('error: Bad request'));
  }


  return (
        <div className="form">
          <form onSubmit={handleFetch}>
            <h1>Login</h1>
            <h2>Identifier (Username or Email)</h2>
            <input type="text" value={identifier} name="identifier" onChange={(e)=>setIdentifier(e.target.value)} required />
            <h2>Password</h2>
            <input type="password" value={password} onChange={(e)=>setGivenPassword(e.target.value)} name="password"/>
            <input type="submit" value="Envoyer"/>
          </form>
        </div>
  )
}

export default Login;