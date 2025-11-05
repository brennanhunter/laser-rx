import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Laser RX Content')
    .items([
      S.documentTypeListItem('promotion').title('Promotions'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['promotion'].includes(item.getId()!),
      ),
    ])
