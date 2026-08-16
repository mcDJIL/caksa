import { useEffect, useState, type ReactNode } from "react";
import { createBrowserRouter, Link, NavLink, Outlet, useLocation } from "react-router";
import caksaLogo from "./imports/Group_38112.png";

const images = {
  hero: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=2000&q=90",
  field: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1400&q=85",
  drone: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1400&q=85",
  wing: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=85",
  team: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=85",
};

const checker = <span className="checker" aria-hidden="true" />;

function Shell() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overLightSurface, setOverLightSurface] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }, [location.pathname]);
  useEffect(() => {
    const lightSurfaceSelectors = ".section-light, .manifesto, .about-manifesto, .leadership, .mission-index, .achievement-scoreboard, .numbers-section, .past-members";
    const listener = () => {
      setScrolled(window.scrollY > 24);
      const navProbeY = 47;
      const overLight = Array.from(document.querySelectorAll<HTMLElement>(lightSurfaceSelectors)).some((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= navProbeY && rect.bottom >= navProbeY;
      });
      setOverLightSurface(overLight);
    };
    window.addEventListener("scroll", listener, { passive: true });
    window.addEventListener("resize", listener);
    listener();
    return () => { window.removeEventListener("scroll", listener); window.removeEventListener("resize", listener); };
  }, [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousBodyOverflow; document.documentElement.style.overflow = previousHtmlOverflow; };
  }, [open]);
  const nav = [["/", "Home", "01"], ["/research", "Research", "02"], ["/achievements", "Achievements", "03"], ["/about", "About Us", "04"], ["/partnership", "Partnership", "05"], ["/contact", "Contact", "06"], ["/recruitment", "Join CAKSA", "07"]];
  return <div className="site-shell">
    <header className={`nav aww-nav ${scrolled ? "nav-solid" : ""} ${overLightSurface ? "nav-over-light" : ""} ${open ? "nav-menu-open" : ""}`}>
      <Link className="main-logo" to="/" aria-label="CAKSA home"><img src={caksaLogo} alt="CAKSA — Gala Akasa Wirya Satya" /></Link>
      <button className={`menu-toggle ${open ? "is-open" : ""}`} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><em>{open ? "CLOSE" : "MENU"}</em></button>
    </header>
    <nav className={`menu-overlay ${open ? "menu-visible" : ""}`} aria-hidden={!open}>
      <div className="menu-noise" />
      <button className="menu-overlay-close" type="button" onClick={() => setOpen(false)} aria-label="Close navigation"><i /><i /> CLOSE</button>
      <div className="menu-head"><span>CAKSA / NAVIGATION</span><span>GALA AKASA WIRYA SATYA</span></div>
      <div className="menu-links">{nav.map(([to, label, number], i) => <NavLink key={to} to={to} end={i === 0} onClick={() => setOpen(false)}><small>{number}</small><span>{label}</span><b>↗</b></NavLink>)}</div>
      <div className="menu-foot"><p>POLITEKNIK ELEKTRONIKA<br />NEGERI SURABAYA</p><p>07°16′S / 112°47′E</p><p>© CAKSA / 2025</p></div>
      <img className="menu-logo-mark" src={caksaLogo} alt="" />
    </nav>
    <main><Outlet /></main>
    <Footer />
  </div>;
}
function Eyebrow({ children }: { children: ReactNode }) { return <div className="eyebrow"><span />{children}</div>; }
function ArrowLink({ to, children }: { to: string; children: ReactNode }) { return <Link className="arrow-link" to={to}>{children} <b>↗</b></Link>; }
function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) { return <div className={`reveal ${className}`}>{children}</div>; }

function Home() {
  const missions = [
    ["01", "GACOR X1", "Fixed wing / TEKNOFEST 2023", images.wing],
    ["02", "GALAKASA", "The third Cakrawala Skala airframe", images.drone],
    ["03", "KALAMANGGA", "Autonomous flight exploration", images.field],
  ];
  return <>
    <section className="new-hero">
      <div className="new-hero-image"><img src={images.hero} alt="UAV suspended in a mountainous sky" /></div>
      <div className="new-hero-grid" />
      <header className="hero-meta"><span>CAKSA / PENS</span><span>07°16′S — 112°47′E</span></header>
      <div className="hero-title"><p>INTERNATIONAL UAV<br />RESEARCH TEAM</p><h1>WE<br /><i>MAKE</i><br />THE SKY<br />ANSWER.</h1></div>
      <div className="hero-bottom"><span>GALA AKASA<br />WIRYA SATYA</span><div className="hero-rule" /><span>SCROLL TO<br />THE HORIZON ↓</span></div>
      <div className="hero-stamp">EST.<br />2022</div>
      <div className="vertical-copy">POLITEKNIK ELEKTRONIKA NEGERI SURABAYA</div>
    </section>
    <section className="manifesto">
      <div className="manifesto-top"><span>[ 01 ] / MANIFESTO</span><span>07° 16′ 29.5″ S&nbsp; / &nbsp;112° 47′ 23.4″ E</span></div>
      <div className="manifesto-copy"><p>WE DO NOT JUST<br />BUILD AIR<span>C</span>RAFT.</p><h2>WE PREPARE<br /><i>GENERATIONS</i><br />TO SURPASS THEM.</h2></div>
      <div className="manifesto-foot"><span>2007—NOW</span><p>Rooted in Aeronautics PENS, CAKSA has grown through thousands of iterations, one runway, and a belief that Indonesian technology belongs in the world’s sky.</p><ArrowLink to="/about">Meet the formation</ArrowLink></div>
    </section>
    <section className="runway">
      <div className="runway-title"><span>[ 02 ] / FIELD NOTES</span><h2>FLIGHT<br /><i>IS A</i><br />LANGUAGE.</h2></div>
      <div className="runway-image"><img src={images.team} alt="CAKSA team in the field" /><span>TEST SITE / SURABAYA / INDONESIA</span></div>
      <aside className="runway-index"><b>02</b><p>Technical research, made collective.</p><span>↓</span></aside>
    </section>
    <section className="numbers-section">
      <p className="side-label">THE RECORD IS NOT THE ENDPOINT</p><div className="number-row"><span>2023</span><strong>02<sup>ND</sup></strong><p>RUNNER-UP<br />TEKNOFEST<br />STARTUP</p><i>↘</i></div><div className="number-row"><span>2024</span><strong>11</strong><p>RANK IN<br />INTERNATIONAL<br />UAV</p><i>↘</i></div><div className="number-row"><span>2024</span><strong>08</strong><p>TOP 8<br />SAFMC<br />CAT D1</p><i>↘</i></div><Link className="numbers-link" to="/achievements">Read the verified record <b>↗</b></Link>
    </section>
    <section className="mission-index">
      <div className="mission-intro"><span>[ 03 ] / AIRFRAME INDEX</span><h2>BUILT TO<br /><i>QUESTION</i><br />GRAVITY.</h2><p>Every airframe is a provisional answer to a bigger question waiting in the next flight.</p></div>
      <div className="mission-cards">{missions.map((mission, i) => <Link to="/research" className={`mission-card card-${i + 1}`} key={mission[1]}><img src={mission[3]} alt={mission[1]} /><div><span>{mission[0]}</span><h3>{mission[1]}</h3><p>{mission[2]}</p><b>OPEN DOSSIER ↗</b></div></Link>)}</div>
      <Link to="/research" className="large-arrow">ALL<br />PROJECTS <b>↘</b></Link>
    </section>
    <section className="home-sponsors section-light"><div className="home-sponsor-heading"><Eyebrow>Partner signal</Eyebrow><h2>BACKED BY<br /><em>BELIEF.</em></h2><p>Every mission gains range through the organizations that choose to invest in Indonesian UAV research.</p><Link to="/partnership">See partnership architecture ↗</Link></div><div className="home-logo-field"><article className="home-logo-feature"><img src="https://images.unsplash.com/photo-1761645502922-fe3dde9f7341?auto=format&fit=crop&w=900&q=80" alt="Placeholder visual for Djarum Foundation sponsorship" /><div><span>FEATURED PARTNER</span><strong>DJARUM<br />FOUNDATION</strong><small>BRAND MARK PLACEHOLDER</small></div></article><div className="home-logo-grid">{["AKHISHOP ELECTRONICS", "SEKOLAH ROBOT INDONESIA", "SPECTRUM", "BUAYA AEROTECH", "PLN INDONESIA POWER", "MARVIN FOUNDATION", "ALTAIR", "SOLIDWORKS"].map((partner, index) => <article key={partner}><span>0{index + 1}</span><b>{partner}</b><i>LOGO<br />PLACEHOLDER</i></article>)}</div></div></section>
    <section className="closing-cta"><div className="cta-image"><img src={images.field} alt="Vast field beneath an open sky" /></div><div className="cta-content"><span>[ 05 ] / OPEN INVITATION</span><h2>THE NEXT<br />FLIGHT NEEDS<br /><i>A CREW.</i></h2><p>For partners who see technology as the courage to push further.</p><ArrowLink to="/partnership">Partner with CAKSA</ArrowLink></div><div className="cta-stamp">CAKSA<br />▲<br />CAKSA</div></section>
  </>;
}
function Research() {
  const [filter, setFilter] = useState("ALL");
  const cards = [
    { number: "01", name: "Gacor X1", type: "Fixed wing / Tractor configuration", note: "International UAV Competition · TEKNOFEST 2023", image: images.wing, status: "REALIZED", year: "2023" },
    { number: "02", name: "Galakasa", type: "3rd Cakrawala Skala Aerial Vehicle", note: "Long-range aerial research platform", image: images.drone, status: "REALIZED", year: "2023—" },
    { number: "03", name: "Anak Lanang", type: "Experimental drone platform", note: "Agile prototyping and flight-system study", image: images.field, status: "REALIZED", year: "ARCHIVE" },
    { number: "04", name: "Anak Wadon", type: "Experimental drone platform", note: "Aerial vehicle research platform", image: images.team, status: "REALIZED", year: "ARCHIVE" },
    { number: "05", name: "Kalamangga", type: "Autonomous flight exploration", note: "Research into intelligent aerial operations", image: images.hero, status: "REALIZED", year: "ARCHIVE" },
    { number: "06", name: "SAFMC 2026", type: "Quadcopter / Semi-autonomous", note: "Design study — competition result pending", image: images.field, status: "IN DEVELOPMENT", year: "2026" },
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
  return <PageHero label="Research & Projects" title={<>FLIGHT<br /><em>ARCHIVE.</em></>} description="Every CAKSA vehicle and research programme, collected in one evolving record." image={images.drone}>
    <section className="research-archive section-dark">
      <div className="archive-intro"><div><Eyebrow>CAKSA flight archive / 01—06</Eyebrow><h2>EVERY AIRFRAME<br />HOLDS <em>ONE</em><br />WAY OF THINKING.</h2></div><p>This is CAKSA’s working archive. Each vehicle is presented in the order of our research journey—not as a product list, but as a record of experiments still in motion.</p></div>
      <div className="archive-controls"><span>FILTER ARCHIVE</span><div>{["ALL", "REALIZED", "IN DEVELOPMENT"].map((item) => <button key={item} type="button" onClick={() => setFilter(item)} className={filter === item ? "selected" : ""}>{item} <b>{item === "ALL" ? cards.length : cards.filter((card) => card.status === item).length}</b></button>)}</div></div>
      <div className="archive-full-list">{visibleCards.map((card) => <article className="flight-record" key={card.number} role="button" tabIndex={0} onClick={() => setSelectedVehicle(card)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedVehicle(card); } }}><div className="flight-meta"><span>{card.number} / {card.year}</span><span className={card.status === "REALIZED" ? "status" : "status future-status"}>{card.status}</span></div><div className="flight-image"><img src={card.image} alt={`${card.name} UAV research`} /></div><div className="flight-content"><h3>{card.name}</h3><p>{card.type}</p><small>{card.note}</small></div><span className="flight-arrow">↗</span></article>)}</div>
      <div className="archive-disclaimer"><span>ARCHIVE NOTE / 2025</span><p>Vehicles marked <b>REALIZED</b> are part of CAKSA’s developed research history. <b>SAFMC 2026</b> is shown as a concept in development and has no official competition result yet.</p></div>
      {selectedVehicle && <div className="dossier" role="dialog" aria-modal="true" aria-label={`${selectedVehicle.name} project dossier`}><div className="dossier-photo"><img src={selectedVehicle.image} alt={`${selectedVehicle.name} UAV research`} /></div><div className="dossier-shell"><header className="dossier-header"><span>CAKSA / FLIGHT DOSSIER</span><span>{selectedVehicle.number} — {selectedVehicle.year}</span><button className="dossier-close" type="button" onClick={() => setSelectedVehicle(null)}><i /><i /> CLOSE</button></header><main className="dossier-main"><div className="dossier-copy"><span className={selectedVehicle.status === "REALIZED" ? "status" : "status future-status"}>{selectedVehicle.status}</span><h2>{selectedVehicle.name}</h2><p>{selectedVehicle.type}</p></div><div className="dossier-specs"><div><small>RESEARCH FOCUS</small><p>{selectedVehicle.note}</p></div><div><small>PROGRAM STATUS</small><p>{selectedVehicle.status === "REALIZED" ? "Developed CAKSA research airframe" : "Design study / result pending"}</p></div><div><small>ARCHIVE MARK</small><p>CAKSA {selectedVehicle.number} / {selectedVehicle.year}</p></div></div></main><footer className="dossier-footer"><span>GALA AKASA WIRYA SATYA</span><button type="button" onClick={() => setSelectedVehicle(null)}>RETURN TO ARCHIVE ↙</button></footer></div></div>}
    </section>
  </PageHero>;
}
function Achievements() {
  const events = [
    ["2023", "TEKNOFEST International Startup Competition", "2nd Runner-up", "The only Indonesian representative to earn runner-up recognition."],
    ["2023", "TEKNOFEST International UAV Competition", "Finalist", "Presented CAKSA research in person in Türkiye."],
    ["2024", "TEKNOFEST International UAV Competition", "Rank 11", "Placed among an international field of UAV competitors."],
    ["2024", "SAFMC · CAT D1", "Top 8", "Semi-Autonomous category · representing Indonesia."],
  ];
  return <PageHero label="Achievements" title={<>THE RECORD<br /><em>IS REAL.</em></>} description="A verified competition record built through team work and experiments that never end after a single flight." image={images.field}>
    <section className="achievement-scoreboard"><div className="scoreboard-label"><Eyebrow>Verified performance / 2023—2024</Eyebrow><p>Every result in this archive comes from an official competition. Our next programme is presented separately, as research still in motion.</p></div><div className="scoreboard-numbers"><article><span>01</span><strong>02<sup>ND</sup></strong><p>RUNNER-UP<br />TEKNOFEST</p></article><article><span>02</span><strong>11</strong><p>INTERNATIONAL<br />RANK</p></article><article><span>03</span><strong>08</strong><p>TOP 8<br />SAFMC</p></article></div></section>
    <section className="achievement-section section-light"><div className="record-note"><Eyebrow>Mission chronology</Eyebrow><h2>NOT A<br /><em>HIGHLIGHT REEL.</em></h2><p>A live record of moments when CAKSA carried Indonesian UAV research into international rooms, runways, and review panels.</p><div className="record-stamp">OFFICIAL<br />RESULTS<br />ONLY</div></div><div className="vertical-timeline">{events.map((e, index) => <article key={`${e[0]}-${e[1]}-${index}`}><time>{e[0]}</time><div className="timeline-dot" /><div><small>{e[1]}</small><h2>{e[2]}</h2><p>{e[3]}</p></div></article>)}</div></section>
    <section className="achievement-collage section-dark"><div className="collage-copy"><Eyebrow>Beyond the result</Eyebrow><h2>THE MOMENT<br />AFTER <em>TAKEOFF.</em></h2><p>International competition is only one frame of the story. The work lives in the field, at the bench, and within the team.</p><span>CAKSA / MISSION LOG / 2023—2024</span></div><div className="collage-images"><figure className="collage-main"><img src={images.hero} alt="UAV mission in a mountain landscape" /><figcaption>FLIGHT MISSION / FIELD DOCUMENTATION</figcaption></figure><figure className="collage-side"><img src={images.team} alt="CAKSA team field documentation" /><figcaption>TEAM / IN FORMATION</figcaption></figure></div></section>
    <section className="mission-video section-dark"><div><Eyebrow>Mission reel</Eyebrow><h2>WATCH THE<br /><em>MISSION</em><br />UNFOLD.</h2><p>Field documentation and CAKSA’s journey toward international competition.</p></div><a className="video-frame" href="https://www.youtube.com" target="_blank" rel="noreferrer"><img src={images.hero} alt="Flight mission documentation" /><span>▶</span><b>WATCH MISSION REEL</b></a></section>
  </PageHero>;
}
function About() {
  const [activeTeam, setActiveTeam] = useState("TECHNICAL");
  const [selectedDivisionName, setSelectedDivisionName] = useState<string | null>(null);
  const [selectedLeadership, setSelectedLeadership] = useState<"LEADER" | "ADVISOR" | null>(null);
  const [pastArchiveOpen, setPastArchiveOpen] = useState(false);
  const [archiveGeneration, setArchiveGeneration] = useState("GEN 04");
  const portraits = [
    "https://images.unsplash.com/photo-1587038787166-becd08a156f7?auto=format&fit=crop&w=640&q=80",
    "https://images.unsplash.com/photo-1672457668822-a5023d2ede43?auto=format&fit=crop&w=640&q=80",
    "https://images.unsplash.com/photo-1551239883-0d74affcc8ba?auto=format&fit=crop&w=640&q=80",
    "https://images.unsplash.com/photo-1690166444594-e88da42a3791?auto=format&fit=crop&w=640&q=80",
    "https://images.unsplash.com/photo-1600770320021-fda891259970?auto=format&fit=crop&w=640&q=80",
    "https://images.unsplash.com/photo-1624237489159-9dc263f9cc86?auto=format&fit=crop&w=640&q=80",
  ];
  const pastArchive = {
    "GEN 01": [["ALUMNI 01", "Applied Electronics Engineering", portraits[5]], ["ALUMNI 02", "Mechanical Engineering", portraits[1]], ["ALUMNI 03", "Informatics Engineering", portraits[2]]],
    "GEN 02": [["ALUMNI 04", "Applied Electronics Engineering", portraits[0]], ["ALUMNI 05", "Telecommunications Engineering", portraits[4]], ["ALUMNI 06", "Mechanical Engineering", portraits[5]]],
    "GEN 03": [["ALUMNI 07", "Informatics Engineering", portraits[3]], ["ALUMNI 08", "Business Management", portraits[1]], ["ALUMNI 09", "Applied Electronics Engineering", portraits[2]]],
    "GEN 04": [["ALUMNI 10", "Mechanical Engineering", portraits[4]], ["ALUMNI 11", "Creative Media Engineering", portraits[0]], ["ALUMNI 12", "Informatics Engineering", portraits[5]]],
  } as const;
  const rosters = {
    TECHNICAL: [
      ["01", "ELECTRICAL", "Power, sensors & control", [["MEMBER 01", "Applied Electronics Engineering", portraits[0]], ["MEMBER 02", "Applied Electronics Engineering", portraits[1]]]],
      ["02", "PROGRAMMING", "Autonomy & flight logic", [["MEMBER 03", "Informatics Engineering", portraits[2]], ["MEMBER 04", "Informatics Engineering", portraits[3]]]],
      ["03", "PROJECT MANAGEMENT", "Mission coordination", [["MEMBER 05", "Telecommunications Engineering", portraits[4]], ["MEMBER 06", "Business Management", portraits[5]]]],
      ["04", "MECHANICAL", "Airframe & propulsion", [["MEMBER 07", "Mechanical Engineering", portraits[1]], ["MEMBER 08", "Mechanical Engineering", portraits[0]]]],
    ],
    "NON-TECHNICAL": [
      ["01", "ADMINISTRATION", "Operations & documentation", [["MEMBER 09", "Business Management", portraits[3]], ["MEMBER 10", "Applied Business Administration", portraits[2]]]],
      ["02", "BRANDING", "Visual identity & content", [["MEMBER 11", "Creative Media Engineering", portraits[5]], ["MEMBER 12", "Digital Media", portraits[0]]]],
      ["03", "PUBLIC RELATIONS", "Community & communications", [["MEMBER 13", "Communication Studies", portraits[4]], ["MEMBER 14", "Digital Media", portraits[3]]]],
      ["04", "PROJECT MANAGEMENT", "Partnership & logistics", [["MEMBER 15", "Business Management", portraits[1]], ["MEMBER 16", "Applied Business Administration", portraits[2]]]],
    ],
  } as const;
  const currentRoster = rosters[activeTeam as keyof typeof rosters];
  const selectedDivision = currentRoster.find(([, division]) => division === selectedDivisionName);
  const leadershipProfile = selectedLeadership === "LEADER"
    ? ["TEAM LEADER", "FLIGHT LEAD", "LEADER 01", "Applied Electronics Engineering", portraits[0]] as const
    : selectedLeadership === "ADVISOR"
      ? ["ADVISOR", "ACADEMIC GUIDE", "ADVISOR 01", "Applied Electronics Engineering", portraits[4]] as const
      : null;
  useEffect(() => {
    if (!selectedDivision && !selectedLeadership && !pastArchiveOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selectedDivision, selectedLeadership, pastArchiveOpen]);
  return <PageHero label="About CAKSA" title={<>GALA AKASA<br /><em>WIRYA SATYA.</em></>} description="A wish to rise through the sky with courage, strength, and purpose." image={images.team}>
    <section className="about-manifesto section-light"><div className="about-yearline"><span>2007</span><i /><span>2022</span><i /><span>NOW</span></div><div className="about-manifesto-copy"><Eyebrow>Why we exist</Eyebrow><h2>WE TURN<br />CURIOSITY INTO<br /><em>FLIGHT.</em></h2><p>CAKSA grew from the Aeronautics PENS legacy into an international UAV research team. We work where engineering discipline meets a shared belief: Indonesian ideas deserve room in the global sky.</p></div><aside className="about-quote">“THE HORIZON IS NOT<br />A LIMIT. IT IS A<br />DIRECTION.”</aside></section>
    <section className="vision-mission section-dark"><div className="vision-card"><span>[ 01 ] / VISION</span><h2>TO BE A<br /><em>RECOGNISED</em><br />UAV RESEARCH<br />FORCE.</h2><p>We aim to carry student-built aerial research from Surabaya into meaningful international exchange.</p></div><div className="mission-card-about"><span>[ 02 ] / MISSION</span><ol><li>Advance practical UAV research through rigorous experimentation.</li><li>Build a multidisciplinary learning environment for every member.</li><li>Represent Indonesia with credible work on international stages.</li></ol></div></section>
    <section className="leadership section-light"><div className="leadership-heading"><Eyebrow>People who hold the line</Eyebrow><h2>LEADERSHIP<br />IN <em>FORMATION.</em></h2></div><div className="leadership-grid"><article role="button" tabIndex={0} onClick={() => setSelectedLeadership("LEADER")} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedLeadership("LEADER"); } }}><span>01 / TEAM LEADER</span><h3>FLIGHT<br />LEAD</h3><p>Guides the team’s technical direction, mission decisions, and working rhythm.</p><b>OPEN PROFILE ↗</b></article><article role="button" tabIndex={0} onClick={() => setSelectedLeadership("ADVISOR")} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedLeadership("ADVISOR"); } }}><span>02 / ADVISOR</span><h3>ACADEMIC<br />GUIDE</h3><p>Connects research ambition with academic rigor and institutional perspective.</p><b>OPEN PROFILE ↗</b></article></div><p className="roster-note">SELECT A LEADERSHIP ROLE TO OPEN ITS PROFILE INDEX / PLACEHOLDER DATA IS READY FOR THE OFFICIAL ROSTER.</p>{leadershipProfile && <div className="member-index leadership-index" role="dialog" aria-modal="true" aria-label={`${leadershipProfile[0]} profile`}><div className="member-index-top"><span>CAKSA / LEADERSHIP INDEX</span><span>0{selectedLeadership === "LEADER" ? "1" : "2"} / PROFILE</span><button type="button" onClick={() => setSelectedLeadership(null)}><i /><i /> CLOSE</button></div><div className="member-index-heading"><span>ROLE / {leadershipProfile[0]}</span><h2>{leadershipProfile[1]}</h2><p>{leadershipProfile[0] === "TEAM LEADER" ? "Technical direction, mission calls, and team momentum." : "Academic perspective, research rigor, and strategic guidance."}</p></div><div className="member-stage leadership-stage"><article className="member-stage-card"><div className="member-stage-photo"><img src={leadershipProfile[4]} alt={`Placeholder portrait for ${leadershipProfile[2]}`} /><span>PROFILE / LEADERSHIP</span></div><div className="member-stage-copy"><h3>{leadershipProfile[2]}</h3><p>{leadershipProfile[3]}</p><small>PLACEHOLDER PROFILE / CAKSA ROSTER</small></div></article></div><div className="member-index-foot"><span>GALA AKASA WIRYA SATYA</span><button type="button" onClick={() => setSelectedLeadership(null)}>RETURN TO LEADERSHIP ↙</button></div></div>}</section>
    <section className="team-atlas section-dark"><div className="atlas-top"><div><Eyebrow>Team atlas / current roster</Eyebrow><h2>TWO WINGS.<br /><em>ONE</em> FLIGHT.</h2></div><p>CAKSA brings technical craft and organizational care into one formation. Select a wing to explore its working divisions.</p></div><div className="atlas-tabs" role="tablist"><button type="button" role="tab" aria-selected={activeTeam === "TECHNICAL"} className={activeTeam === "TECHNICAL" ? "active" : ""} onClick={() => { setActiveTeam("TECHNICAL"); setSelectedDivisionName(null); }}>01 / TECHNICAL <b>↘</b></button><button type="button" role="tab" aria-selected={activeTeam === "NON-TECHNICAL"} className={activeTeam === "NON-TECHNICAL" ? "active" : ""} onClick={() => { setActiveTeam("NON-TECHNICAL"); setSelectedDivisionName(null); }}>02 / NON-TECHNICAL <b>↘</b></button></div><div className="division-roster">{currentRoster.map(([number, division, focus, members]) => <article key={division} role="button" tabIndex={0} onClick={() => setSelectedDivisionName(division)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedDivisionName(division); } }}><div className="division-index">{number}</div><div><h3>{division}</h3><p>{focus}</p></div><div className="roster-preview"><span>OPEN MEMBER INDEX</span><b>↗</b></div></article>)}</div><p className="atlas-footnote">SELECT A DIVISION TO OPEN ITS MEMBER INDEX. PROFILE DATA IS A PLACEHOLDER AND READY TO BE REPLACED WITH THE OFFICIAL ROSTER.</p>{selectedDivision && <div className="member-index" role="dialog" aria-modal="true" aria-label={`${selectedDivision[1]} member index`}><div className="member-index-top"><span>CAKSA / {activeTeam} WING</span><span>{selectedDivision[0]} / MEMBER INDEX</span><button type="button" onClick={() => setSelectedDivisionName(null)}><i /><i /> CLOSE</button></div><div className="member-index-heading"><span>DIVISION / {selectedDivision[0]}</span><h2>{selectedDivision[1]}</h2><p>{selectedDivision[2]}</p></div><div className="member-stage">{selectedDivision[3].map(([name, major, photo], index) => <article key={name} className={`member-stage-card stage-${index + 1}`}><div className="member-stage-photo"><img src={photo} alt={`Placeholder portrait for ${name}`} /><span>PROFILE / 0{index + 1}</span></div><div className="member-stage-copy"><h3>{name}</h3><p>{major}</p><small>PLACEHOLDER PROFILE / CAKSA ROSTER</small></div></article>)}</div><div className="member-index-foot"><span>GALA AKASA WIRYA SATYA</span><button type="button" onClick={() => setSelectedDivisionName(null)}>RETURN TO TEAM ATLAS ↙</button></div></div>}</section>
    <section className="past-members"><div><Eyebrow>Legacy archive</Eyebrow><h2>FOUR<br />GENERATIONS<br />OF <em>FLIGHT.</em></h2><p>From Aeronautics PENS to CAKSA, every generation left a method, a sketch, a solution, or an unanswered question for the next crew.</p></div><div className="past-detail-entry"><span>2007—NOW / PEOPLE ARCHIVE</span><strong>PAST<br />MEMBERS</strong><p>A searchable record for four generations of alumni. Open the archive to view each generation’s placeholder roster.</p><button type="button" onClick={() => setPastArchiveOpen(true)}>OPEN GENERATION INDEX <b>↗</b></button></div><div className="past-data"><span>ALUMNI ARCHIVE</span><p>Official names, majors, and portraits can replace this placeholder archive whenever the roster is ready.</p></div>{pastArchiveOpen && <div className="past-index" role="dialog" aria-modal="true" aria-label="Past member generation archive"><div className="past-index-top"><span>CAKSA / LEGACY ARCHIVE</span><span>2007—NOW / 04 GENERATIONS</span><button type="button" onClick={() => setPastArchiveOpen(false)}><i /><i /> CLOSE</button></div><div className="past-index-heading"><span>PEOPLE WHO BUILT THE RUNWAY</span><h2>PAST<br /><em>MEMBERS.</em></h2></div><div className="generation-tabs">{Object.keys(pastArchive).map((generation) => <button key={generation} type="button" className={archiveGeneration === generation ? "active" : ""} onClick={() => setArchiveGeneration(generation)}>{generation}</button>)}</div><div className="generation-roster">{pastArchive[archiveGeneration as keyof typeof pastArchive].map(([name, major, photo], index) => <article key={name}><div><img src={photo} alt={`Placeholder portrait for ${name}`} /><span>ALUMNI / 0{index + 1}</span></div><h3>{name}</h3><p>{major}</p></article>)}</div><div className="past-index-foot"><span>PLACEHOLDER ARCHIVE / READY FOR OFFICIAL ROSTER</span><button type="button" onClick={() => setPastArchiveOpen(false)}>RETURN TO ABOUT ↙</button></div></div>}</section>
  </PageHero>;
}
function Partnership() {
  const packageVisuals = [
    { tier: "PLATINUM", amount: "FROM IDR 20M", mark: "XL", description: "A high-visibility partnership across the vehicle, field equipment, digital channels, and international campaign material.", placements: ["AIRCRAFT", "REMOTE", "LAPTOP", "FLAG"], image: "https://images.unsplash.com/photo-1761645502922-fe3dde9f7341?auto=format&fit=crop&w=1200&q=80", slots: ["PLATINUM / 01", "PLATINUM / 02"] },
    { tier: "GOLD", amount: "IDR 15M—19.9M", mark: "L", description: "A brand presence built for the places CAKSA works, travels, publishes, and documents each day.", placements: ["TRAVEL CASE", "TOOLBOX", "APPAREL", "DAILY VIDEO"], image: "https://images.unsplash.com/photo-1765445773781-8011c0759704?auto=format&fit=crop&w=1200&q=80", slots: ["GOLD / 01", "GOLD / 02", "GOLD / 03"] },
    { tier: "SILVER", amount: "IDR 10M—14.9M", mark: "M", description: "A clear, lasting placement across team apparel, social channels, website, and mission updates.", placements: ["APPAREL", "SOCIAL", "WEBSITE", "VIDEO"], image: "https://images.unsplash.com/photo-1776053473082-9520f829fbbb?auto=format&fit=crop&w=1200&q=80", slots: ["SILVER / 01", "SILVER / 02", "SILVER / 03", "SILVER / 04"] },
    { tier: "CUSTOM", amount: "BY AGREEMENT", mark: "—", description: "A tailored partnership through funding, equipment, services, or a specific research collaboration.", placements: ["FUNDING", "EQUIPMENT", "SERVICES", "RESEARCH"], image: "https://images.unsplash.com/photo-1764440834022-9e65828d320c?auto=format&fit=crop&w=1200&q=80", slots: ["CUSTOM / 01", "CUSTOM / 02"] },
  ];
  const [activeTier, setActiveTier] = useState("PLATINUM");
  const activePackage = packageVisuals.find((pack) => pack.tier === activeTier) ?? packageVisuals[0];
  return <PageHero label="Partnership" title={<>MAKE THE<br />NEXT <em>FLIGHT</em><br />POSSIBLE.</>} description="A partnership that positions your brand behind PENS UAV research on its journey to the global stage." image={images.wing}>
    <section className="partnership-intro section-light"><div><Eyebrow>Why partner with CAKSA</Eyebrow><h2>PUT YOUR<br />BRAND INTO<br /><em>MOTION.</em></h2></div><div><p>Partner with a research team building UAV systems through PENS—one of Asia’s top five polytechnics in the SCImago ranking—and carry your brand into a credible international story.</p><span>BRAND EXPOSURE / FIELD PRESENCE / RESEARCH IMPACT</span></div></section>
    <section className="partner-packages section-dark"><div className="packages-label"><Eyebrow>Partner architecture</Eyebrow><p>Select a tier to preview its visibility system and sponsor placement.</p></div><div className="package-selector">{packageVisuals.map((pack, index) => <button type="button" key={pack.tier} className={activeTier === pack.tier ? "active" : ""} onClick={() => setActiveTier(pack.tier)}><span>0{index + 1}</span><strong>{pack.tier}</strong><b>{pack.mark}</b></button>)}</div><div className="active-package"><div className="active-package-image"><img src={activePackage.image} alt={`Abstract placeholder visual for ${activePackage.tier} sponsorship`} /><span>SPONSOR PLACEMENT PREVIEW / {activePackage.tier}</span></div><div className="active-package-copy"><span>{activePackage.tier} / LOGO MARK {activePackage.mark}</span><h2>{activePackage.amount}</h2><p>{activePackage.description}</p><div>{activePackage.placements.map((placement) => <b key={placement}>{placement}</b>)}</div><Link to="/contact">Request this package ↗</Link></div></div></section>
    <section className="sponsor-placement section-light"><div className="placement-heading"><Eyebrow>Brand placement archive</Eyebrow><h2>SPONSOR<br /><em>IN VIEW.</em></h2><p>Placeholder sponsor images are grouped by package. Replace each slot with approved partner artwork when available.</p></div><div className="sponsor-slots">{packageVisuals.map((pack) => <article className={`sponsor-tier tier-${pack.tier.toLowerCase()}`} key={pack.tier}><header><span>{pack.tier} PARTNERS</span><b>LOGO / {pack.mark}</b></header><div>{pack.slots.map((slot, index) => <figure key={slot}><img src={pack.image} alt={`Placeholder image for ${slot}`} /><figcaption><span>{slot}</span><b>SPONSOR IMAGE<br />PLACEHOLDER</b></figcaption><i>0{index + 1}</i></figure>)}</div></article>)}</div></section>
    <section className="partner-proof section-dark"><div><Eyebrow>Previous partners</Eyebrow><h2>TRUST<br />BUILDS <em>RANGE.</em></h2></div><div className="previous-partners">{["Djarum Foundation", "Akhishop Electronics", "Sekolah Robot Indonesia", "Spectrum", "Buaya Aerotech", "PLN Indonesia Power", "Marvin Foundation", "Altair", "SOLIDWORKS"].map((partner, index) => <span key={partner}><i>0{index + 1}</i>{partner}</span>)}</div><div className="partner-terms"><span>WORKING TERMS</span><p>Partnership is established through an MoU, with 50% payment in advance. For a tailored proposal, contact Regina Adristya A.M. at partnershipcaksa@gmail.com.</p><Link to="/contact">Start a conversation ↗</Link></div></section>
  </PageHero>;
}
function Contact() { return <PageHero label="Contact / Join Us" title={<>THE RUNWAY<br />IS <em>OPEN.</em></>} description="Together, let us expand the horizon of Indonesian UAV research." image={images.hero}><section className="contact section-light"><div className="contact-copy"><Eyebrow>Get in touch</Eyebrow><h2>Pilih cara<br />untuk terlibat.</h2><a href="mailto:partnershipcaksa@gmail.com"><small>FOR PARTNERSHIP</small>partnershipcaksa@gmail.com ↗</a><a href="https://instagram.com/caksaeepis" target="_blank" rel="noreferrer"><small>FOR TEAM UPDATES</small>@caksaeepis ↗</a><p>Jl. Raya ITS, Keputih, Kec. Sukolilo,<br />Surabaya, Jawa Timur 60111</p></div><form onSubmit={e => { e.preventDefault(); alert("Terima kasih. Pesanmu telah diterima oleh CAKSA."); }}><label>Nama<input required placeholder="Nama lengkap" /></label><label>Email<input required type="email" placeholder="email@anda.com" /></label><label>Anda ingin...<select defaultValue=""><option value="" disabled>Pilih topik</option><option>Menjadi sponsor</option><option>Bergabung dengan CAKSA</option><option>Kolaborasi riset</option></select></label><label>Pesan<textarea required placeholder="Tulis pesan singkat..." rows={4} /></label><button type="submit">Send message <b>↗</b></button></form></section><section className="closing-flag"><div className="flag" /><p>LET'S SUPPORT US</p><h2>#GALAAKASAWIRYASATYA</h2></section></PageHero>; }


function Recruitment() {
  const [mode, setMode] = useState<"APPLY" | "TRACK">("APPLY");
  const [submitted, setSubmitted] = useState(false);
  const [trackingCode, setTrackingCode] = useState("");
  const [trackingResult, setTrackingResult] = useState<"PENDING" | "ADMINISTRATION" | "INTERVIEW" | "MEMBER" | "NOT SELECTED / ADMINISTRATION" | "NOT SELECTED / INTERVIEW" | "NOT FOUND" | null>(null);
  const checkStatus = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalized = trackingCode.trim().toUpperCase();
    setTrackingResult(normalized === "CAKSA-26-014" ? "INTERVIEW" : normalized === "CAKSA-26-021" ? "MEMBER" : normalized === "CAKSA-26-006" ? "ADMINISTRATION" : normalized === "CAKSA-26-007" ? "NOT SELECTED / ADMINISTRATION" : normalized === "CAKSA-26-015" ? "NOT SELECTED / INTERVIEW" : "NOT FOUND");
  };
  return <PageHero label="Open Recruitment / 2026" title={<>THE NEXT<br />CREW IS<br /><em>CALLING.</em></>} description="Open Recruitment is your entry point into the CAKSA formation. Find your discipline, submit your application, and follow your selection flight." image={images.hero}>
    <section className="recruitment-hub section-dark"><div className="recruitment-intro"><div><Eyebrow>Open Recruitment / 2026</Eyebrow><h2>ONE TEAM.<br />MANY WAYS<br />TO <em>FLY.</em></h2></div><p>CAKSA welcomes students who want to build, organize, document, and take Indonesian UAV research further. No login is required for this UI prototype.</p></div><div className="recruitment-mode"><button type="button" className={mode === "APPLY" ? "active" : ""} onClick={() => setMode("APPLY")}>01 / START APPLICATION</button><button type="button" className={mode === "TRACK" ? "active" : ""} onClick={() => setMode("TRACK")}>02 / TRACK APPLICATION</button></div>
      {mode === "APPLY" ? <div className="application-panel">{submitted ? <div className="application-success"><span>APPLICATION RECEIVED</span><h3>YOUR FLIGHT<br />CODE IS<br /><em>CAKSA-26-031</em></h3><p>This is a UI-only confirmation. Save the code to preview the tracking journey. Your submitted information is not stored.</p><button type="button" onClick={() => { setMode("TRACK"); setTrackingCode("CAKSA-26-031"); setTrackingResult("PENDING"); }}>Track application ↗</button></div> : <form className="recruitment-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><div className="form-header"><span>APPLICATION FORM / STEP 01 OF 01</span><p>All fields are UI placeholders. Data is not sent or stored in this prototype.</p></div><div className="form-grid"><label>FULL NAME<input required placeholder="Your full name" /></label><label>EMAIL ADDRESS<input required type="email" placeholder="name@email.com" /></label><label>STUDY PROGRAM<input required placeholder="Your major / programme" /></label><label>STUDENT YEAR<select required defaultValue=""><option value="" disabled>Select year</option><option>First year</option><option>Second year</option><option>Third year</option><option>Fourth year</option></select></label><label>INTERESTED WING<select required defaultValue=""><option value="" disabled>Select a wing</option><option>Technical</option><option>Non-Technical</option></select></label><label>DIVISION OF INTEREST<select required defaultValue=""><option value="" disabled>Select division</option><option>Electrical</option><option>Programming</option><option>Mechanical</option><option>Project Management</option><option>Administration</option><option>Branding</option><option>Public Relations</option></select></label><label className="full-field">WHY CAKSA?<textarea required rows={4} placeholder="Tell us where you want to contribute..." /></label></div><button className="submit-application" type="submit">Submit application <b>↗</b></button></form>}</div> : <div className="tracking-panel"><div className="tracking-copy"><span>APPLICANT TRACKER / NO LOGIN</span><h3>FOLLOW<br />YOUR <em>FLIGHT.</em></h3><p>Enter your application code to preview your selection status. Try <b>CAKSA-26-006</b>, <b>CAKSA-26-014</b>, <b>CAKSA-26-021</b>, or the unsuccessful demo codes <b>CAKSA-26-007</b> and <b>CAKSA-26-015</b>.</p></div><div className="tracking-console"><form className="tracking-form" onSubmit={checkStatus}><label>APPLICATION CODE<input value={trackingCode} onChange={(event) => setTrackingCode(event.target.value)} placeholder="CAKSA-26-000" /></label><button type="submit">CHECK ↗</button></form><div className={`status-board ${trackingResult ? `result-${trackingResult.toLowerCase().replaceAll(" / ", "-").replaceAll(" ", "-")}` : "standby"}`}>{trackingResult === "NOT FOUND" ? <><span>FLIGHT CODE / NOT FOUND</span><h4>NO SIGNAL.</h4><p>Check the code or try one of the demo codes shown on the left.</p></> : trackingResult === "NOT SELECTED / ADMINISTRATION" || trackingResult === "NOT SELECTED / INTERVIEW" ? <><div className="status-board-top"><span>SELECTION RESULT</span><b>{trackingCode.trim().toUpperCase() || "CAKSA-26-000"}</b></div><div className="status-hero"><span>{trackingResult === "NOT SELECTED / ADMINISTRATION" ? "ADMINISTRATION REVIEW" : "INTERVIEW REVIEW"}</span><h4>NOT<br />SELECTED.</h4><p>{trackingResult === "NOT SELECTED / ADMINISTRATION" ? "Thank you for applying. This application did not progress beyond the administration stage." : "Thank you for completing the interview. This application was not selected for the current team term."}</p></div><div className="status-flight"><article className="done"><b>01</b><span>APPLY</span><i /></article><article className={trackingResult === "NOT SELECTED / INTERVIEW" ? "done" : "not-selected"}><b>02</b><span>ADMIN</span><i /></article><article className={trackingResult === "NOT SELECTED / INTERVIEW" ? "not-selected" : ""}><b>03</b><span>INTERVIEW</span><i /></article><article><b>04</b><span>MEMBER</span><i /></article></div></> : trackingResult ? <><div className="status-board-top"><span>LIVE APPLICATION STATUS</span><b>{trackingCode.trim().toUpperCase() || "CAKSA-26-000"}</b></div><div className="status-hero"><span>CURRENT STAGE</span><h4>{trackingResult === "MEMBER" ? "MEMBER" : trackingResult === "INTERVIEW" ? "INTERVIEW" : trackingResult === "ADMINISTRATION" ? "ADMIN" : "REVIEW"}</h4><p>{trackingResult === "MEMBER" ? "WELCOME TO THE FORMATION." : trackingResult === "INTERVIEW" ? "YOU HAVE CLEARED THE ADMINISTRATION STAGE." : trackingResult === "ADMINISTRATION" ? "YOUR APPLICATION IS UNDER ADMINISTRATION REVIEW." : "YOUR APPLICATION IS IN THE FLIGHT QUEUE."}</p></div><div className="status-flight"><article className="done"><b>01</b><span>APPLY</span><i /></article><article className={trackingResult === "ADMINISTRATION" || trackingResult === "INTERVIEW" || trackingResult === "MEMBER" ? "done" : ""}><b>02</b><span>ADMIN</span><i /></article><article className={trackingResult === "INTERVIEW" || trackingResult === "MEMBER" ? "done" : ""}><b>03</b><span>INTERVIEW</span><i /></article><article className={trackingResult === "MEMBER" ? "done final" : ""}><b>04</b><span>MEMBER</span><i /></article></div></> : <><span>STATUS CONSOLE / STANDBY</span><h4>READY FOR<br />YOUR CODE.</h4><p>Enter an application code to receive an immediate selection signal.</p></>}</div></div></div>}</section>
    <section className="recruitment-roles section-light"><div><Eyebrow>Choose your wing</Eyebrow><h2>BRING YOUR<br /><em>OWN</em><br />DISCIPLINE.</h2></div><div className="role-stream"><article><span>01 / TECHNICAL</span><h3>BUILD THE<br />AIRFRAME.</h3><p>Electrical · Programming · Mechanical · Project Management</p></article><article><span>02 / NON-TECHNICAL</span><h3>MOVE THE<br />MISSION.</h3><p>Administration · Branding · Public Relations · Project Management</p></article></div></section>
  </PageHero>;
}

function PageHero({ label, title, description, image, children }: { label: string; title: ReactNode; description: string; image: string; children: ReactNode }) { return <><section className="page-hero"><div className="page-hero-image"><img src={image} alt="" /></div><div className="page-hero-grid" /><div className="page-hero-meta"><span>CAKSA / {label.toUpperCase()}</span><span>07°16′S — 112°47′E</span></div><div className="page-hero-content"><span className="page-kicker">[ {label.toUpperCase()} ]</span><h1>{title}</h1><p>{description}</p></div><div className="page-hero-line"><span>GALA AKASA WIRYA SATYA</span><i /><span>SCROLL TO EXPLORE ↓</span></div><div className="page-hero-stamp">CAKSA<br />▲<br />2025</div><div className="page-hero-vertical">POLITEKNIK ELEKTRONIKA NEGERI SURABAYA</div></section>{children}</>; }
function Footer() { return <footer className="new-footer"><div className="footer-rail"><span>CAKSA / 07°16′S — 112°47′E</span><span>GALA AKASA WIRYA SATYA</span><span>© 2025</span></div><div className="footer-word"><span>BUILT FROM SURABAYA / FOR THE SKY</span><Link to="/">CAKSA<sup>▲</sup></Link></div><div className="footer-data"><div><small>OPEN CHANNEL</small><a href="mailto:partnershipcaksa@gmail.com">partnershipcaksa@gmail.com ↗</a><a href="https://instagram.com/caksaeepis">@caksaeepis ↗</a></div><div><small>BASE OF OPERATIONS</small><p>Politeknik Elektronika Negeri Surabaya<br />Jl. Raya ITS, Keputih, Surabaya, ID</p></div></div></footer>; }
function NotFound() { return <section className="not-found section-dark"><h1>Page not found.</h1><ArrowLink to="/">Back home</ArrowLink></section>; }

export const router = createBrowserRouter([{ path: "/", Component: Shell, children: [{ index: true, Component: Home }, { path: "research", Component: Research }, { path: "achievements", Component: Achievements }, { path: "about", Component: About }, { path: "partnership", Component: Partnership }, { path: "contact", Component: Contact }, { path: "recruitment", Component: Recruitment }, { path: "*", Component: NotFound }] }]);
