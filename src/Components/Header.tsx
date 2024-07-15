// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

// const Header: React.FC = () => {
//   return (
//     <header className="bg-black text-white p-8 sm:p-16">
//       <nav className="flex justify-between items-center mb-12">
//         <div className="text-xl font-bold">adamkeyes</div>
//         <div className="flex space-x-4 gap-4">
//           <a href="#" aria-label="GitHub" className="text-2xl">
//             <FontAwesomeIcon icon={faGithub} />
//           </a>
//           <a href="#" aria-label="LinkedIn" className="text-2xl">
//             <FontAwesomeIcon icon={faLinkedin} />
//           </a>
//           <a href="#" aria-label="Facebook" className="text-2xl">
//             <FontAwesomeIcon icon={faFacebook} />
//           </a>
//           <a href="#" aria-label="Twitter" className="text-2xl">
//             <FontAwesomeIcon icon={faTwitter} />
//           </a>
//         </div>
//       </nav>
//       <div className="flex flex-col sm:flex-row items-center">
//         <div className="text-center sm:text-left sm:max-w-md">
//           <h1 className="text-5xl font-bold leading-tight">
//             Nice to meet you! I'm <span className="border-b-4 border-[#4ee1a0] w-24 mt-2">Adam Keyes</span>
//           </h1>
//           <div ></div>
//           <p className="mt-4 text-lg">
//             Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.
//           </p>
//           <a href="#" className="inline-block mt-6 text-white border-b-2 border-[#4ee1a0] hover:border-[#4ee1a0] hover:text-[#4ee1a0] transition">
//             Contact Me
//           </a>
//         </div>
//         <div className="sm:ml-16 mt-8 sm:mt-0">
//           <img src="./src/assets/profile.png" alt="Profile" className="w-full max-w-md" />
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white px-8">
      <div className="flex flex-col sm:flex-row justify-between items-start">
        <div className="flex flex-col pl-10 pt-8">
          <div className="text-xl font-bold mb-4">adamkeyes</div>
          <div className="text-center sm:text-left sm:max-w-md">
            <h1 className="text-5xl font-bold leading-tight">
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
        <div className="flex flex-col items-center bg-[#1b1b1c] sm:mt-0 sm:ml-16 sm:w-auto">
          <div className="flex space-x-4 gap-4 mb-4 justify-center sm:justify-start">
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
          <img src="./src/assets/profile.png" alt="Profile" className="w-full max-w-md" />
        </div>
      </div>
    </header>
  );
}

export default Header;

