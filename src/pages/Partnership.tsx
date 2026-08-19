import { useState } from "react";
import { Link } from "react-router";
import PageHero from "../components/sections/PageHero";
import { images, sponsorImages } from "../data/images";
import { Eyebrow } from "../components/ui/editorial";

export default function Partnership() {
  const packageVisuals = [
    { tier: "PLATINUM", amount: "FROM IDR 20M", mark: "XL", description: "A high-visibility partnership across the vehicle, field equipment, digital channels, and international campaign material.", placements: ["AIRCRAFT", "REMOTE", "LAPTOP", "FLAG"], image: "https://images.unsplash.com/photo-1761645502922-fe3dde9f7341?auto=format&fit=crop&w=1200&q=80", slots: ["PLATINUM / 01", "PLATINUM / 02"] },
    { tier: "GOLD", amount: "IDR 15M—19.9M", mark: "L", description: "A brand presence built for the places CAKSA works, travels, publishes, and documents each day.", placements: ["TRAVEL CASE", "TOOLBOX", "APPAREL", "DAILY VIDEO"], image: "https://images.unsplash.com/photo-1765445773781-8011c0759704?auto=format&fit=crop&w=1200&q=80", slots: ["GOLD / 01", "GOLD / 02", "GOLD / 03"] },
    { tier: "SILVER", amount: "IDR 10M—14.9M", mark: "M", description: "A clear, lasting placement across team apparel, social channels, website, and mission updates.", placements: ["APPAREL", "SOCIAL", "WEBSITE", "VIDEO"], image: "https://images.unsplash.com/photo-1776053473082-9520f829fbbb?auto=format&fit=crop&w=1200&q=80", slots: ["SILVER / 01", "SILVER / 02", "SILVER / 03", "SILVER / 04"] },
    { tier: "CUSTOM", amount: "BY AGREEMENT", mark: "—", description: "A tailored partnership through funding, equipment, services, or a specific research collaboration.", placements: ["FUNDING", "EQUIPMENT", "SERVICES", "RESEARCH"], image: "https://images.unsplash.com/photo-1764440834022-9e65828d320c?auto=format&fit=crop&w=1200&q=80", slots: ["CUSTOM / 01", "CUSTOM / 02"] },
  ];
  const sponsorsByTier: Record<string, Array<{ name: string; image: string }>> = {
    PLATINUM: [
      { name: "Djarum Foundation", image: sponsorImages.djarum },
      { name: "CLEV Innovation Labs", image: sponsorImages.clev },
    ],
    GOLD: [{ name: "Petrokimia Gresik", image: sponsorImages.petrokimia }],
    SILVER: [
      { name: "Buaya Aerotech", image: sponsorImages.buaya },
      { name: "HQProp", image: sponsorImages.hqprop },
      { name: "PT YPTI", image: sponsorImages.ypti },
      { name: "Raksa", image: sponsorImages.raksa },
    ],
    CUSTOM: [],
  };
  const [activeTier, setActiveTier] = useState("PLATINUM");
  const activePackage = packageVisuals.find((pack) => pack.tier === activeTier) ?? packageVisuals[0];
  return <PageHero label="Partnership" title={<>MAKE THE<br />NEXT <em>FLIGHT</em><br />POSSIBLE.</>} description="A partnership that positions your brand behind PENS UAV research on its journey to the global stage." image={images.partner}>
    <section className="partnership-intro section-light min-w-0"><div className="min-w-0"><Eyebrow>Why partner with CAKSA</Eyebrow><h2 className="max-[380px]:!text-[2.9rem]">PUT YOUR<br />BRAND INTO<br /><em>MOTION.</em></h2></div><div className="min-w-0"><p>Partner with a research team building UAV systems through PENS—one of Asia’s top five polytechnics in the SCImago ranking—and carry your brand into a credible international story.</p><span>BRAND EXPOSURE / FIELD PRESENCE / RESEARCH IMPACT</span></div></section>
    <section className="partner-packages section-dark"><div className="packages-label"><Eyebrow>Partner architecture</Eyebrow><p>Select a tier to preview its visibility system and sponsor placement.</p></div><div className="package-selector max-[380px]:!grid-cols-1">{packageVisuals.map((pack, index) => <button type="button" key={pack.tier} className={`${activeTier === pack.tier ? "active" : ""} max-[380px]:!grid-cols-[20px_minmax(0,1fr)_auto] max-[380px]:!border-r-0 max-[380px]:!px-0`} onClick={() => setActiveTier(pack.tier)}><span>0{index + 1}</span><strong>{pack.tier}</strong><b>{pack.mark}</b></button>)}</div><div className="active-package"><div className="active-package-image !h-[clamp(18rem,48vw,32rem)]"><img className="h-full w-full object-cover" src={activePackage.image} alt={`Abstract placeholder visual for ${activePackage.tier} sponsorship`} /><span>SPONSOR PLACEMENT PREVIEW / {activePackage.tier}</span></div><div className="active-package-copy"><span>{activePackage.tier} / LOGO MARK {activePackage.mark}</span><h2>{activePackage.amount}</h2><p>{activePackage.description}</p><div>{activePackage.placements.map((placement) => <b key={placement}>{placement}</b>)}</div><Link to="/contact">Request this package ↗</Link></div></div></section>
    <section className="sponsor-placement section-light"><div className="placement-heading"><Eyebrow>Brand placement archive</Eyebrow><h2>SPONSOR<br /><em>IN VIEW.</em></h2><p>Explore sponsor visibility across the Platinum, Gold, Silver, and Custom partnership architecture.</p></div><div className="sponsor-slots">{packageVisuals.map((pack) => { const tierSponsors = sponsorsByTier[pack.tier] ?? []; return <article className={`sponsor-tier tier-${pack.tier.toLowerCase()}`} key={pack.tier}><header><span>{pack.tier} PARTNERS</span><b>LOGO / {pack.mark}</b></header><div>{tierSponsors.length > 0 ? tierSponsors.map((sponsor, index) => <figure key={sponsor.name}><img className="!h-44 !w-full !object-contain !grayscale-0 bg-white p-4 sm:!h-56" src={sponsor.image} alt={`${sponsor.name} sponsor logo`} /><figcaption><span>{sponsor.name}</span><b>SPONSOR / {pack.tier}</b></figcaption><i>0{index + 1}</i></figure>) : ["CUSTOM / 01", "CUSTOM / 02", "CUSTOM / 03"].map((slot, index) => <figure key={slot}><div className="flex !h-44 !w-full items-center justify-center border border-dashed border-ink/20 bg-white p-4 text-center font-mono text-[9px] tracking-[0.12em] text-ink/55 sm:!h-56">OPEN FOR<br />PARTNERSHIP</div><figcaption><span>{slot}</span><b>CUSTOM SPONSOR<br />PLACEHOLDER</b></figcaption><i>0{index + 1}</i></figure>)}</div></article>; })}</div></section>
    <section className="partner-proof section-dark"><div><Eyebrow>Previous partners</Eyebrow><h2>TRUST<br />BUILDS <em>RANGE.</em></h2></div><div className="previous-partners">{["Djarum Foundation", "Akhishop Electronics", "Sekolah Robot Indonesia", "Spectrum", "Buaya Aerotech", "PLN Indonesia Power", "Marvin Foundation", "Altair", "SOLIDWORKS"].map((partner, index) => <span key={partner}><i>0{index + 1}</i>{partner}</span>)}</div><div className="partner-terms"><span>WORKING TERMS</span><p>Partnership is established through an MoU, with 50% payment in advance. For a tailored proposal, contact Regina Adristya A.M. at partnershipcaksa@gmail.com.</p><Link to="/contact">Start a conversation ↗</Link></div></section>
  </PageHero>;
}
