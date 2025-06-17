import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll'; // Importe o componente Link
//import logo from '../assets/logo-removebg.png';
  // ajuste o caminho conforme a estrutura
import logo from '../assets/logo-removebg.png';  



export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Configurações comuns para os links
  const menuItems = ['Início', 'Sobre', 'Habilidades', 'Projetos', 'Contato'];
  
  const linkProps = {
    smooth: true,
    duration: 500,
    offset: -70, // Ajuste conforme necessário para compensar a altura do navbar
    spy: true,
    activeClass: 'text-white font-medium' // Estilo quando a seção está ativa
  };

  return (
    <header className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-800">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <span className="gradient-text"></span>
            <img
                src={logo}
                alt="Logo DevPortfólio"
                className="h-16 w-auto"
            />
          <span className="gradient-text"></span>
        </div>
        
        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              {...linkProps}
              className="text-gray-300 hover:text-white cursor-pointer nav-link"
            >
              {item}
            </Link>
          ))}
        </div>
        
        {/* Botão Mobile */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden text-white focus:outline-none"
          aria-label="Menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </nav>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 transition-all duration-300 ease-in-out">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                {...linkProps}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-white py-2 cursor-pointer transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
} 