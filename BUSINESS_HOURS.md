# Business Hours Management

## Overview

Business hours are now managed through Sanity CMS and automatically displayed across the website:

- **Home Page** - Contact section and structured data (SEO)
- **Contact Page** - Hours display card
- **Structured Data** - Schema.org format for search engines

## How to Edit Business Hours

1. Navigate to the Sanity Studio at `/studio`
2. Click on **Business Settings** in the sidebar
3. Edit the business hours for each day:
   - **Day**: Pre-selected day of the week
   - **Hours**: Enter hours (e.g., "9:00am - 5:00pm") or "Closed"
   - **Is Closed**: Check this box if the business is closed that day

4. Click **Publish** to save changes
5. Hours will automatically update across all pages

## Default Hours

The default hours are set to:
- **Monday**: Closed
- **Tuesday-Friday**: 9:00am - 5:00pm
- **Saturday**: Closed
- **Sunday**: Closed

## Technical Details

### Files Modified

- **Schema**: `src/sanity/schemaTypes/businessSettings.ts`
- **Queries**: `src/sanity/lib/queries.ts`
- **Utilities**: `src/lib/businessHours.ts`
- **Components**:
  - `src/app/page.tsx` (Home)
  - `src/app/contact/page.tsx` (Contact Page)
  - `src/components/sections/Contact.tsx` (Contact Section)

### How It Works

1. Business hours are stored as a singleton document in Sanity
2. Each page fetches hours using the `BUSINESS_SETTINGS_QUERY`
3. Hours are converted to Schema.org format for SEO
4. Default hours are used as fallback if Sanity data is unavailable

### Schema.org Format

Hours are automatically converted to Schema.org's `openingHours` format:
- Example: `"Tu-Fr 09:00-17:00"` (Tuesday through Friday, 9am to 5pm)
- This helps search engines display accurate business hours in search results

## Troubleshooting

If hours don't update:
1. Clear your browser cache
2. Check the Sanity Studio for any unpublished changes
3. Verify the hours are properly formatted (e.g., "9:00am - 5:00pm")
4. Check the browser console for any errors
