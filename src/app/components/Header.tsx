import React from 'react';
import Image from 'next/image';
const Header = () => {

    const date = new Date().toLocaleDateString
    ("bn-BD", {
        dateStyle: "full",
    })


    return (
        <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
                <Image className="w-10 h-10 bg-green-800" height={50} width={50} src={'/logo-icon.png'} alt=""
                />
                <div>
                    <h2>বাজার দর</h2>
                <div>{date}</div>
                </div>
            </div>

        <div className='flex gap-2'>
            <button className='btn'>সাইন ইন</button>
        <button className='btn bg-green-700 text-white'>সাইন আপ</button>
        </div>

        </div>
    );
};

export default Header;