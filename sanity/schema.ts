import type { SchemaTypeDefinition } from 'sanity'
import { property } from './schemaTypes/property'
import { blog } from './schemaTypes/blog'
import comment from './schemaTypes/comment'
import { author } from './schemaTypes/author'
import { video } from './schemaTypes/video'
import { category } from './schemaTypes/category'

// export the array directly
export const schemaTypes: SchemaTypeDefinition[] = [property, blog, comment, author, video, category]
