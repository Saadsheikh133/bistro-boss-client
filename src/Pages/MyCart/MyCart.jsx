import React from 'react';
import useCard from '../../Hooks/useCard';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart, refetch] = useCard();
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                       }
                })
            }
        })
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <SectionTitle heading="WANNA ADD MORE?" subHeading="My Cart"></SectionTitle>
            <div className='bg-white'>
                <div className='uppercase md:flex justify-evenly py-4 lg:px-4'>
                    <h2 className='text-3xl font-bold'>total items: {cart.length}</h2>
                    <h2 className='text-3xl font-bold'>total price: ${total}</h2>
                    <button className='btn bg-[#D1A054] border-none btn-sm'>PAY</button>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead className='bg-[#D1A054]'>
                            <tr className='bg-[#D1A054]'>
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                cart.map((item, index) =>
                                    <tr
                                        key={item._id}
                                    >
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.name} </td>
                                        <td>{item.price}</td>
                                        <td onClick={() => handleDelete(item)} className='text-white bg-red-600 btn btn-lg'><FaTrash></FaTrash> </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MyCart;