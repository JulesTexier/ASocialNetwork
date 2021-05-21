import React from 'react'
import Users from './Users'
import Message from 'components/Message'
import AllMessages from 'components/AllMessages'


const Home = () => {
return (
  <div>
    <h1>Home</h1>
    <AllMessages />
    <Message />
    <Users />
  </div>
  )
}


export default Home;