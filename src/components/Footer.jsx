import React from 'react';

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center w-full py-4'>
            <div className="logo font-bold text-white text-2xl flex items-center">
                <span className='text-green-500'>&lt;</span>
                <span>Pass</span>
                <span className='text-green-500'>OP/&gt;</span>
            </div>

            <div className='flex justify-center items-center text-sm mt-2'>
                Created with  
                <span className='mx-2'>
                    <lord-icon 
                        src="https://cdn.lordicon.com/rjzlnunf.json" 
                        trigger="hover"
                        colors="primary:#ff4d4d"
                        style={{ width: "25px", height: "25px" }}>
                    </lord-icon>
                </span> 
                by <span className="ml-1 font-semibold">Sairam</span>
            </div>
        </div>
    );
}

export default Footer;
