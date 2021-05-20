import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import './style.css'


const User = () => {
  const { userSlug } = useParams();
  const token = Cookies.get('token');
  const [data, SetData] = useState([])

  console.log(userSlug)
  const UserFetch = () => {

  fetch(`http://localhost:1337/users/${userSlug}`, {
      method: "GET",
      headers: {
      "Authorization":`Bearer ${token}`,
      "Content-Type": "application/json"
      },
    })
    .then((response) => response.json())
    .then((data) => {
        SetData(data)
        console.log(data)
      }
    )
  }

  useEffect(() => {
      UserFetch();
  },[])

    return (  
        <div className="User">
          <div className="UserContent">
            <h1>User</h1>
            <h3> Nom : {data.username}</h3>
            <p> Adresse : {data.email}</p>
            <br></br>
          </div>
        </div>
      )
}

export default User;