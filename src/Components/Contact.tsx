// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

// const Contact: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
//       <div className="max-w-4xl w-full flex flex-col md:flex-row">
//         <div className="md:w-1/2 p-8">
//           <h1 className="text-6xl font-bold mb-4">Contact</h1>
//           <p className="mb-8 text-gray-400">
//             I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.
//           </p>
//         </div>
//         <div className="md:w-1/2 p-8">
//           <form className="space-y-4">
//             <div>
//               <input
//                 type="text"
//                 placeholder="NAME"
//                 className="w-full p-3 bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 placeholder="EMAIL"
//                 className="w-full p-3 bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>
//             <div>
//               <textarea
//                 placeholder="MESSAGE"
//                 className="w-full p-3 bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
//               ></textarea>
//             </div>
//             <div className="text-right">
//               <button
//                 type="submit"
//                 className="px-8 py-3 bg-green-500 text-white font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700"
//               >
//                 SEND MESSAGE
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div className="absolute bottom-8 left-8 text-xl">
//         <p className="font-bold">adamkeyes</p>
//       </div>
//       <div className="absolute bottom-8 right-8 flex space-x-4 text-2xl">
//         <a href="https://github.com" aria-label="GitHub">
//           <FontAwesomeIcon icon={faGithub} className="text-white hover:text-gray-400" />
//         </a>
//         <a href="https://linkedin.com" aria-label="LinkedIn">
//           <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-gray-400" />
//         </a>
//         <a href="https://twitter.com" aria-label="Twitter">
//           <FontAwesomeIcon icon={faTwitter} className="text-white hover:text-gray-400" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1b1b1c] text-white flex flex-col justify-between">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-4xl w-full flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8">
            <h1 className="text-6xl font-bold mb-4">Contact</h1>
            <p className="mb-8 text-gray-400">
              I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.
            </p>
          </div>
          <div className="md:w-1/2 p-8">
            <form className="space-y-8">
              <div className="relative py-4 border-b border-gray-600">
                <input
                  type="text"
                  id="name"
                  className="block w-full appearance-none bg-transparent text-white focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-3 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  NAME
                </label>
              </div>
              <div className="relative py-4 border-b border-gray-600">
                <input
                  type="email"
                  id="email"
                  className="block w-full appearance-none bg-transparent text-white focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-3 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  EMAIL
                </label>
              </div>
              <div className="relative border-b border-gray-600">
                <textarea
                  id="message"
                  className="block w-full appearance-none bg-transparent text-white focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-3 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  MESSAGE
                </label>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className=" py-3 text-gray-500 font-semibold border-b-2 border-green-600 text-sm"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr className='mx-10' />
      <div className="flex justify-between items-center px-8 py-8 bg-[#1b1b1c]">
        <p className="font-bold">adamkeyes</p>
        <div className="flex space-x-4">
          <a href="https://github.com" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} className="text-white hover:text-gray-400" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-gray-400" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} className="text-white hover:text-gray-400" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
