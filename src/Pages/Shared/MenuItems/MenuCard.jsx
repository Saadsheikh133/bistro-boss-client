import React from 'react';

const MenuCard = ({ menu }) => {
    const { image, name, price, recipe } = menu;
    return (
        <div className='flex gap-4 p-2'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='h-[100px] ' src={image} alt="" />
            <div className='space-y-2'>
                <h3 className='text-xl text-[#151515]'>{name}----------------</h3>
                <p>{recipe }</p>
            </div>
                <p className='text-yellow-600'>${ price }</p>
        </div>
    );
};

export default MenuCard;