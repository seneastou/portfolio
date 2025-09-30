'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const projects = [
  {
    title: 'SnipShare',
    description:
      "Application de partage de snippets entre développeurs avec React et Vite, PostgreSQL et Tailwind CSS.",
    image: '/images/snipShare.png',
    video: '/Video/snipshare.mp4',
    link: 'https://github.com/seneastou/SnipShare',
  },
  {
    title: 'Blog Node.js',
    description:
      "Blog minimaliste réalisé avec Node.js, Express, MongoDB et EJS.",
    image: '/images/Login.png',
    video: '/Video/blog.mp4',
    link: 'https://github.com/seneastou/blog-nodejs',
  },
]

export default function ProjectsPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <>
      <Header textColor="text-red-600" />
      <div className="text-center mt-16">
        <h1 className="text-5xl font-extrabold text-red-600 uppercase tracking-tight">
          Mes Projets
        </h1>
      </div>

      <main className="min-h-screen bg-[#fff7f1] text-black py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <p className="text-gray-700 text-lg">
            Voici quelques projets personnels qui illustrent mon parcours. Ce
            sont des expériences à travers lesquelles j’ai pu expérimenter,
            apprendre et surtout renforcer ma passion pour le développement web.
            Ma motivation est de continuer à créer, améliorer et relever de
            nouveaux défis.
          </p>
        </div>

        {/* Liste des projets */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              {project.video ? (
                <video
                  src={project.video}
                  className="rounded-md object-cover mb-4 w-full h-[300px] cursor-pointer"
                  muted
                  autoPlay
                  loop
                  onClick={() => setSelectedVideo(project.video)}
                />
              ) : (
                <Image
                  src={project.image}
                  alt={`Illustration du projet ${project.title}`}
                  width={600}
                  height={300}
                  priority
                  className="rounded-md object-cover mb-4"
                />
              )}

              <h2 className="text-xl font-bold text-red-600 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <Link
                href={project.link}
                className="text-red-500 underline hover:text-red-700"
              >
                Voir le projet →
              </Link>
            </div>
          ))}
        </div>
      </main>

      {/* Modal vidéo plein écran */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold"
            >
              ✕
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      <Footer textColor="text-red-600" />
    </>
  )
}
