export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "RefractWeb",
          legalName: "Pulse Partners AI LLC DBA RefractWeb",
          url: "https://refractweb.com",
          logo: "https://www.refractweb.com/logo.svg",
          description:
            "We merge the precision of code with the power of design, orchestrating a single identity that signals authority everywhere.",
          foundingDate: "2024",
          areaServed: "Worldwide",
          sameAs: [
            "https://twitter.com/refractweb",
            "https://www.awwwards.com/sites/refractweb",
          ],
          member: [
            {
              "@type": "Person",
              name: "Jake Young",
              jobTitle: "Co-Founder and CEO",
            },
            {
              "@type": "Person",
              name: "Adam Guarino",
              jobTitle: "Co-Founder and COO",
            },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software / AI" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "3D Animation" } },
            ],
          },
        }),
      }}
    />
  )
}

export function WebSiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "RefractWeb",
          url: "https://refractweb.com",
        }),
      }}
    />
  )
}