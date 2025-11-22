/**
 * TypeScript types for Sanity documents and fields
 * These will be enhanced once we set up Sanity TypeGen
 */

// =============================================================================
// BASE TYPES
// =============================================================================

export interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

export interface SanityImageAsset {
  _id: string
  _type: 'sanity.imageAsset'
  url: string
  metadata: {
    dimensions: {
      width: number
      height: number
      aspectRatio: number
    }
    lqip?: string
  }
}

export interface SanityImage {
  _type: 'image'
  asset: SanityImageAsset
  alt?: string
  caption?: string
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface Slug {
  _type: 'slug'
  current: string
}

// =============================================================================
// CONTENT TYPES
// =============================================================================

export interface BusinessHour {
  day: string
  hours: string
  isClosed: boolean
}

export interface BusinessSettings extends SanityDocument {
  _type: 'businessSettings'
  businessHours: BusinessHour[]
}

export interface SiteSettings extends SanityDocument {
  _type: 'siteSettings'
  title: string
  description: string
  keywords: string[]
  logo: SanityImage
  favicon: SanityImage
  contactInfo: {
    phone: string
    email: string
    address: string
    hours: string
  }
  socialMedia: {
    facebook?: string
    instagram?: string
    twitter?: string
    youtube?: string
  }
}

export interface HomePage extends SanityDocument {
  _type: 'homePage'
  hero: {
    title: string
    subtitle?: string
    description: string
    ctaText: string
    ctaLink: string
    backgroundImage?: SanityImage
    backgroundVideo?: string
  }
  featuredServices: Service[]
  testimonials: Testimonial[]
}

export interface AboutPage extends SanityDocument {
  _type: 'aboutPage'
  title: string
  description: string
  content: object[] // Rich text content
  teamMembers: TeamMember[]
  clinicImages: SanityImage[]
  certifications: SanityImage[]
}

export interface ContactPage extends SanityDocument {
  _type: 'contactPage'
  title: string
  description: string
  contactInfo: {
    phone: string
    email: string
    address: string
    hours: string
  }
  locationMap?: string
  emergencyContact?: string
}

export interface ServiceCategory extends SanityDocument {
  _type: 'serviceCategory'
  name: string
  slug: Slug
  description: string
  image: SanityImage
  order?: number
  services: Service[]
}

export interface Service extends SanityDocument {
  _type: 'service'
  name: string
  slug: Slug
  shortDescription: string
  longDescription: object[] // Rich text content
  featured: boolean
  featuredImage: SanityImage
  gallery: SanityImage[]
  price: {
    from?: number
    to?: number
    currency: string
    note?: string
  }
  duration: string
  benefits: string[]
  beforeAfterGallery: BeforeAfterGallery[]
  category: ServiceCategory
  relatedServices: Service[]
  testimonials: Testimonial[]
  faqs: {
    question: string
    answer: string
  }[]
  aftercareInstructions: object[] // Rich text content
}

export interface TeamMember extends SanityDocument {
  _type: 'teamMember'
  name: string
  title: string
  bio: object[] // Rich text content
  image: SanityImage
  credentials: string[]
  specialties: string[]
  experience: string
  education: string[]
  order?: number
}

export interface Testimonial extends SanityDocument {
  _type: 'testimonial'
  clientName: string
  rating: number
  text: string
  featured: boolean
  serviceType: string
  beforeAfterImages?: {
    before: SanityImage
    after: SanityImage
  }
  treatmentDate?: string
  verified: boolean
}

export interface BeforeAfterGallery extends SanityDocument {
  _type: 'beforeAfterGallery'
  title: string
  description?: string
  beforeImage: SanityImage
  afterImage: SanityImage
  treatmentType: string
  timeframe: string
  featured: boolean
}

export interface Article extends SanityDocument {
  _type: 'article'
  title: string
  slug: Slug
  excerpt: string
  content: object[] // Rich text content
  featuredImage: SanityImage
  publishedAt: string
  updatedAt?: string
  author: TeamMember
  categories: ArticleCategory[]
  relatedArticles: Article[]
}

export interface ArticleCategory extends SanityDocument {
  _type: 'articleCategory'
  name: string
  slug: Slug
  description?: string
}

// =============================================================================
// QUERY RESULT TYPES
// =============================================================================

export type HomePageData = {
  hero: HomePage['hero']
  featuredServices: Pick<Service, '_id' | 'name' | 'slug' | 'shortDescription' | 'featuredImage' | 'price'>[]
  testimonials: Pick<Testimonial, '_id' | 'clientName' | 'rating' | 'text' | 'serviceType' | 'beforeAfterImages'>[]
}

export type ServicesPageData = Pick<
  Service,
  '_id' | 'name' | 'slug' | 'shortDescription' | 'featuredImage' | 'price' | 'category'
>[]

export type ServicePageData = Service & {
  relatedServices: Pick<Service, '_id' | 'name' | 'slug' | 'shortDescription' | 'featuredImage' | 'price'>[]
}

// =============================================================================
// UTILITY TYPES
// =============================================================================

export type WithChildren<T = object> = T & { children: React.ReactNode }

export type PageProps<T = object> = {
  params: { slug?: string } & T
  searchParams: { [key: string]: string | string[] | undefined }
}

export type LayoutProps = WithChildren<{
  params: { slug?: string }
}>

// =============================================================================
// SANITY QUERY TYPES (will be auto-generated with TypeGen)
// =============================================================================

// These will be replaced by auto-generated types from Sanity TypeGen
export type SiteSettingsResult = SiteSettings
export type HomePageResult = HomePage
export type ServicesResult = Service[]
export type ServiceResult = Service
export type TestimonialsResult = Testimonial[]
export type TeamMembersResult = TeamMember[]