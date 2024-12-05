import React from 'react';
import TagCloudAnimation from '../../components/TagCloudAnimation/TagCloudAnimation';
import './Technology.css'
function Technology() {
    return (
        <div className="sm:py-16 sm:px-16 px-6 technologyBackgroundImg relative">
            <h1 className='text-white dark:text-black sm:text-6xl text-[2rem] font-bold text-center'>Our Technology</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center items-center">
                    <TagCloudAnimation />
                </div>
                <div className="text-white space-y-6 relative  shadow-xl sm:p-8 overflow-hidden">
                    <div className='bg-[#010038] text-white space-y-6 relative  addShadow sm:p-8'>
                        <h1 className="text-3xl font-extrabold tracking-tight">The Most Trusted
                            Web Service Provider
                            in Nagpur</h1>
                        <p className="text-lg">
                            Saturnx Stays Ahead of the bend with digital marketing trends and Professional Digital Marketing Company in Nagpur providing creative and customized online solutions. We are an experienced and talented team of passionate consultants who live and breathe search engine. We have developed search strategies for leading brands to small and medium sized businesses across many industries in the India and worldwide.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Technology;
