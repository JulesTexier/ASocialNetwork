import React from 'react';
import Cookies from 'js-cookie'


const Message = () => {
  const [text, setText] = React.useState('')
  const id = Cookies.get('id');
  const token = Cookies.get('token');


  const data = {
    text: text,
    user: Cookies.get('id')
  };


  const handleFetch = (e) => {
    e.preventDefault();
    console.log(data)

    fetch('http://localhost:1337/posts',{
      method:'POST',
      headers: {
        "Authorization":`Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body : JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
      }
    )}


      if(id){
  return (
    <div className="form">
    <form onSubmit={handleFetch}>
      <h1>Les messages</h1>
      <h2>Laisse un message</h2>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} name="text"/>
      <input type="submit" value="Envoyer"/>
      <h2>Les messages</h2>
      <text>blabla</text>
    </form>
  </div>
  );
  } else {
    return (
      <div className="intro">
        <h3>Connecte-toi pour voir les profils</h3>
      </div>
    )
  }
};

export default Message;