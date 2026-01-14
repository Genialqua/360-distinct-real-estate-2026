'use client'

/**
 * Sanity Studio configuration mounted at `/app/360distinct/[[...tool]]/page.tsx`
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// API settings
import { apiVersion, dataset, projectId } from './sanity/env'

// Schemas and structure
import { schemaTypes } from './sanity/schema' // fixed export
import { structure } from './sanity/structure'

export default defineConfig({
  basePath: '/360distinct',
  projectId,
  dataset,
  schema: { types: schemaTypes }, // <-- use schemaTypes array
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
