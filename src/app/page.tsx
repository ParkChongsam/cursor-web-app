import React from 'react'
import Hero from '@/components/layout/Hero'
import EditorPreview from '@/components/layout/EditorPreview'

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <EditorPreview />
    </div>
  )
}
