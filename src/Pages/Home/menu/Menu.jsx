import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import img from '../../../assets/home/featured.jpg'
import './Menu.css'

const Menu = () => {
    return (
        <section className='pt-12 pb-20 bg-fixed text-white bg bg-blend-multiply bg-cover bg-slate-400 my-20'>
            <SectionTitle
                heading='FROM OUR MENU'
                subHeading='Check it out'
            ></SectionTitle>
            <div className='md:flex gap-8 w-full'>
                <div className='lg:w-1/2'>
                    <img className='h-[400px] lg:w-3/4 mx-auto' src={img} alt="" />
                </div>
                <div className='lg:w-1/2 space-y-4'>
                    <h4 className='text-2xl'>May 20, 2023</h4>
                    <h3 className='text-2xl'>WHERE CAN I GET SOME?</h3>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestiae sit exercitationem. Perferendis laboriosam quam dolores quae quo vero, neque amet ullam odit enim fugit recusandae adipisci id magnam harum totam, labore impedit debitis. Magnam odit cumque veniam voluptatibus placeat pariatur earum ad fuga reprehenderit, quod repellendus sint at quasi.</p>
                    <button className='my-10 btn btn-outline hover:bg-white hover:text-black border-0 border-b-4 text-white'>READ MORE</button>
                </div>
            </div>
        </section>
    );
};

export default Menu;