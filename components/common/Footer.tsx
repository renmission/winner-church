import React from 'react';
import Link from 'next/link';
import FooterAddress from './FooterAddress';

function Footer() {
  return (
    <>
      <FooterAddress />
      <div className="w-full mx-auto pb-2 px-4 bg-gray-900">
        <div className="text-sm font-normal text-gray-400 text-center pt-6 px-8">
          <div className="md:flex md:justify-center space-x-2 mb-4">
            <span>&copy; 2023 Winner Church. All Rights Reserved </span>
            <span className='hidden md:block'>&#8212;</span>
            <div>
              <Link href="/terms-of-use">
                <span> Terms of Use</span>
              </Link>
              <span> | </span>
              <Link href="/privacy-policy">
                <span>Privacy Policy </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
