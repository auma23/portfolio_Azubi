import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'HTML', experience: '4 Years Experience' },
    { name: 'CSS', experience: '4 Years Experience' },
    { name: 'JavaScript', experience: '4 Years Experience' },
    { name: 'Accessibility', experience: '4 Years Experience' },
    { name: 'React', experience: '3 Years Experience' },
    { name: 'Sass', experience: '3 Years Experience' },
  ];

  return (
    <section className="bg-black text-white p-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {skills.map(skill => (
          <div key={skill.name} className="ml-5">
            <h3 className="text-xl font-bold">{skill.name}</h3>
            <p className="mt-2">{skill.experience}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
