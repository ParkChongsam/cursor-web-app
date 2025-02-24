'use client'

import React from 'react'
import { Download } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-r from-purple-900 to-green-500 text-white py-20">
      <div className="container mx-auto px-8 text-center">
        <h1 className="text-5xl font-bold mb-6">
          The AI Code Editor
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Boost your productivity with AI-powered coding assistance. Write better code faster with intelligent suggestions and automated workflows.
        </p>
        <Link
          href="/download"
          className="inline-flex items-center space-x-2 bg-white text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100"
        >
          <Download size={24} />
          <span>DOWNLOAD FOR WIN32</span>
        </Link>
      </div>
    </section>
  )
}

export default Hero 