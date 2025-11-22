import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Laser RX Content')
    .items([
      S.documentTypeListItem('promotion').title('Promotions'),
      S.divider(),
      // Business Settings as a singleton
      S.listItem()
        .title('Business Settings')
        .child(
          S.document()
            .schemaType('businessSettings')
            .documentId('businessSettings')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['promotion', 'businessSettings'].includes(item.getId()!),
      ),
    ])
