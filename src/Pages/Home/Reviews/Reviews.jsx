import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
            setReviews(data)
        })
    }, [])
    return (
        <section className=''>
            <SectionTitle
                heading='TESTIMONIALS'
                subHeading='What Our Clients Say'
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
                {reviews.map(review => <SwiperSlide
                    key={review._id}
                >
                    <div className='m-20 flex flex-col justify-center items-center space-y-4'>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                        <p>{review.details}</p>
                        <h2 className='text-5xl text-yellow-600'>{ review.name}</h2>
                    </div>

                </SwiperSlide>)}
            </Swiper>
        </section>
    );
};

export default Reviews;