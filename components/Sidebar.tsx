import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import Image from 'next/image';

import { useTheme } from 'next-themes';

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <Image
        src="/headshot.jfif"
        alt="user avatar"
        className="mx-auto rounded-full"
        height="128"
        width="128"
        quality="100"
        layout="intrinsic"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Joshua</span> Leisure
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-300">
        Mobile & Web Developer
      </p>
      <a
        href="/Joshua_Leisure_Resume.pdf"
        download="Joshua_Leisure_Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-300"
      >
        <GiTie className="w-6 h-6" />
       <span> Download Resume </span>
      </a>
      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="https://github.com/joshualeisure">
          <AiFillGithub className="w-8 h-8 cursor-pointer"></AiFillGithub>
        </a>
        <a href="https://www.linkedin.com/in/joshualeisure/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer"></AiFillLinkedin>
        </a>
      </div>
      {/* addy */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Jacksonville, Florida</span>
        </div>
        <p className="my-2">leisurejoshua18@gmail.com</p>
        <p className="my-2">765-421-8482</p>
      </div>
      {/* email button */}
      <button
        className="w-9/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open('mailto:leisurejoshua18@gmail.com')}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-9/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
