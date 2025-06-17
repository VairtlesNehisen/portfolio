import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Crypto Market Tracker',
      description: 'Um aplicativo web moderno para acompanhar cotações de criptomoedas em tempo real, usando a API CoinCap.',
      technologies: ['TypeScript', 'React', 'Tailwind CSS'],
      status: 'Concluído',
      link: 'https://github.com/VairtlesNehisen/CriptoMoedas'
    },
    {
      title: 'Sistema de Orçamento para Reformas',
      description: 'Este projeto é um sistema web interativo para ajudar usuários a estimar o custo de uma reforma, oferecendo a funcionalidade de selecionar diferentes tipos de serviços, níveis de acabamento e medidas.',
      technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'SQL'],
      status: 'Em desenvolvimento',
      link: 'https://github.com/VairtlesNehisen/renovation-budget-app'
    },
    {
      title: 'Desafio-Rencart-Atualizado-REACT',
      description: 'Este projeto é uma API RESTful para gerenciar informações de veículos, construída com Node.js, Express e Sequelize (ORM) para interagir com um banco de dados MySQL.',
      technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL'],
      status: 'Concluído',
      link: 'https://github.com/VairtlesNehisen/Desafio-Rencart-Atualizado-REACT'
    },

    {
      title: 'My Dynamic Linktree App',
      description: 'Este é um projeto de um Linktree dinâmico e personalizável, construído com React, TypeScript e Tailwind CSS. Ele inclui um painel de administração protegido por autenticação, permitindo que o administrador adicione, edite, remova links e personalize a aparência da página principal em tempo real.',
      technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Firebase'],
      status: 'Em desenvolvimento',
      link: '#'

    }
  ];

  return (
    <section id="projetos" className="py-20 bg-slate-900 text-gray-100">
      <div className="container mx-auto px-4 max-w-6xl ">
        <h2 className=" text-3xl md:text-4xl font-bold gradient-text text-center ">Meus Projetos</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-2 flex-grow">{project.description}</p>
              
              <div className="mb-2">
                <h4 className="text-sm text-gray-400 mb-3">Tecnologias utilizadas:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`text-xs px-3 py-1 rounded-full ${
                        techIndex === 0 ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-700/50 text-gray-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-auto">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Concluído' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {project.status}
                </span>
                <a 
                  href={project.link} 
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center"
                >
                  Detalhes
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}