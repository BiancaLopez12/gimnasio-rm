'use client';

import Image from 'next/image';
import { useState } from 'react';

// Componente para el formulario de inicio de sesión
const LoginForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full relative">
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600">Iniciar Sesión</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-400">Usuario</label>
            <input
              type="text"
              id="username"
              className="w-full mt-1 p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-red-600"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-400">Contraseña</label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-red-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
          >
            Entrar
          </button>
        </form>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Componente para el formulario de registro
const RegisterForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full relative">
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600">Registrarse</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400">Nombre</label>
            <input
              type="text"
              id="name"
              className="w-full mt-1 p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-red-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="apellido" className="block text-gray-400">Apellido</label>
            <input
              type="text"
              id="apellido"
              className="w-full mt-1 p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-red-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="regUsername" className="block text-gray-400">Usuario</label>
            <input
              type="text"
              id="regUsername"
              className="w-full mt-1 p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-red-600"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="regPassword" className="block text-gray-400">Contraseña</label>
            <input
              type="password"
              id="regPassword"
              className="w-full mt-1 p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-red-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
          >
            Registrarse
          </button>
        </form>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default function HomePage() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Header */}
      <header className="bg-gray-800 py-4 px-8 flex justify-between items-center">
        {/* Logo y nombre del club */}
        <div className="flex items-center space-x-4">
          <Image
            src="/rm-logo.png"
            alt="RM Training Logo"
            width={70}
            height={70}
            className="rounded-full"
          />
           <h1 className="text-5xl font-bold text-center text-red-600 mb-4">
          Training RM
        </h1>
        </div>
        {/* Botones de navegación */}
        <nav className="flex items-center space-x-8">
          <button
            onClick={() => {
              setShowLoginForm(true);
              setShowRegisterForm(false);
            }}
            className="hover:text-red-600 transition-colors"
          >
            INICIAR SESION
          </button>
          <button
            onClick={() => {
              setShowRegisterForm(true);
              setShowLoginForm(false);
            }}
            className="hover:text-red-600 transition-colors"
          >
            REGISTRARSE
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative w-full h-[calc(100vh-64px)] flex flex-col justify-center items-center p-8">
        <p className="text-xl text-center text-gray-400 max-w-2xl">
          Tu gimnasio para alcanzar tus metas de fitness. Únete a nuestra comunidad.
        </p>
      </main>

      {/* Footer-like section at the bottom of the screen */}
      <footer className="bg-gray-800 py-2 text-center text-gray-400">
        <div className="flex items-center space-x-6 justify-center">
          <div className="h-10 w-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-400">
            <span className="text-xl"></span>
          </div>
          <div className="h-10 w-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-400">
            <span className="text-xl"></span>
          </div>
        </div>
      </footer>

      {/* Renderizado condicional de los formularios */}
      {showLoginForm && <LoginForm onClose={() => setShowLoginForm(false)} />}
      {showRegisterForm && <RegisterForm onClose={() => setShowRegisterForm(false)} />}
    </div>
  );
}
