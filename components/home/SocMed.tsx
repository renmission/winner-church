import Link from 'next/link';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

function SocMed() {
  const socmeds = [
    {
      network: 'facebook',
      link: 'https://www.facebook.com/winnerchurchfamily',
    },
    {
      network: 'instagram',
      link: 'https://www.instagram.com/winnerchurchfamily/',
    },
    {
      network: 'twitter',
      link: 'https://twitter.com/winnerchurchfam',
    },
    {
      network: 'youtube',
      link: 'https://www.youtube.com/@winnerchurchfamily5272',
    },
  ];
  return (
    <div className="container mx-auto mb-8 py-4">
      <div className="flex flex-col justify-center items-center text-center space-y-4">
        <h3 className="text-lg font-semibold">
          <span>Want more updates? Follow Winner Church</span>
        </h3>
        <div className="flex justify-center space-x-4">
          {socmeds.map((socmed, index) => (
            <Link key={index} href={socmed.link}>
              <div className="cursor-pointer hover:scale-105 transition ease-in-out">
                <SocialIcon
                  network={socmed.network}
                  style={{ height: 50, width: 50 }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocMed;
