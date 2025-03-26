import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="md:px-40 flex justify-between items-center px-4 py-4 h-14">
                <div className="logo font-bold text-white text-2xl cursor-pointer">
                    <a href='https://secure-credentials-manager.netlify.app/'><span className='text-green-500'>&lt;</span>
                    <span>Pass</span><span className='text-green-500'>OP/&gt;</span></a>
                </div>
                
                <a href='https://github.com/pippalla-sairam' target='_blank' rel="noopener noreferrer">
                    <button className='text-white bg-green-700 py-2 px-4 rounded-full flex items-center ring-white ring-1 hover:bg-green-600 transition duration-200'>
                        <img className='invert w-8 p-1' src="icons/github.svg" alt="GitHub repository" />
                        <span className='font-bold px-2'>GitHub</span>
                    </button>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
