import React from 'react';
import Cookies from 'js-cookie'

      //1/ formulaire
      //2/ on submit (nouveau fetch)
      //3/ dans body (mettre les input)
      //4/ SetData -> faire un profilFetch (raffraichit les data)


const ModifyProfil = (props) => {
  const token = Cookies.get('token');
  const id = props.UserID;
  const [username, setUsername] = React.useState('');
  const [email, setUserEmail] = React.useState('');
  const [password, setUserPassword] = React.useState('');

  const data = {
    username: username,
    email: email,
    password: password
  };

  const modifyFetch = (e) => {
    e.preventDefault();
    console.log(data)
    console.log(token)
    console.log(id)

    fetch(`http://localhost:1337/users/me`, {
      method: "PUT",
      headers: {
      "Authorization":`Bearer ${token}`,
      "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
        props.profileFetch();
      }
    )
  }

  return (
  <div>
    <form onSubmit={modifyFetch}>
      <h2>Modifier ton profil </h2>
      <div>
        <p> Modifie ton nom </p>
        <input type="text" value={username} name="username" onChange={(e)=>setUsername(e.target.value)} required />
      </div>
      <p> Modifie ton email</p>
      <input type="email" value={email} onChange={(e)=>setUserEmail(e.target.value)} name="email" />
      <p> Modifie ton mot de passe </p>
      <input type="password" value={password} onChange={(e)=>setUserPassword(e.target.value)} name="password"/>
      <p>
        <input type="submit" value="Envoyer"/>                
      </p>
  </form>
</div>
  );
};

export default ModifyProfil;