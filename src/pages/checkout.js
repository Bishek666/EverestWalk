import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import Modal from '../Components/model/modal';

function Checkout() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFormData] = useState('')
    const onSubmit = (data) => {
        setFormData(data);
    };

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <p className='text-xl font-semibold mb-4'>Checkout Form</p>
            <form onSubmit={handleSubmit(onSubmit)} className='w-2/4 '>
                <div className='mb-4'>
                    <input
                        type='text'
                        {...register('name', { required: 'Name is required' })}
                        className={`bg-white w-full text-sm mb-1 px-3 py-2 leading-relaxed rounded border border-gray-300
                                                    ${errors.name ? 'border-red-600' : ''}
                                                focus:border-gray-500 focus:outline-none focus:ring focus:ring-chasmaorange focus:ring-opacity-50`}
                        placeholder='Name'
                    ></input>
                    {errors.name && <p className=' text-red-600 text-sm leading-none'>{errors.name?.message}</p>}
                </div>
                <div className='mb-4'>
                    <input
                        type='text'
                        {...register('billing_address', { required: 'Billing address is required' })}
                        className={`bg-white w-full text-sm mb-1 px-3 py-2 leading-relaxed rounded border border-gray-300
                                                    ${errors.name ? 'border-red-600' : ''}
                                                focus:border-gray-500 focus:outline-none focus:ring focus:ring-chasmaorange focus:ring-opacity-50`}
                        placeholder='Billing Address'
                    ></input>
                    {errors.billing_address && <p className=' text-red-600 text-sm leading-none'>{errors.billing_address?.message}</p>}
                </div>
                <div className='mb-4'>
                    <input
                        type='text'
                        {...register('delivery_address', { required: 'Delivery address is required' })}
                        className={`bg-white w-full text-sm mb-1 px-3 py-2 leading-relaxed rounded border border-gray-300
                                                    ${errors.name ? 'border-red-600' : ''}
                                                focus:border-gray-500 focus:outline-none focus:ring focus:ring-chasmaorange focus:ring-opacity-50`}
                        placeholder='Billing Address'
                    ></input>
                    {errors.delivery_address && <p className=' text-red-600 text-sm leading-none'>{errors.delivery_address?.message}</p>}
                </div>
                <div className='mb-4'>
                    <input
                        type='text'
                        {...register('phone_no', { required: 'Phone number is required' })}
                        className={`bg-white w-full text-sm mb-1 px-3 py-2 leading-relaxed rounded border border-gray-300
                                                    ${errors.name ? 'border-red-600' : ''}
                                                focus:border-gray-500 focus:outline-none focus:ring focus:ring-chasmaorange focus:ring-opacity-50`}
                        placeholder='Ex: 9818292038'
                    ></input>
                    {errors.phone_no && <p className=' text-red-600 text-sm leading-none'>{errors.phone_no?.message}</p>}
                </div>

                <button type='submit' className='p-2 md:py-3.5 md:px-5 text-center text-white bg-green-700 rounded hover:bg-green-800 '>Submit</button>
            </form>
            <Modal formData={formData}/>
        </div>
    )
}

export default Checkout