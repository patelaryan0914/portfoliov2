import React from "react";
import { siteConfig, siteUrl } from "@/lib/site";

export default function StructuredData() {
  const person = {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: siteConfig.name,
    url: siteUrl,
    image: `${siteUrl}${siteConfig.image}`,
    email: `mailto:${siteConfig.email}`,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: [...siteConfig.knowsAbout],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montreal",
      addressCountry: "CA",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Concordia University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Charusat University",
      },
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${siteConfig.name} — Portfolio`,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: { "@id": `${siteUrl}/#person` },
  };

  const profilePage = {
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profilepage`,
    url: siteUrl,
    name: siteConfig.title,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#person` },
    inLanguage: "en",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [person, website, profilePage],
  };

  return (
    <script
      type="application/ld+json"
      // Structured data for search engines (rich results)
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
