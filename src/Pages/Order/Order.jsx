import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import coverImg from '../../assets/shop/banner2.jpg'
import Cover from '../../components/Cover/Cover';
import useMenu from '../../Hooks/useMenu';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const dessert = menu.filter(items => items.category === "dessert")
    const soup = menu.filter(items => items.category === "soup")
    const pizza = menu.filter(items => items.category === "pizza")
    const salad = menu.filter(items => items.category === "salad")
    const drinks = menu.filter(items => items.category === "drinks")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order food</title>
            </Helmet>
            <Cover img={coverImg} title='Order foods'></Cover>
            <Tabs className='my-10 text-center' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                   <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                   <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;