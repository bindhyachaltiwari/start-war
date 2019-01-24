import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import imageL from '../../images/star-wars.png'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};        
    }

    render() {
        return (
            <div className='topnav'>
        <img src={imageL} alt="star war"/>
        <section className='topbar'>
            <ul  className='topnav nav-right'>
                {window.location.pathname !== "/home" && 
                <li>
                    <Link to='/home'>HOME</Link>
                </li>
                }
                {   !window.localStorage.getItem("status") && window.location.pathname !== "/" &&
                    <li>
                        <Link to='/'>LOGIN</Link>
                    </li>
                }
                <li>logout</li>
            </ul>
        </section>
    </div>
        );
    }
}

export default Header;
