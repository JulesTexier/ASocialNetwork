import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'
import './style.css'



const Users = () => {

      const token = Cookies.get('token');
      const id = Cookies.get('id');
      const [data, SetData] = useState([])


    const UsersFetch = () => {

      fetch('http://localhost:1337/users', {
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
                <h2>Tous les Profils</h2>
                  <ul>
                    {data.map((user) => (
                    <div key={user.id} className="Card">
                      <li><p>{user.username}</p></li>
                      <button><Link to={"/users/" + user.id} > Voir ce profil </Link ></button>
                    </div>
                    ))}
                  </ul>
              </div>
          
      )
    } else {
      return (
        <div className="intro">
          <h3>Connecte-toi pour voir les profils</h3>
        </div>

      )
    }
}

export default Users;
