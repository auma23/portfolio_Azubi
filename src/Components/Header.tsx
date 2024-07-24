import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import profileImage from '../assets/profile.png';
import decorativeImage from '../assets/group.png';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="relative bg-black text-white px-8 py-4">
      {/* Grid container to manage layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        {/* Fixed Adam Keyes Text */}
        <div className="text-xl font-bold sm:col-span-2">
          adamkeyes
        </div>
        
        {/* Image and Icons Div */}
        <div className="flex flex-col items-center sm:items-end order-1 sm:order-2">
          <div className="flex space-x-4 gap-4 justify-center sm:justify-end mb-4">
            <a href="#" aria-label="GitHub" className="text-2xl">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-2xl">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" aria-label="Facebook" className="text-2xl">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" aria-label="Twitter" className="text-2xl">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <img src={profileImage} alt="Profile" className="w-full max-w-md mb-4" />
        </div>

        {/* Text Div */}
        {/* <div className="flex flex-col items-center sm:items-start order-2 sm:order-1">
          <img src={decorativeImage} alt="Decorative" className="w-full max-w-sm mb-4" />
          <h1 className="text-5xl font-bold leading-tight">
            Nice to meet you! I'm <span className="border-b-4 border-[#4ee1a0]">Adam Keyes</span>
          </h1>
          <p className="mt-4 text-sm">
            Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.
          </p>
          <a href="#" className="inline-block mt-6 text-white border-b-2 border-[#4ee1a0] hover:border-[#4ee1a0] hover:text-[#4ee1a0] transition">
            Contact Me
          </a>
        </div> */}
        <div className="flex flex-col items-center sm:items-start order-2 sm:order-1 relative">
  <img src={decorativeImage} alt="Decorative" className="w-full max-w-sm mb-4" />
  <h1 className="text-5xl font-bold leading-tight -mt-12 sm:-mt-16">
    Nice to meet you! I'm <span className="border-b-4 border-[#4ee1a0]">Adam Keyes</span>
  </h1>
  <p className="mt-4 text-sm">
    Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.
  </p>
  <a href="#" className="inline-block mt-6 text-white border-b-2 border-[#4ee1a0] hover:border-[#4ee1a0] hover:text-[#4ee1a0] transition">
    Contact Me
  </a>
</div>
      </div>
    </header>
  );
};

export default Header;

