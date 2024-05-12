import React from 'react'
import "../App.css"
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import {useDispatch} from "react-redux"
import { logoutUser } from '../features/authSlice';
import {toast} from "react-toastify"

const Navbar = () => {
  const dispatch = useDispatch();
  const {cartTotalQuantity} = useSelector(state=>state.cart)
  const auth = useSelector(state=>state.auth)
  return (
    <nav className='navbar'>
      <Link to="/">
      <h2>ArkShop</h2>
      </Link>
      <Link to="/cart">
      <div className="bag-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
       <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg>
      <span className="cart">
        <span className='cart-no'>{cartTotalQuantity}</span>
      </span>
      </div>
      </Link>
      <div className='nav-link'>
      {
        auth._id?<Logout onClick={()=>{
          dispatch(logoutUser(null));
          toast.warning("Logout User",{position:"bottom-left"})
          }} >Logout</Logout>:<Navlink>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"} >Register</Link>
        </Navlink>
      }
      </div>
    </nav>
  )
}

export default Navbar;

const Logout = styled.div`
  cursor:pointer;
`;

const Navlink = styled.div`
  a{
    margin-left:2rem;
  }
`;
