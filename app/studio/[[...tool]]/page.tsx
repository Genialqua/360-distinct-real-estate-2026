'use client' // Required because NextStudio is a client component

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export const dynamic = 'force-static' // Ensures static rendering

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return (
    <div className="h-screen w-screen">
      <NextStudio config={config} />
    </div>
  )
}

