import React from 'react';
import MenuCard from '../Shared/MenuItems/MenuCard';
import Cover from '../../components/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, img}) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-4 my-20'>
                {
                    items.map(item => <MenuCard
                        key={item._id}
                        menu={item}
                    ></MenuCard>)
                }
            </div>
            <div className='flex items-center justify-center'>
                <Link to={`/order/${title}`}>
                    <button className='mb-10 btn btn-outline border-0 border-b-4'>ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;