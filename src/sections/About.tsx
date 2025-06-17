import React from 'react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-slate-900 text-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Sobre Mim</h2>
        
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Sou um estudante apaixonado por <span className="text-blue-400">Ciência da Computação</span>, focado em 
            desenvolvimento de software e soluções tecnológicas.
          </p>
          
          <p>
            Atualmente, estou em uma jornada de **aprendizado contínuo em React e TypeScript**, aplicando meus conhecimentos em projetos práticos. Estou desenvolvendo uma plataforma de venda de carros e um site de vagas de emprego, buscando criar soluções 
            <span className="text-purple-400"> eficientes e intuitivas</span>.
          </p>
          
          <p>
            Estou aprofundando meus conhecimentos em **React e TypeScript** através da construção de projetos, com o objetivo de criar soluções 
            <span className="text-purple-400"> robustas e com ótima experiência do usuário</span>.
          </p>
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white border-b border-slate-700 pb-2">Educação</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <div>
                  <p className="font-medium">Bacharelado em Ciência da Computação</p>
                  <p className="text-gray-400">Em andamento</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white border-b border-slate-700 pb-2">Interesses</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Desenvolvimento Web',
                'Inteligência Artificial',
                'Análise de Dados',
                'Internet das Coisas (IoT)',
                'Blockchain',
                'Segurança da Informação',
                'Desenvolvimento de Jogos',
                'Computação em Nuvem',
                'Machine Learning',
                'Infraestrutura de TI',

              ].map((interest) => (
                <div key={interest} className="flex items-center">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}