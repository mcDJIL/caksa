import { useEffect } from "react";

const SITE_NAME = "CAKSA - Cakrawala Skala";
const DEFAULT_SITE_URL = "https://caksa.id";
const SITE_URL = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, "");

type SeoConfig = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  noindex?: boolean;
};

const defaultDescription =
  "CAKSA is the international UAV research team from Politeknik Elektronika Negeri Surabaya, building Indonesian aerial research for global competition and partnership.";

const pageSeo: Record<string, SeoConfig> = {
  "/": {
    title: "CAKSA UAV Research Team | Politeknik Elektronika Negeri Surabaya",
    description: defaultDescription,
    path: "/",
    keywords: ["CAKSA", "Cakrawala Skala", "UAV research team", "PENS", "drone research Indonesia"],
  },
  "/research": {
    title: "Research and UAV Projects | CAKSA PENS",
    description:
      "Explore CAKSA UAV research projects, from Gacor X1 and Galakasa to rotary-wing airframes developed by the PENS aerial research team.",
    path: "/research",
    keywords: ["CAKSA research", "UAV projects", "Gacor X1", "Galakasa", "PENS drone team"],
  },
  "/achievements": {
    title: "International UAV Achievements | CAKSA PENS",
    description:
      "See CAKSA's verified international competition record across TEKNOFEST and SAFMC, including UAV rankings, runner-up results, and mission documentation.",
    path: "/achievements",
    keywords: ["CAKSA achievements", "TEKNOFEST UAV", "SAFMC", "international UAV competition"],
  },
  "/about": {
    title: "About CAKSA | International UAV Research Team",
    description:
      "Learn about CAKSA, the Cakrawala Skala UAV research team rooted in the Aeronautics PENS legacy and guided by Gala Akasa Wirya Satya.",
    path: "/about",
    keywords: ["about CAKSA", "Cakrawala Skala", "Aeronautics PENS", "Gala Akasa Wirya Satya"],
  },
  "/partnership": {
    title: "UAV Research Sponsorship and Partnership | CAKSA",
    description:
      "Partner with CAKSA to support Indonesian UAV research through Platinum, Gold, Silver, or custom sponsorship packages with field and digital brand exposure.",
    path: "/partnership",
    keywords: ["CAKSA sponsorship", "UAV research sponsorship", "PENS partnership", "drone team sponsor"],
  },
  "/contact": {
    title: "Contact CAKSA | Partnership and Join Us",
    description:
      "Contact CAKSA for sponsorship, UAV research collaboration, team updates, and joining the Cakrawala Skala formation at PENS Surabaya.",
    path: "/contact",
    keywords: ["contact CAKSA", "join CAKSA", "partnershipcaksa@gmail.com", "PENS Surabaya"],
  },
  "/recruitment": {
    title: "Join CAKSA Open Recruitment | UAV Research Team",
    description:
      "Apply for CAKSA open recruitment and explore technical or non-technical roles in the PENS international UAV research team.",
    path: "/recruitment",
    keywords: ["CAKSA recruitment", "join CAKSA", "UAV team recruitment", "PENS student team"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CAKSA",
  alternateName: "Cakrawala Skala",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  email: "partnershipcaksa@gmail.com",
  slogan: "Gala Akasa Wirya Satya",
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: "Politeknik Elektronika Negeri Surabaya",
    url: "https://www.pens.ac.id/",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Raya ITS, Keputih, Kec. Sukolilo",
    addressLocality: "Surabaya",
    addressRegion: "Jawa Timur",
    postalCode: "60111",
    addressCountry: "ID",
  },
  sameAs: [
    "https://instagram.com/caksaeepis",
    "https://www.youtube.com/@CakrawalaSkalaDirgantara",
    "https://linktr.ee/caksa_team",
  ],
};

function getAbsoluteUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

function setMeta(selector: string, createAttributes: Record<string, string>, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    Object.entries(createAttributes).forEach(([key, value]) => element?.setAttribute(key, value));
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function setJsonLd(id: string, value: unknown) {
  let element = document.getElementById(id) as HTMLScriptElement | null;
  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(value);
}

export function getSeoConfig(pathname: string): SeoConfig {
  return pageSeo[pathname] ?? {
    title: "Page Not Found | CAKSA",
    description: "The requested CAKSA page could not be found. Return to the CAKSA UAV research team homepage.",
    path: pathname,
    keywords: ["CAKSA"],
    noindex: true,
  };
}

export function useRouteSeo(pathname: string) {
  useEffect(() => {
    const seo = getSeoConfig(pathname);
    const canonical = getAbsoluteUrl(seo.path);
    const fullTitle = seo.title.includes("CAKSA") ? seo.title : `${seo.title} | ${SITE_NAME}`;

    document.title = fullTitle;
    setCanonical(canonical);
    setMeta('meta[name="description"]', { name: "description" }, seo.description);
    setMeta('meta[name="keywords"]', { name: "keywords" }, seo.keywords.join(", "));
    setMeta('meta[name="robots"]', { name: "robots" }, seo.noindex ? "noindex, nofollow" : "index, follow");
    setMeta('meta[property="og:title"]', { property: "og:title" }, fullTitle);
    setMeta('meta[property="og:description"]', { property: "og:description" }, seo.description);
    setMeta('meta[property="og:url"]', { property: "og:url" }, canonical);
    setMeta('meta[property="og:site_name"]', { property: "og:site_name" }, SITE_NAME);
    setMeta('meta[property="og:type"]', { property: "og:type" }, "website");
    setMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary");
    setMeta('meta[name="twitter:title"]', { name: "twitter:title" }, fullTitle);
    setMeta('meta[name="twitter:description"]', { name: "twitter:description" }, seo.description);

    setJsonLd("caksa-organization-schema", organizationSchema);
    setJsonLd("caksa-webpage-schema", {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: fullTitle,
      description: seo.description,
      url: canonical,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
      about: {
        "@type": "Thing",
        name: "UAV research and Indonesian aerial technology",
      },
    });
  }, [pathname]);
}
