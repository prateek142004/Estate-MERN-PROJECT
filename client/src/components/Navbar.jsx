import '../style/navbar.scss'
import { useState ,useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar=()=>{
    const [open, setopen] = useState(false)
    const {currentUser}=useContext(AuthContext)

    return(
        <nav>
            <div className="left">
                <a href="/" className='logo'>
                <img src="logo.png" alt="" />
                <span>SomethingEstate</span>
                </a>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Agents</a>
            </div>
            <div className="right">
                { currentUser ?(
                    <div className='user'>
                        <img src={currentUser.avatar || "/noavatar.jpg"}  alt="" />
                        <span>{currentUser.username}</span>
                        <Link to='/profile' className='profile'>
                        <div className="notification">2</div>
                        <span>Profile</span></Link>
                    </div>
                ) :
                ( <> <a href="/login">Sign in</a>
                <a href="/register" className='sign-up'>Sign up</a>
                </>
            )}
                <div className='menuIcon' onClick={() => setopen(!open)}>

                    <img src="menu.png" alt="" />
                </div>
                <div className={open? "menu active ":"menu"}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Agents</a>
                <a href="">Sign in</a>
                <a href="">Sign up</a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar