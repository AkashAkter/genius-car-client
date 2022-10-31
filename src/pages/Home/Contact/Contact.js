import React from 'react';
import { TbCalendarTime } from 'react-icons/tb';
import { FiPhoneCall } from 'react-icons/fi';
import { BiMapPin } from 'react-icons/bi';

const Contact = () => {
    return (
        <div className='bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 py-10 rounded-lg'>
            <div className="hero-content flex-col lg:flex-row">
                <TbCalendarTime className='w-8 h-8 text-orange-400'></TbCalendarTime>
                <div className='text-white font-semibold'>
                    <small>We are open monday-friday</small>
                    <p className='text-2xl'>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className="hero-content flex-col lg:flex-row">
                <FiPhoneCall className='w-8 h-8 text-orange-400'></FiPhoneCall>
                <div className='text-white font-semibold'>
                    <small>We are open monday-friday</small>
                    <p className='text-2xl'>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className="hero-content flex-col lg:flex-row">
                <BiMapPin className='w-8 h-8 text-orange-400'></BiMapPin>
                <div className='text-white font-semibold'>
                    <small>We are open monday-friday</small>
                    <p className='text-2xl'>7:00 am - 9:00 pm</p>
                </div>
            </div>

        </div>
    );
};

export default Contact;