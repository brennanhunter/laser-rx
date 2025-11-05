import { type SchemaTypeDefinition } from 'sanity'
import { promotion } from './promotion'

console.log('Loading promotion schema:', promotion)

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [promotion],
}
