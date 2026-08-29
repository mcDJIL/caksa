import { useEffect, useState } from "react";
import PageHero from "../components/sections/PageHero";
import { images } from "../data/images";
import { Eyebrow } from "../components/ui/editorial";

export default function Research() {
  const [filter, setFilter] = useState("ALL");
  const cards = [
    { number: "01", name: "Gacor X1", type: "Fixed wing / Tractor configuration", note: "International UAV Competition · TEKNOFEST 2023", image: images.gacor, secondaryImage: null, status: "REALIZED", year: "2023" },
    { number: "02", name: "Galakasa", type: "3rd Cakrawala Skala Aerial Vehicle", note: "Long-range aerial research platform", image: images.galakasa, secondaryImage: null, status: "REALIZED", year: "2023" },
    { number: "03", name: "Anak Lanang / Kalamangga", type: "Experimental drone / Wearable-control pair", note: "Kalamangga is the wearable-control unit paired with Anak Lanang.", image: images.anakLanang, secondaryImage: images.kalamangga, status: "REALIZED", year: "2024" },
    { number: "04", name: "Umar / Gundala", type: "Quadcopter / Wearable-control pair", note: "Gundala is the wearable-control unit paired with Umar.", image: images.umar, secondaryImage: images.gundala, status: "REALIZED", year: "2025" },
    { number: "05", name: "Amirudin", type: "Quadcopter / Remote-control pair", note: "Amirudin is the Quadcopter UAV controlled by remote.", image: images.amirudin, secondaryImage: null, status: "REALIZED", year: "2026" },
  ];
  const [selectedVehicle, setSelectedVehicle] = useState<(typeof cards)[number] | null>(null);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setSelectedVehicle(null); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);
  useEffect(() => {
    if (!selectedVehicle) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selectedVehicle]);
  const visibleCards = filter === "ALL" ? cards : cards.filter((card) => card.status === filter);
  return <PageHero label="Research & Projects" title={<>FLIGHT<br /><em>ARCHIVE.</em></>} description="Every CAKSA vehicle and research programme, collected in one evolving record." image={images.umar}>
    <section className="research-archive section-dark">
      <div className="archive-intro"><div><Eyebrow>CAKSA flight archive / 01—04</Eyebrow><h2>EVERY AIRFRAME<br />HOLDS <em>ONE</em><br />WAY OF THINKING.</h2></div><p>This is CAKSA’s working archive. Each vehicle is presented in the order of our research journey—not as a product list, but as a record of experiments still in motion.</p></div>
      <div className="archive-controls"><span>FILTER ARCHIVE</span><div>{["ALL", "REALIZED", "IN DEVELOPMENT"].map((item) => <button key={item} type="button" onClick={() => setFilter(item)} className={filter === item ? "selected" : ""}>{item} <b>{item === "ALL" ? cards.length : cards.filter((card) => card.status === item).length}</b></button>)}</div></div>
      <div className="archive-full-list">{visibleCards.map((card) => <article className="flight-record" key={card.number} role="button" tabIndex={0} onClick={() => setSelectedVehicle(card)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedVehicle(card); } }}><div className="flight-meta"><span>{card.number} / {card.year}</span><span className={card.status === "REALIZED" ? "status" : "status future-status"}>{card.status}</span></div><div className="flight-image h-[300px] max-[560px]:h-[210px] w-full overflow-hidden">{card.secondaryImage ? <div className="grid h-full w-full grid-cols-2 gap-1"><img className="h-full w-full object-cover" src={card.image} alt={`${card.name} primary vehicle`} /><img className="h-full w-full object-cover" src={card.secondaryImage} alt={`${card.name} remote-control unit`} /></div> : <img className="h-full w-full object-cover" src={card.image} alt={`${card.name} UAV research`} />}</div><div className="flight-content"><h3>{card.name}</h3><p>{card.type}</p>{card.secondaryImage && <span className="mb-2 inline-flex border border-orange px-2 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-orange">Paired control unit</span>}<small>{card.note}</small></div><span className="flight-arrow">↗</span></article>)}</div>
      <div className="archive-disclaimer"><span>ARCHIVE NOTE / 2025</span><p>Vehicles marked <b>REALIZED</b> are part of CAKSA’s developed research history. Paired records show an airframe together with its dedicated remote-control unit.</p></div>
      {selectedVehicle && <div className="dossier" role="dialog" aria-modal="true" aria-label={`${selectedVehicle.name} project dossier`}><div className="dossier-photo">{selectedVehicle.secondaryImage ? <div className="grid h-full w-full grid-cols-2 gap-1"><img className="h-full w-full object-cover" src={selectedVehicle.image} alt={`${selectedVehicle.name} primary vehicle`} /><img className="h-full w-full object-cover" src={selectedVehicle.secondaryImage} alt={`${selectedVehicle.name} remote-control unit`} /></div> : <img src={selectedVehicle.image} alt={`${selectedVehicle.name} UAV research`} />}</div><div className="dossier-shell"><header className="dossier-header"><span>CAKSA / FLIGHT DOSSIER</span><span>{selectedVehicle.number} — {selectedVehicle.year}</span><button className="dossier-close" type="button" onClick={() => setSelectedVehicle(null)}><i /><i /> CLOSE</button></header><main className="dossier-main"><div className="dossier-copy"><span className={selectedVehicle.status === "REALIZED" ? "status" : "status future-status"}>{selectedVehicle.status}</span><h2 className="max-[340px]:!break-words max-[340px]:!text-[2.45rem] max-[340px]:!leading-[0.8]">{selectedVehicle.name}</h2><p>{selectedVehicle.type}</p></div><div className="dossier-specs"><div><small>RESEARCH FOCUS</small><p>{selectedVehicle.note}</p></div><div><small>PROGRAM STATUS</small><p>{selectedVehicle.status === "REALIZED" ? "Developed CAKSA research airframe" : "Design study / result pending"}</p></div><div><small>ARCHIVE MARK</small><p>CAKSA {selectedVehicle.number} / {selectedVehicle.year}</p></div></div></main><footer className="dossier-footer"><span>GALA AKASA WIRYA SATYA</span><button type="button" onClick={() => setSelectedVehicle(null)}>RETURN TO ARCHIVE ↙</button></footer></div></div>}
    </section>  
  </PageHero>;
}
