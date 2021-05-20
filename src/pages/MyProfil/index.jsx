import React, { useEffect, useState } from 'react';
import './style.css';
import Cookies from 'js-cookie';
import ModifyProfil from 'components/ModifyProfil'



const Profil = () => {

      const token = Cookies.get('token');
      const [data, SetData] = useState('')


    const profileFetch = () => {

      fetch('http://localhost:1337/users/me', {
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
        profileFetch();
    },[])

      return (
            <div className="profil">
              <div className="profilContent">
                  <h1>Mon Profil</h1>
                  <h3> Nom : {data.username}</h3>
                  <p> Adresse : {data.email}</p>
                  <br></br>
              <ModifyProfil UserID={data.id} profileFetch={profileFetch} />
              </div>
            </div>
      )

}


export default Profil;