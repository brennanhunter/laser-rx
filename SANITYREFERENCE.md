import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}


// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity";
import { client } from './client'

export const { sanityFetch, SanityLive } = defineLive({ 
  client: client.withConfig({ 
    // Live content is currently only available on the experimental API
    // https://www.sanity.io/docs/api-versioning
    apiVersion: 'vX' 
  }) 
});


import blogPost from './blogPost'

export const schema = {
  types: [blogPost],
}

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(160)
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'PC Repair', value: 'pc-repair' },
          { title: 'Web Design', value: 'web-design' },
          { title: 'Tech Reviews', value: 'tech-reviews' },
          { title: 'Data Recovery', value: 'data-recovery' },
          { title: 'Networking', value: 'networking' },
          { title: 'Gaming', value: 'gaming' },
          { title: 'Security', value: 'security' },
          { title: 'DeLand Tech Tips', value: 'deland-tech-tips' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      placeholder: '5 min read',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Hunter @ Xtremery',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' }
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              },
              {
                title: 'Affiliate Link',
                name: 'affiliateLink',
                type: 'object',
                fields: [
                  {
                    title: 'Product Name',
                    name: 'productName',
                    type: 'string'
                  },
                  {
                    title: 'Affiliate URL',
                    name: 'affiliateUrl',
                    type: 'url'
                  },
                  {
                    title: 'Price',
                    name: 'price',
                    type: 'string'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: { hotspot: true }
        },
        {
          name: 'affiliateProduct',
          title: 'Affiliate Product',
          type: 'object',
          fields: [
            {
              name: 'productName',
              title: 'Product Name',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2
            },
            {
              name: 'affiliateUrl',
              title: 'Affiliate URL',
              type: 'url'
            },
            {
              name: 'price',
              title: 'Price',
              type: 'string'
            },
            {
              name: 'image',
              title: 'Product Image',
              type: 'image'
            }
          ]
        },
        {
          name: 'tipBox',
          title: 'Tip Box',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Tip Title',
              type: 'string'
            },
            {
              name: 'content',
              title: 'Tip Content',
              type: 'text',
              rows: 3
            }
          ]
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Display this post prominently on the blog homepage'
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Override the default title for SEO (60 chars max)',
      validation: Rule => Rule.max(60)
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
      description: 'Meta description for search engines (160 chars max)',
      validation: Rule => Rule.max(160)
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    })
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'featuredImage',
      category: 'category'
    },
    prepare(selection) {
      const { author, category } = selection;
      return {
        ...selection,
        subtitle: `${category} by ${author}`
      };
    }
  }
});

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-06-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Xtremery Blog')
    .items([
      S.documentTypeListItem('blogPost').title('Blog Posts'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['blogPost'].includes(item.getId()!),
      ),
    ])

    /**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <NextStudio config={config} />
}


export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  featuredImage: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  } | null;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
  content: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
  tags?: string[];
  featured?: boolean;
}

export interface PortableTextBlock {
  _type: string;
  _key: string;
  children?: PortableTextChild[];
  style?: string;
  markDefs?: MarkDef[];
  [key: string]: unknown;
}

export interface PortableTextChild {
  _type: 'span';
  text: string;
  marks?: string[];
  _key: string;
}

export interface MarkDef {
  _type: string;
  _key: string;
  [key: string]: unknown;
}

export interface PortableTextImageValue {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
}

export interface AffiliateProductValue {
  _type: 'affiliateProduct';
  productName: string;
  description: string;
  affiliateUrl: string;
  price?: string;
  image?: PortableTextImageValue;
}

export interface TipBoxValue {
  _type: 'tipBox';
  title: string;
  content: string;
}

export interface LinkMark {
  _type: 'link';
  href: string;
}

export interface AffiliateLinkMark {
  _type: 'affiliateLink';
  affiliateUrl: string;
  productName?: string;
  price?: string;
}