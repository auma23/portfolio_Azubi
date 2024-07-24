// import React from 'react';

// const Projects: React.FC = () => {
//   const projects = [
//     { title: 'Design Portfolio', image: './src/assets/image1.jpg', link: '#' },
//     { title: 'E-Learning Landing Page', image: './src/assets/image2.jpg', link: '#' },
//     { title: 'Design Portfolio', image: './src/assets/image3.jpg', link: '#' },
//     { title: 'E-Learning Landing Page', image: './src/assets/image4.jpg', link: '#' },
//     { title: 'Design Portfolio', image: './src/assets/image3.jpg', link: '#' },
//     { title: 'E-Learning Landing Page', image: './src/assets/image6.jpg', link: '#' },
//   ];

//   return (
//     <section className="bg-black text-white p-6">
//       <h2 className="text-2xl font-bold text-center">Projects</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
//         {projects.map(project => (
//           <div key={project.title} className="bg-white text-black p-4 rounded">
//             <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded" />
//             <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
//             <a href={project.link} className="mt-2 block text-blue-500 hover:underline">View Project</a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;
import React from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image6 from '../assets/image6.jpg';

const Projects: React.FC = () => {
  const projects = [
    { title: 'Design Portfolio', image: image1, link: '#' },
    { title: 'E-Learning Landing Page', image: image2, link: '#' },
    { title: 'Design Portfolio', image: image3, link: '#' },
    { title: 'E-Learning Landing Page', image: image4, link: '#' },
    { title: 'Design Portfolio', image: image3, link: '#' },
    { title: 'E-Learning Landing Page', image: image6, link: '#' },
  ];

  return (
    <section className="bg-black text-white p-6">
      <h2 className="text-2xl font-bold text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {projects.map(project => (
          <div key={project.title} className="bg-[#1a1919] text-white p-4 rounded">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded" />
            <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
            <a href={project.link} className="mt-2 block text-blue-500 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
