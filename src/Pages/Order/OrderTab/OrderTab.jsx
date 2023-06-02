import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';


// TODO: implement pagination here on this page.
const OrderTab = ({items}) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {
                items.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;