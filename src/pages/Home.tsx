import { Link } from "react-router";
import { images, sponsorImages } from "../data/images";
import { ArrowLink, Eyebrow } from "../components/ui/editorial";

export default function Home() {
  const missions = [
    ["01", "GACOR X1", "Fixed wing / TEKNOFEST 2023", images.gacor],
    ["02", "ANAK LANANG", "Rotary wing / SAFMC 2024", images.anakLanang],
    ["03", "UMAR", "Rotary wing / SAFMC 2025", images.umar],
  ];

  const sponsors = [
    ["PETROKIMIA GRESIK", sponsorImages.petrokimia],
    ["BUAYA AEROTECH", sponsorImages.buaya],
    ["HQPROP", sponsorImages.hqprop],
    ["PT YPTI", sponsorImages.ypti],
    ["RAKSA", sponsorImages.raksa],
  ]
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
    <section className="runway max-[639px]:!grid max-[639px]:!grid-cols-1 max-[639px]:!min-h-[770px]">
      <div className="runway-title max-[639px]:!relative max-[639px]:!order-1 max-[639px]:!self-start max-[639px]:!px-[22px] max-[639px]:!pt-[70px] max-[639px]:!pb-0"><span>[ 02 ] / FIELD NOTES</span><h2>FLIGHT<br /><i>IS A</i><br />LANGUAGE.</h2></div>
      <div className="runway-image max-[639px]:!order-2 max-[639px]:!left-[16%] max-[639px]:!top-0 max-[639px]:!h-[520px] max-[639px]:!w-[90%] max-[639px]:!rotate-[3deg]"><img src={images.team} alt="CAKSA team in the field" /><span>TEST SITE / SURABAYA / INDONESIA</span></div>
      <aside className="runway-index max-[639px]:!hidden"><b>02</b><p>Technical research, made collective.</p><span>↓</span></aside>
    </section>
    <section className="numbers-section">
      <p className="side-label">THE RECORD IS NOT THE ENDPOINT</p><div className="number-row"><span>2023</span><strong>02<sup>ND</sup></strong><p>RUNNER-UP<br />TEKNOFEST<br />STARTUP</p><i>↘</i></div><div className="number-row"><span>2024</span><strong>11</strong><p>RANK IN<br />INTERNATIONAL<br />UAV</p><i>↘</i></div><div className="number-row"><span>2024</span><strong>08</strong><p>TOP 8<br />SAFMC<br />CAT D1</p><i>↘</i></div><Link className="numbers-link" to="/achievements">Read the verified record <b>↗</b></Link>
    </section>
    <section className="mission-index">
      <div className="mission-intro"><span>[ 03 ] / AIRFRAME INDEX</span><h2>BUILT TO<br /><i>QUESTION</i><br />GRAVITY.</h2><p>Every airframe is a provisional answer to a bigger question waiting in the next flight.</p></div>
      <div className="mission-cards">{missions.map((mission, i) => <Link to="/research" className={`mission-card card-${i + 1}`} key={mission[1]}><img src={mission[3]} alt={mission[1]} /><div><span>{mission[0]}</span><h3>{mission[1]}</h3><p>{mission[2]}</p><b>OPEN DOSSIER ↗</b></div></Link>)}</div>
      <Link to="/research" className="large-arrow">ALL<br />PROJECTS <b>↘</b></Link>
    </section>
    <section className="home-sponsors section-light">
      <div className="home-sponsor-heading">
        <Eyebrow>Partner signal</Eyebrow><h2>BACKED BY<br /><em>BELIEF.</em></h2>
        <p>Every mission gains range through the organizations that choose to invest in Indonesian UAV research.</p>
        <Link to="/partnership">See partnership architecture ↗</Link>
      </div>
      <div className="home-logo-field">
        <div className="home-logo-features">
          <article className="home-logo-feature">
              <img className="sponsor-logo-image h-full w-full !object-contain p-[30px] !grayscale-0" src={sponsorImages.clev} alt="Clev Innovation Labs sponsor logo" />
            <div className="absolute inset-x-5 bottom-5 z-20 text-white">
              <span>FEATURED PARTNER</span>
              <strong className="text-white">CLEV<br />INNOVATION LABS</strong>
            </div>
          </article>
          <article className="home-logo-feature">
            <img className="sponsor-logo-image h-full w-full !object-contain p-[30px] !grayscale-0" src={sponsorImages.djarum} alt="Djarum Foundation sponsor logo" />
            <div className="absolute inset-x-5 bottom-5 z-20 text-white">
              <span>FEATURED PARTNER</span>
              <strong className="text-white">DJARUM<br />FOUNDATION</strong>
            </div>
          </article>
        </div>
        <div className="home-logo-grid">
          {sponsors.map(([name, logo], index) => (
            <article key={name}>
              <img className="sponsor-logo-image mx-auto mb-[10px] h-[54px] w-full !object-contain grayscale-0" src={logo} alt={`${name} sponsor logo`} />
              <span>0{index + 1}</span>
              <b>{name}</b>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="closing-cta">
      <div className="cta-image">
        <img src={images.partner} alt="Vast field beneath an open sky" />
      </div>
      <div className="cta-content">
        <span>[ 05 ] / OPEN INVITATION</span>
        <h2>THE NEXT<br />FLIGHT NEEDS<br /><i>A CREW.</i></h2>
        <p>For partners who see technology as the courage to push further.</p>
        <ArrowLink to="/partnership">Partner with CAKSA</ArrowLink>
      </div>
      <div className="cta-stamp">
        CAKSA<br />▲<br />CAKSA
      </div>
    </section>
  </>
};
