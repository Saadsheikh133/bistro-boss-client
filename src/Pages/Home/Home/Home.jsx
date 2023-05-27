import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import Menu from '../menu/Menu';
import Reviews from '../Reviews/Reviews';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <MenuItems></MenuItems>
            <Menu></Menu>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;