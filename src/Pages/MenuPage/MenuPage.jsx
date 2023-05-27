import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../components/Cover/Cover';
import coverImg from '../../assets/menu/banner3.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const MenuPage = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(items => items.category === "dessert")
    const soup = menu.filter(items => items.category === "soup")
    const pizza = menu.filter(items => items.category === "pizza")
    const salad = menu.filter(items => items.category === "salad")
    const drinks = menu.filter(items => items.category === "drinks")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                title='our menu'
                img={coverImg}
            ></Cover>
            {/* section menu title */}
            <SectionTitle heading="Today's offer" subHeading="Don't miss"></SectionTitle>
            {/* section menu offered */}
            {/* <MenuCategory items={offered}></MenuCategory> */}
            {/* section menu dessert */}
            <MenuCategory items={dessert} title={'dessert'} img={dessertImg}></MenuCategory>
            <MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>
            <MenuCategory items={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>
            <MenuCategory items={drinks} title={'drinks'} img={saladImg}></MenuCategory>
        </div>
    );
};

export default MenuPage;