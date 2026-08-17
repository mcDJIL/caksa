import PageHero from "../components/sections/PageHero";
import { images } from "../data/images";
import { Eyebrow, EyebrowBlack } from "../components/ui/editorial";

export default function Achievements() {
  const events = [
    ["2023", "TEKNOFEST International Startup Competition", "1st Runner-up", "The only Indonesian representative to earn runner-up recognition."],
    ["2023", "TEKNOFEST International UAV Competition", "Finalist", "Presented CAKSA research in person in Türkiye."],
    ["2024", "TEKNOFEST International UAV Competition", "Rank 11", "Placed among an international field of UAV competitors."],
    ["2024", "SAFMC · CAT D1", "Top 8", "D1 Man Machine category · representing Indonesia."],
    ["2025", "SAFMC · CAT D1", "1st Runner-up", "D1 Man Machine category · representing Indonesia."],
    ["2026", "SAFMC · CAT D1", "Judges Commendation", "D1 Man Machine category · representing Indonesia."],
  ];
  return <PageHero label="Achievements" title={<>THE RECORD<br /><em>IS REAL.</em></>} description="A verified competition record built through team work and experiments that never end after a single flight." image={images.award}>
    <section className="achievement-scoreboard"><div className="scoreboard-label text-black"><EyebrowBlack>Verified performance / 2023—2024</EyebrowBlack><p>Every result in this archive comes from an official competition. Our next programme is presented separately, as research still in motion.</p></div><div className="scoreboard-numbers"><article><span>01</span><strong>02<sup>ND</sup></strong><p>RUNNER-UP<br />TEKNOFEST</p></article><article><span>02</span><strong>11</strong><p>INTERNATIONAL<br />RANK</p></article><article><span>03</span><strong>02<sup>ND</sup></strong><p>RUNNER-UP<br />SAFMC</p></article></div></section>
    <section className="achievement-section section-light"><div className="record-note"><Eyebrow>Mission chronology</Eyebrow><h2>NOT A<br /><em>HIGHLIGHT REEL.</em></h2><p>A live record of moments when CAKSA carried Indonesian UAV research into international rooms, runways, and review panels.</p><div className="record-stamp">OFFICIAL<br />RESULTS<br />ONLY</div></div><div className="vertical-timeline">{events.map((e, index) => <article key={`${e[0]}-${e[1]}-${index}`}><time>{e[0]}</time><div className="timeline-dot" /><div><small>{e[1]}</small><h2>{e[2]}</h2><p>{e[3]}</p></div></article>)}</div></section>
    <section className="achievement-collage section-dark">
      <div className="collage-copy">
        <Eyebrow>Beyond the result</Eyebrow>
        <h2>THE MOMENT<br />AFTER <em>TAKEOFF.</em></h2>
        <p>International competition is only one frame of the story. The work lives in the field, at the bench, and within the team.</p>
        <span>CAKSA / MISSION LOG / 2023—2024</span>
      </div>
      <div className="collage-images">
        <figure className="collage-main">
          <img src={images.mission} alt="UAV mission in a mountain landscape" />
          <figcaption>FLIGHT MISSION / FIELD DOCUMENTATION</figcaption>
        </figure>
        <figure className="collage-side">
          <img src={images.hero} alt="CAKSA team field documentation" />
          <figcaption>TEAM / IN FORMATION</figcaption>
        </figure>
      </div>
    </section>
    <section className="mission-video section-dark">
      <div>
        <Eyebrow>Mission reel</Eyebrow>
        <h2>WATCH THE<br /><em>MISSION</em><br />UNFOLD.</h2>
        <p>Field documentation and CAKSA’s journey toward international competition.</p>
      </div>
      <a className="video-frame" href="https://youtu.be/sRoj_Ojju5A?si=MZ5tbw3jkDAzLrOJ" target="_blank" rel="noreferrer">
        <img src={images.team3} alt="Flight mission documentation" />
        <span>▶</span>
        <b>WATCH MISSION REEL</b>
      </a>
    </section>
  </PageHero>;
}
