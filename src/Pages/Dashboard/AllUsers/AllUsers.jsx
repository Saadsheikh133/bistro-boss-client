import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaTrash, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = (user) => {
        console.log(user._id)
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: `${user.name} is admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
            }
        })
    }

    const handleDelete = item => {

    }
    return (
        <div>
            <SectionTitle heading='MANAGE ALL USERS' subHeading='How many??'></SectionTitle>
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <h2 className='text-3xl font-semibold my-4'>Total Users:   {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{ user.name }</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? 'admin' :
                                        <button onClick={() => handleMakeAdmin(user)} className='text-white bg-orange-500 btn btn-md'><FaUserShield></FaUserShield> </button>
                                }
                                </td>
                                <td><button onClick={() => handleDelete(user)} className='btn bg-red-600'><FaTrash></FaTrash></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;