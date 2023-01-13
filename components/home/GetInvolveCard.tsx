import Link from 'next/link';
import React from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { AiFillPlaySquare } from 'react-icons/ai';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi'
import { RiCommunityFill } from 'react-icons/ri'
import { SiFuturelearn } from 'react-icons/si'
import { GiTalk } from 'react-icons/gi'


function GetInvolveCard() {
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
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4">
      <div className='mb-3'>
        <h1 className="text-4xl font-semibold ">Get Involved</h1>
        <p className="text-gray-400 text-lg">
          See what God can do through you.
        </p>
      </div>
      <div className="container mx-auto shadow-lg rounded-xl py-2 mb-2 hover:scale-105 transition ease-in-out">
        <div className="flex flex-col justify-center px-6">
          <Link href="/">
            <div className="flex justify-start items-center text-2xl text-gray-700 px-2 py-4 font-medium rounded-lg space-x-4">
              <span><FaHandHoldingHeart /></span>
              <span>Give Online</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="container mx-auto shadow-lg rounded-xl py-2 mb-2 hover:scale-105 transition ease-in-out">
        <div className="flex flex-col justify-center px-6">
          <Link href="/">
            <div className="flex justify-start items-center text-2xl text-gray-700 px-2 py-4 font-medium rounded-lg space-x-4">
              <span><AiFillPlaySquare /></span>
              <span>Latest Series</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="container mx-auto shadow-lg rounded-xl py-2 mb-2 hover:scale-105 transition ease-in-out">
        <div className="flex flex-col justify-center px-6">
          <Link href="/">
            <div className="flex justify-start items-center text-2xl text-gray-700 px-2 py-4 font-medium rounded-lg space-x-4">
              <span><HiUserGroup /></span>
              <span>Life Group</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="container mx-auto shadow-lg rounded-xl py-2 mb-2 hover:scale-105 transition ease-in-out">
        <div className="flex flex-col justify-center px-6">
          <Link href="/">
            <div className="flex justify-start items-center text-2xl text-gray-700 px-2 py-4 font-medium rounded-lg space-x-4">
              <span><SiFuturelearn /></span>
              <span>Kids Church</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="container mx-auto shadow-lg rounded-xl py-2 mb-2 hover:scale-105 transition ease-in-out">
        <div className="flex flex-col justify-center px-6">
          <Link href="/">
            <div className="flex justify-start items-center text-2xl text-gray-700 px-2 py-4 font-medium rounded-lg space-x-4">
              <span><RiCommunityFill /></span>
              <span>Community</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="container mx-auto shadow-lg rounded-xl py-2 mb-2 hover:scale-105 transition ease-in-out">
        <div className="flex flex-col justify-center px-6">
          <Link href="/">
            <div className="flex justify-start items-center text-2xl text-gray-700 px-2 py-4 font-medium rounded-lg space-x-4">
              <span><GiTalk /></span>
              <span>Talk to Us</span>
            </div>
          </Link>
        </div>
      </div>

      
    </div>
  );
}

export default GetInvolveCard;
