import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { LogOut } from 'reduxx/Log/LogActions'
import './style.css'



const Navbar = () => {

  const dispatch = useDispatch()


  const handleClick = () => {
    Cookies.remove('id');
    Cookies.remove('token');
    dispatch(LogOut(false))
    window.location.reload();
  }

  const logged = useSelector(state => state.logged)


  if (logged) {
    return (         
    <div>
      <nav>
        <div className="buttons">
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
          <ul>
            <li> <Link to="/users/me">Mon Profil</Link></li>
          </ul>
        </div>
        <ul>
        <button onClick={handleClick}>Logout</button>
        </ul>
      </nav>
    </div>)
  } else {
    return (
    <div>
      <nav>
        <div className="buttons">
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
          <ul>
           <li><Link to="/register">Register</Link></li>
          </ul>
        </div>
        <ul>
          <button><Link to="/login">Login</Link></button>
        </ul>
      </nav>
    </div>

    )
  }


}

export default Navbar