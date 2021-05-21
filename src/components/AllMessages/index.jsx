import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'
import './style.css'



const Users = () => {

      const token = Cookies.get('token');
      const id = Cookies.get('id');
      const [data, SetData] = useState([])


    const UsersFetch = () => {

      fetch('http://localhost:1337/posts', {
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
        UsersFetch();
    },[])

    if(id){
      return (
              <div className="UsersContent">
                <h2>Tous les Messages</h2>
                  <ul>
                    {data.map((message) => (
                    <div key={message.id} className="Card">
                      <li><p>{message.text}</p></li>
                    </div>
                    ))}
                  </ul>
              </div>
          
      )
    } else {
      return (
        <div className="intro">
        </div>

      )
    }
}

export default Users;
