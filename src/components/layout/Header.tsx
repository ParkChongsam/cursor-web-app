'use client'

import React from 'react'
import Link from 'next/link'
import { Download } from 'lucide-react'

const Header = () => {
  return (
    <header className="w-full h-[60px] bg-white border-b border-gray-200">
      <div className="container mx-auto h-full px-8 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-purple-800">
          CursorAI
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/pricing" className="text-gray-700 hover:text-purple-800">PRICING</Link>
          <Link href="/features" className="text-gray-700 hover:text-purple-800">FEATURES</Link>
          <Link href="/enterprise" className="text-gray-700 hover:text-purple-800">ENTERPRISE</Link>
          <Link href="/blog" className="text-gray-700 hover:text-purple-800">BLOG</Link>
          <Link href="/forum" className="text-gray-700 hover:text-purple-800">FORUM</Link>
          <Link href="/careers" className="text-gray-700 hover:text-purple-800">CAREERS</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/signin" className="text-gray-700 hover:text-purple-800">
            SIGN IN
          </Link>
          <Link 
            href="/download" 
            className="flex items-center space-x-2 bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            <Download size={20} />
            <span>DOWNLOAD</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header 