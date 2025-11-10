'use client';
import React from 'react';

interface FooterProps {
  textColor?: string; 
}

export default function Footer({ textColor = 'text-black' }: FooterProps) {
  const isDefault = textColor === 'text-black';
  const emailColor = isDefault ? 'text-indigo-500' : `${textColor}`;
  const emailHover = isDefault ? 'hover:text-indigo-600 hover:decoration-indigo-600' : `hover:${textColor}/80`;

  return (
    <footer className="w-full bg-[#fff7f1] py-10 px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 text-black">
        {/* Colonne gauche : Identité + Réseaux */}
        <div>
          <h1 className={`text-5xl font-extrabold leading-tight ${textColor}`}>
            ASTOU SENE
          </h1>

          <div className="mt-8">
            <div className="flex items-center flex-wrap gap-4">
              <p className="font-bold uppercase text-sm whitespace-nowrap">Réseaux</p>
              <nav aria-label="Réseaux sociaux" className={`flex flex-wrap gap-4 font-semibold text-sm underline ${textColor}`}>
                <a href="https://github.com/seneastou" target="_blank" rel="noopener noreferrer" aria-label="Github Astou SENE">Github</a>
                <a href="https://www.linkedin.com/in/astou-fall-sene-32b0771a1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Astou SENE">LinkedIn</a>
              </nav>
            </div>
          </div>
        </div>

        {/* Colonne centrale */}
        <div className="hidden md:block" />

        {/* Colonne droite : Contact */}
        <div className="flex flex-col justify-between h-full text-right">
          <div className="mt-8">
            <p className="uppercase font-bold text-sm mb-1">Un projet en tête ?</p>
            <p className="mt-4">
              <span className="mr-1">→</span>
              <a
                href="mailto:fallastou2@gmail.com"
                className={`font-semibold underline decoration-current ${emailColor} ${emailHover} transition`}
              >
                fallastou2@gmail.com
              </a>
            </p>
          </div>

          <p className="mt-8 text-xs text-gray-700">© 2025 Astou SENE</p>
        </div>
      </div>
    </footer>
  );
}
