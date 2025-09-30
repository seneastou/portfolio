'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

type HeaderProps = {
  textColor?: string
}

export default function Header({ textColor = 'text-indigo-500' }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const hoverColor =
    {
      'text-fuchsia-700': 'hover:text-fuchsia-900',
      'text-red-600': 'hover:text-red-800',
      'text-indigo-500': 'hover:text-indigo-700',
    }[textColor] || 'hover:text-gray-800'

  const links = [
    { name: 'Accueil', href: '/accueil' },
    { name: 'Projets', href: '/projets' },
    { name: 'Contact', href: '/contacts' },
  ]

  return (
    <header
      className={`w-full sticky top-0 z-50 bg-transparent py-4 px-6 font-bold text-sm tracking-wide ${textColor}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center" role="navigation" aria-label="Navigation principale">
        
        {/* Contact gauche */}
        <address className="not-italic flex gap-4 items-center flex-wrap">
          <a href="mailto:fallastou2@gmail.com" className={`underline transition ${hoverColor}`}>
            fallastou2@gmail.com
          </a>
          <span aria-hidden="true">✨</span>
          <span className="uppercase hidden sm:inline">Disponible immédiatement</span>
        </address>

        {/* Identité centrale - visible seulement sur md+ */}
        <div className="text-center hidden md:block">
          <span className={`font-extrabold text-base leading-none ${textColor}`}>
            ASTOU<br />SENE
          </span>
        </div>

        {/* Navigation desktop */}
        <nav className={`gap-6 uppercase text-sm hidden md:flex ${textColor}`} aria-label="Menu">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className={`transition ${hoverColor}`}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icône menu burger (mobile) */}
        <button
          className="md:hidden text-xl focus:outline-none z-[60]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile déroulant (petit bloc sous le header) */}
      {isOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 ${textColor}`}>
          <nav className="flex flex-col gap-4 text-sm uppercase font-semibold">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition ${hoverColor}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
