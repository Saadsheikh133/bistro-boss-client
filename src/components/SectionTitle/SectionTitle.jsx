import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-1/2 text-center mx-auto my-8'>
            <p className='text-[#D99904] text-xl pb-2 italic'>---{subHeading}---</p>
            <h3 className='text-4xl uppercase border-y-4 py-4'>{ heading }</h3>
        </div>
    );
};

export default SectionTitle;