import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import caksaLogo from "../../imports/Group_38112.png";
import Footer from "./Footer";

export default function Shell() {
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
