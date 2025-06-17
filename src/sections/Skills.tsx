import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Linguagens de Programação',
      skills: [
        { name: 'C/C++', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'TypeScript', level: 80 }
      ]
    },
    {
      title: 'Desenvolvimento Web',
      skills: [
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 }
      ]
    },
    {
      title: 'Ferramentas & Outros',
      skills: [
        { name: 'Git', level: 30 },
        { name: 'Banco de Dados', level: 65 },
        { name: 'Rede de Computador', level: 86 }
      ]
    }
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'SQL', 'Git', 'Docker', 'TypeScript', 'Vite',
  ];

  return (
    <section id="habilidades" className="py-20 bg-slate-900 text-gray-100 ">
      <div className="container mx-auto px-4 max-w-6xl ">
        <h2 className="text-3xl md:text-4xl font-bold  gradient-text text-center">Minhas Habilidades</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12 mt-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 ">
              <h3 className="text-xl font-bold mb-6 text-white border-b border-slate-700 pb-2">
                {category.title}
              </h3>
              <div className="space-y-5 ">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Tecnologias que utilizo</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-slate-800 rounded-full text-white border border-slate-700 hover:bg-slate-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}