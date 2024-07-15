import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    { title: 'Design Portfolio', image: 'path_to_image_1', link: '#' },
    { title: 'E-Learning Landing Page', image: 'path_to_image_2', link: '#' },
    { title: 'Design Portfolio', image: 'path_to_image_1', link: '#' },
    { title: 'E-Learning Landing Page', image: 'path_to_image_2', link: '#' },
    { title: 'Design Portfolio', image: 'path_to_image_1', link: '#' },
    { title: 'E-Learning Landing Page', image: 'path_to_image_2', link: '#' },
  ];

  return (
    <section className="bg-black text-white p-6">
      <h2 className="text-2xl font-bold text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {projects.map(project => (
          <div key={project.title} className="bg-white text-black p-4 rounded">
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
