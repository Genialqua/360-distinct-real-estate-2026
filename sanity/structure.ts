import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('blog').title('Blog Posts'), // <- updated from 'post' to 'blog'
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('property').title('Properties'),
      S.documentTypeListItem('comment').title('Comments'),
      S.divider(),
      // Include any other document types that are not explicitly listed above
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() && !['blog', 'category', 'author', 'property', 'comment'].includes(item.getId()!)
      ),
    ])
