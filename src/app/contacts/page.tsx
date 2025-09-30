'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Header textColor="text-fuchsia-700" />
      <div className="text-center mt-16">
      <h1 className="text-5xl font-extrabold text-fuchsia-700 uppercase tracking-tight">
        Open to work
      </h1>
    </div>
      <section className="min-h-screen bg-[#fff7f1] text-black flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-16">
       
        <div className="relative w-[300px] h-[400px]">
          <div className="absolute top-4 left-4 rotate-[-8deg] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/devimage.jpeg"
              alt="Photo travail"
              width={250}
              height={300}
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Texte de présentation */}
        <div className="max-w-xl text-left">
          <h2 className="text-3xl font-extrabold text-fuchsia-700 mb-6 leading-tight">
            JE TRAVAILLE SUR DES PROJETS WEB, DU DÉVELOPPEMENT FRONT À LA CONCEPTION COMPLÈTE D’APPLICATIONS.
          </h2>
          <p className="text-lg text-gray-800 mb-6 font-semibold">
            J’aide à créer des solutions web performantes, accessibles, modernes.
            J’aime travailler avec React, Next.js, Node.js, Tailwind CSS et bien plus encore.
          </p>

          <p className="text-black font-bold text-md mb-4">
  Développeuse web junior – disponible en freelance ou CDI – motivée pour apprendre et contribuer à vos projets.
</p>
          <p className="text-black font-bold text-md mb-4">
            Vous avez un projet ? Contactez-moi par mail :
          </p>
          <a
            href="mailto:fallastou2@gmail.com"
            className="underline text-fuchsia-700 font-extrabold hover:text-fuchsia-900 transition"
          >
            fallastou2@gmail.com
          </a>
          <div className="mt-6">
            <a
              href="/CV/CVAstouDev.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block underline text-fuchsia-700 font-extrabold hover:text-fuchsia-900 transition"
            >
              Voir mon CV →
            </a>
          </div>
        </div>
    
      </section>

      <Footer textColor="text-fuchsia-700" />
    </>
  )
}
