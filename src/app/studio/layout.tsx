/**
 * Studio Layout - This layout is applied to all routes under /studio
 * It provides a minimal layout that allows the Studio to function properly
 * while still being contained within the site structure
 */

'use client'

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="studio-container">
      <style jsx global>{`
        .studio-container {
          min-height: calc(100vh - 160px); /* Account for header/footer */
          background: #f9fafb;
          padding: 1rem 2rem 2rem 2rem;
        }
        
        .studio-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
          overflow: hidden;
          height: calc(100vh - 220px); /* Give more room for scrolling */
          min-height: 600px;
        }
        
        /* Override Sanity Studio styles to ensure proper scrolling */
        .studio-wrapper [data-ui="RootLayout"] {
          height: 100% !important;
          overflow: auto !important;
        }
        
        /* Ensure document forms can scroll properly */
        .studio-wrapper [data-ui="DocumentFormWrapper"],
        .studio-wrapper [data-ui="DocumentPane"] {
          height: 100% !important;
          overflow-y: auto !important;
        }
      `}</style>
      
      <div className="studio-wrapper">
        <div style={{ 
          padding: '0.75rem 1.5rem', 
          borderBottom: '1px solid #e5e7eb',
          background: '#f9fafb',
          flexShrink: 0
        }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: '1.25rem', 
            fontWeight: '600', 
            color: '#111827' 
          }}>
            Content Management
          </h1>
        </div>
        <div style={{ 
          height: 'calc(100% - 50px)',
          overflow: 'auto'
        }}>
          {children}
        </div>
      </div>
    </div>
  )
}