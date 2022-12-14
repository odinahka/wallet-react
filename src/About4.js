import React from 'react';

const About4 = () => {
    return (
        <div className='bg-white h-screen w-screen flex flex-col justify-center'>
            <div className='flex-1 mt-6'>
                <h2 className='font-bold text-center'>Positive banking at your fingertips.</h2>
                <div className='flex flex-row items-center justify-center divide-x divide-slate-300'>
                    <button className='bg-slate-200 p-2 hover:bg-slate-300' >Mobile App</button>
                    <button className='bg-slate-200 p-2 hover:bg-slate-300' >Web App</button>
                </div>
                <div className='bg-wallet_green bg-opacity-30 mt-4 h-4/5 container'/>
                <div className=' container mx-auto flex-1 flex items-center justify-center my-1'>
                    <p className='text-center xl:text-lg py-1'>Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do euismod tempor incididunt ut labore et dolore magna aliqua. Ut enim. Lorem ipsum dolor sit amet, consecteur adispiscing elit,</p>
                </div>
            </div>
        </div>
    );
}

export default About4;
