import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className='mb-24'>
            <SectionTitle
                heading={"Order online"}
                subHeading={"From 11.00am to 10.00pm"}
            >
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper "
            >
                <SwiperSlide className='relative'>
                    <img src={slide1} alt="" />
                    <h3 className='lg:text-3xl absolute left-0 right-0 bottom-10 text-white text-center uppercase '>salads</h3>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src={slide2} alt="" />
                    <h3 className='lg:text-3xl absolute left-0 right-0 bottom-10 text-white text-center uppercase '>pizza</h3>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src={slide3} alt="" />
                    <h3 className='lg:text-3xl absolute left-0 right-0 bottom-10 text-white text-center uppercase '>soup</h3>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src={slide4} alt="" />
                    <h3 className='lg:text-3xl absolute left-0 right-0 bottom-10 text-white text-center uppercase '>desserts</h3>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src={slide5} alt="" />
                    <h3 className='lg:text-3xl absolute left-0 right-0 bottom-10 text-white text-center uppercase '>salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;