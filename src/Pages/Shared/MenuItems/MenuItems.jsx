import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCard from './MenuCard';
import useMenu from '../../../Hooks/useMenu';

const MenuItems = () => {
    const [menu] = useMenu();

    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section>
            <SectionTitle
                heading='FROM OUR MENU'
                subHeading='Check it out'
            >
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    popular.map(item => <MenuCard
                        key={item._id}
                        menu={item}
                    ></MenuCard>)
                }
           </div>
        </section>
    );
};

export default MenuItems;