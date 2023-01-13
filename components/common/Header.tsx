import Link from 'next/link';
import React, { FC } from 'react';
import { AiFillFire } from 'react-icons/ai';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const navLinksData = [
    {
      label: 'Sermons',
      icon: '',
      link: '/sermons',
      rootPathname: '/sermons',
    },
    {
      label: 'Who we are',
      icon: '',
      link: '/who-we-are',
      rootPathname: '/who-we-are',
    },
    {
      label: 'Get Involve',
      icon: '',
      link: '/get-invlove',
      rootPathname: '/get-invlove',
    },
    {
      label: 'Locations',
      icon: '',
      link: '/locations',
      rootPathname: '/locations',
    },
  ];

  return (
      <header className="bg-white py-4 shadow-lg border-b-2">
        <nav className="max-w-[1400px] mx-auto flex justify-between items-center px-4">
          <div className="text-2xl lg:text-2xl font-bold">
            <Link href="/">
              <div className='flex items-center'>
                <AiFillFire />
                <span className="cursor-pointer">Winner Church</span>
              </div>
            </Link>
          </div>
          <div>
            <ul className="hidden md:inline-flex items-center justify-between space-x-4">
              {navLinksData.map((navLink, index) => (
                <Link key={index} href={navLink.link}>
                  <span className="cursor-pointer">{navLink.label}</span>
                </Link>
              ))}
            </ul>
          </div>
          <div className="">
            <Link href="/give">
              <div className="bg-orange-600 text-white px-4 py-2 rounded-full">
                Give
              </div>
            </Link>
          </div>
        </nav>
      </header>
  
  );
};

export default Header;
