import React from 'react';
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet, FaEnvelope } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi";
import useCard from '../Hooks/useCard';

const DashBoard = () => {
    const [cart] = useCard();
    return (
        <div className="drawer drawer-mobile bg-slate-100">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content bg-[#D1A054]">
                    {/* <!-- Sidebar content here --> */}
                    <li className='uppercase '>
                        <NavLink to="/dashboard/home">
                            <FaHome></FaHome>
                            User Home
                        </NavLink>
                    </li>
                    <li className='uppercase '>
                        <NavLink to="/dashboard/reservation">
                            <FaCalendarAlt></FaCalendarAlt>
                            Reservation
                        </NavLink>
                    </li>
                    <li className='uppercase '>
                        <NavLink to="/dashboard/history">
                            <FaWallet></FaWallet>
                            Payment History
                        </NavLink>
                    </li>
                    <li className='uppercase '>
                        <NavLink to='/dashboard/myCart'>
                            <FaShoppingCart></FaShoppingCart>
                            My Cart
                            <span className="badge badge-secondary">+{cart?.length || 0}</span>
                        </NavLink>
                    </li>
                    <li className='uppercase '>
                        <NavLink to="/dashboard/review">
                            Add review
                        </NavLink>
                    </li>
                    <li className='uppercase '>
                        <NavLink to="/dashboard/booking">
                            my booking
                        </NavLink>
                    </li>
                    <div className=' divider'></div>
                    <li className='uppercase '>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li className='uppercase '>
                        <NavLink to="/menuPage">
                            <IoMenu></IoMenu>
                            menu</NavLink>
                    </li>
                    <li className='uppercase '>
                        <NavLink to="/order/salad">
                            <HiShoppingBag></HiShoppingBag>
                            shop
                        </NavLink>
                    </li>
                    <li className='uppercase '>
                        <NavLink to="/dashboard/contact">
                            <FaEnvelope></FaEnvelope>
                            contact</NavLink>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;