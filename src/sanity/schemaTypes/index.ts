import { type SchemaTypeDefinition } from 'sanity'
import { promotion } from './promotion'
import { businessSettings } from './businessSettings'

console.log('Loading promotion schema:', promotion)

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [promotion, businessSettings],
}
