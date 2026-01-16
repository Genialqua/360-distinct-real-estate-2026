'use client' // Must remain if rendering NextStudio in the browser

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export const dynamic = 'force-static' // optional, ensures static rendering

export default function StudioPage() {
  return <NextStudio config={config} />
}


