import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';

const image_hosting_token = import.meta.env.VITE_image_upload_token

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    console.log(data)
                    const { name, price, recipe, category } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                    console.log(newItem)
                }
        })
    };
    return (
        <div className='w-full'>
            <SectionTitle heading='Add an Item' subHeading="What's new"></SectionTitle>
            <Helmet>
                <title>Bistro Boss | Add an Item</title>
            </Helmet>
            <h2 className='text-4xl text-center my-10'>Add a new Item</h2>

            <form className='space-y-4 mx-8' onSubmit={handleSubmit(onSubmit)}>
                <input className='w-full py-2 px-2' type="text" placeholder="Recipe Name" {...register("name", { required: true, maxLength: 80 })} /> <br />
                <div className='w-full flex justify-between gap-2'>
                    <select className='py-2 px-2 w-full' defaultValue="Pick One" {...register("category", { required: true })}>
                        <option disabled >Pick One</option>
                        <option value="salad">Salad</option>
                        <option value="soup">Soup</option>
                        <option value="drinks">Drinks</option>
                        <option value="deserts">Deserts</option>
                        <option value="pizza">Pizza</option>
                    </select>
                    <br />
                    <input className='py-2 px-2 w-full' type="number" placeholder="Price" {...register("price", { required: true, maxLength: 100 })} /> <br />
               </div>
                <div className="form-control w-full mx-auto">
                    <textarea className="textarea textarea-bordered h-24" placeholder="Details" {...register("recipe", { required: true})}></textarea>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Pick a file</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <input className='btn btn-sm mt-4 mb-10' type="submit" value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;