import React from 'react';

const FoodCard = ({item}) => {
    const { image, name, price, recipe } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl h-full">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='text-white bg-slate-900 absolute px-4 mt-4 mr-4 py-1 rounded-lg right-0'>${ price }</p>
                <div className="card-body text-center">
                    <h2 className="card-title items-center justify-center">{ name }</h2>
                    <p>{ recipe }</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400 hover:text-orange-400 text-orange-400">Add to card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;