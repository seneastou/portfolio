'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// ✅ Composant réutilisable pour les logos animés
const AnimatedLogo = ({
  src,
  alt,
  delay = 0,
  width = 60,
  height = 60,
}: {
  src: string
  alt: string
  delay?: number
  width?: number
  height?: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.2 }}
    transition={{ duration: 0.3, delay }}
  >
    <Image src={src} alt={alt} width={width} height={height} />
  </motion.div>
)

export default function Hero() {
  return (
    <>
      <Header textColor="text-indigo-500" />
      <section className="min-h-screen flex flex-col justify-center items-center px-4 bg-[#fff7f1] text-black">
        {/* Présentation centrée */}
        <div className="max-w-3xl w-full flex flex-col items-center text-center">
          <h1
            className="text-[8vw] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 to-indigo-700 drop-shadow-[4px_4px_0_rgba(140,122,230,1)] transition-transform duration-500 hover:rotate-1 hover:scale-105"
          >
            Développeuse <br /> Web et Mobile
          </h1>

          <p className="mt-8 text-indigo-600 font-semibold tracking-wide text-sm md:text-base max-w-xl">
            Je suis une développeuse web junior. Je maîtrise plusieurs langages et frameworks modernes.
          </p>
        </div>

        {/* Titre section compétences */}
        <h2 className="text-xl font-bold text-indigo-600 mt-16 mb-4">
          🛠️ Compétences techniques
        </h2>

        {/* Grille des compétences */}
        <div
          className="mt-6 grid grid-cols-2 gap-10 w-full max-w-4xl text-center"
          aria-label="Stacks techniques"
        >
          {/* Front-end */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">Front-end</h3>
            <div className="flex gap-8 flex-wrap justify-center">
              <AnimatedLogo src="/images/html.png" alt="Logo HTML5" delay={0.1} />
              <AnimatedLogo src="/images/css-3.png" alt="Logo CSS3" delay={0.2} />
              <AnimatedLogo src="/images/js.png" alt="Logo JavaScript" delay={0.3} />
              <AnimatedLogo src="/images/react.png" alt="Logo React.js" delay={0.4} />
              <AnimatedLogo src="/images/next.png" alt="Logo Next.js" delay={0.5} />
              <AnimatedLogo src="/images/tailwindCSS.png" alt="Logo Tailwind CSS" delay={0.6} />
            </div>
          </div>

          {/* Back-end */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">Back-end</h3>
            <div className="flex gap-8 flex-wrap justify-center">
              <AnimatedLogo src="/images/node.png" alt="Logo Node.js" delay={0.1} />
              <AnimatedLogo src="/images/sql.png" alt="Logo SQL" delay={0.2} />
              <AnimatedLogo src="/images/Laravel.png" alt="Logo Laravel" width={80} height={80} delay={0.3} />
            </div>
          </div>

          {/* Outils */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">Outils</h3>
            <div className="flex gap-8 flex-wrap justify-center">
              <AnimatedLogo src="/images/git.png" alt="Logo Git" delay={0.1} />
              <AnimatedLogo src="/images/github.png" alt="Logo GitHub" delay={0.2} />
            </div>
          </div>

          {/* Langage commun */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">Langage commun</h3>
            <div className="flex gap-8 flex-wrap justify-center">
              <AnimatedLogo src="/images/typeScript.png" alt="Logo TypeScript" delay={0.1} />
            </div>
          </div>
        </div>

        {/* Titre section soft skills */}
<h2 className="text-xl font-bold text-indigo-600 mt-16 mb-4">
  💡 Soft Skills
</h2>

{/* Liste animée des soft skills */}
<div className="mt-6 grid grid-cols-2 gap-6 w-full max-w-4xl text-center">
  {[
    {
      title: "Esprit d'équipe",
      desc: "J’aime collaborer, échanger et construire des solutions collectives.",
      delay: 0.1,
    },
    {
      title: "Curiosité",
      desc: "Toujours motivée à apprendre et explorer de nouvelles technologies.",
      delay: 0.2,
    },
    {
      title: "Autonomie",
      desc: "Capable d’avancer seule tout en sachant quand demander de l’aide.",
      delay: 0.3,
    },
    {
      title: "Adaptabilité",
      desc: "À l’aise dans différents environnements et capable de m’adapter rapidement.",
      delay: 0.4,
    },
  ].map((skill, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: skill.delay }}
      className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
    >
      <p className="text-md font-semibold text-indigo-700">{skill.title}</p>
      <p className="text-gray-600 text-sm mt-2">{skill.desc}</p>
    </motion.div>
  ))}
</div>

      </section>
      <Footer textColor="text-indigo-500" />
    </>
  )
}
