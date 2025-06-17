import React from 'react';

export default function Hero() {
    return (
      <section id="início" className="min-h-screen flex items-center justify-center pt-16 bg-slate-900">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Olá, sou um <span className="gradient-text">Desenvolvedor</span> e estudante de <span className="gradient-text">Ciência da Computação</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Transformando ideias em código e construindo soluções inovadoras.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projetos" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg">
                Ver Projetos
              </a>
              <a href="#contato" className="bg-transparent border border-blue-600 text-blue-500 hover:bg-blue-600/10 font-medium py-3 px-6 rounded-lg">
                Entre em Contato
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></div>
              <div className="absolute inset-1 rounded-full bg-slate-900 flex items-center justify-center">
                <svg className="w-40 h-40 md:w-48 md:h-48 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  