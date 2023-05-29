import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import useCard from '../../Hooks/useCard';

const FoodCard = ({item}) => {
    const { image, name, price, recipe, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCard();

    const handleAddToCard = item => {
        if (user && user?.email) {
            const cartItem = {itemId: _id, name, image, price, email: user?.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();  //refetch cart to update the number of items in the cart.
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'Item added to cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
            })
        }
        else {
            Swal.fire({
                title: 'Login first to add food card',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                   navigate('/login', {state: {from: location}})
                }
            })
        }
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl h-full">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='text-white bg-slate-900 absolute px-4 mt-4 mr-4 py-1 rounded-lg right-0'>${ price }</p>
                <div className="card-body text-center">
                    <h2 className="card-title items-center justify-center">{ name }</h2>
                    <p>{ recipe }</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleAddToCard(item)} className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400 hover:text-orange-400 text-orange-400">Add to card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;