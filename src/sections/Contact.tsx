import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contato" className="py-20 bg-slate-900 text-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">Entre em Contato</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold mb-6 text-white">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          
          {/* Informações de Contato */}
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold mb-6 text-white">Informações de contato</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <FaEnvelope className="text-purple-400 mt-1 mr-4" size={20} />
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                  <a href="mailto:seuemail@exemplo.com" className="text-white hover:text-blue-400 transition-colors">
                    seuemail@exemplo.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-purple-400 mt-1 mr-4" size={20} />
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Localização</h4>
                  <p className="text-white">Brasil</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaPhoneAlt className="text-purple-400 mt-1 mr-4" size={20} />
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Telefone</h4>
                  <a href="tel:+5500123456789" className="text-white hover:text-blue-400 transition-colors">
                    (00) 12345-6789
                  </a>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="text-sm text-gray-400 mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="GitHub">
                    <FaGithub size={24} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors" aria-label="Twitter">
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}