import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCard from '../../../Hooks/useCard';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCard();
    
    const handleLogOut = () => {
        logOut()
            .then()
        .catch(error => console.log(error))
    }

   const navItems = <>
       <li><NavLink to = "/">Home</NavLink></li>
       <li><NavLink to = "/menuPage">Menu</NavLink></li>
       <li><NavLink to = "/order/salad">Order Food</NavLink></li>
       <li>
           <NavLink to = "/dashboard/myCart">
               <button className="btn gap-2">
                   <FaShoppingCart></FaShoppingCart>
                   <div className="badge badge-secondary">+{ cart?.length || 0 }</div>
               </button>
           </NavLink>
       </li>
       <li><NavLink to="/dashboard/myCart">Dashboard</NavLink></li>
    </>
    return (
        <nav>
            <div className="navbar bg-black text-white fixed z-10 max-w-screen-xl bg-opacity-40">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                           {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <img className='rounded-full h-14 mr-2' src={user?.photoURL} alt="" />
                                </div>
                            <button onClick={handleLogOut} className='btn btn-primary'>Log Out</button>
                            </>
                            :
                            <>

                                <button className='btn btn-primary'><Link to="/login">Login</Link></button>
                            </>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;