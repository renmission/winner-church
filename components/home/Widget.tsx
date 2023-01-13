import React from 'react';
import Link from 'next/link';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function Widget() {
  const widgetBg = [
    {
      url: 'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80',
    },
  ];

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 ">

<div
        className="container mx-auto shadow-lg rounded-lg py-8 mb-8 bg-center bg-cover h-[600px] relative"
        style={{ backgroundImage: `url(${widgetBg[2].url})` }}
      >
        <div className="flex flex-col justify-center items-center relative mt-10 space-y-4 px-4" style={{
          top: "150px", 
        }}>
          <h1 className="text-6xl font-semibold text-center text-white">
            Watch Online
          </h1>
          <p className="text-white text-xl">This is church. Anywhere.</p>
          <Link href="/">
            <div className="flex justify-center items-center text-center bg-orange-600 text-white px-8 py-4 font-medium rounded-lg space-x-6 text-xl hover:scale-105 transition-all ease-in-out">
              <span>Know More</span>
              <span className="text-2xl">
                <BsChevronCompactRight />
              </span>
            </div>
          </Link>
        </div>
      </div>

      
     
    </div>
  );
}

export default Widget;
