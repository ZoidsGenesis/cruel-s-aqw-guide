import { useState, useEffect, useCallback } from "react";
import { Users, Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { DiscordIcon } from "./DiscordIcon";
import cruelLogo from "figma:asset/337a7d9ed614b4dbbc2134f4b3a94da58330a8aa.png";
import cruelBg from "../assets/cruel-bg.png";

import screenie1 from "../assets/screenie1.png";
import screenie2 from "../assets/screenie2.png";
import screenie3 from "../assets/screenie3.png";
import screenie4 from "../assets/screenie4.png";
import screenie5 from "../assets/screenie5.png";
import screenie6 from "../assets/screenie6.png";
import screenie7 from "../assets/screenie7.png";

interface AboutCruelPageProps {
  onBack: () => void;
}

type Section = "about" | "screenie";

const galleryItems: { id: number; src: string }[] = [
  { id: 1, src: screenie1 },
  { id: 2, src: screenie2 },
  { id: 3, src: screenie3 },
  { id: 4, src: screenie4 },
  { id: 5, src: screenie5 },
  { id: 6, src: screenie6 },
  { id: 7, src: screenie7 },
];

const THEMES: Record<Section, string> = {
  about:    "#c0392b",  // deep red
  screenie: "#c8956c",  // light warm brown
};

export function AboutCruelPage({ onBack }: AboutCruelPageProps) {
  const [section, setSection]       = useState<Section>("about");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const theme = THEMES[section];

  const openLightbox  = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prevPhoto = useCallback(() =>
    setLightboxIdx((i) => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length)),
  []);
  const nextPhoto = useCallback(() =>
    setLightboxIdx((i) => (i === null ? null : (i + 1) % galleryItems.length)),
  []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === "Escape")    closeLightbox();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx, closeLightbox, prevPhoto, nextPhoto]);

  useEffect(() => {
    document.body.style.overflow = lightboxIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIdx]);

  const isAbout = section === "about";

  const pageStyles = `
    /* ── Base page ──────────────────────────────────────────── */
    .ap-page {
      min-height: 100vh;
      color: #fff;
      position: relative;
      overflow-x: hidden;
      background: rgb(8 15 32);
    }

    /* ── Background layer ───────────────────────────────────── */
    .ap-bg-layer {
      position: fixed;
      inset: 0;
      z-index: 0;
      background:
        radial-gradient(ellipse at top left,   ${theme}18 0%, transparent 50%),
        radial-gradient(ellipse at top right,  ${theme}10 0%, transparent 50%),
        radial-gradient(ellipse at bottom center, ${theme}08 0%, transparent 70%),
        linear-gradient(135deg, rgb(8 15 32) 0%, rgb(18 10 10) 40%, rgb(10 6 4) 100%);
      transition: background 0.8s ease;
      pointer-events: none;
    }

    /* ── Character art (About Us only) ─────────────────────── */
    .ap-art-layer {
      position: fixed;
      inset: 0;
      z-index: 1;
      background-image: url('${cruelBg}');
      background-size: cover;
      background-position: center top;
      background-repeat: no-repeat;
      pointer-events: none;
      transition: opacity 0.8s ease;
    }
    .ap-art-layer.visible { opacity: 1; }
    .ap-art-layer.hidden  { opacity: 0; }

    .ap-art-overlay {
      position: fixed;
      inset: 0;
      z-index: 2;
      pointer-events: none;
      transition: opacity 0.8s ease;
      background: linear-gradient(
        to bottom,
        rgba(8,4,4,0.55)  0%,
        rgba(8,4,4,0.40) 40%,
        rgba(8,4,4,0.80) 80%,
        rgba(8,4,4,0.96) 100%
      );
    }
    .ap-art-overlay.visible { opacity: 1; }
    .ap-art-overlay.hidden  { opacity: 0; }

    /* Screenie warm brown bg */
    .ap-screenie-bg {
      position: fixed;
      inset: 0;
      z-index: 1;
      pointer-events: none;
      background:
        radial-gradient(circle at 20% 30%, ${THEMES.screenie}22 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, ${THEMES.screenie}14 0%, transparent 50%),
        linear-gradient(135deg, rgb(14 9 4) 0%, rgb(22 14 6) 50%, rgb(12 8 3) 100%);
      transition: opacity 0.8s ease;
    }
    .ap-screenie-bg.visible { opacity: 1; }
    .ap-screenie-bg.hidden  { opacity: 0; }

    .ap-content {
      position: relative;
      z-index: 10;
    }

    /* ── Header ─────────────────────────────────────────────── */
    .ap-header {
      border-bottom: 1px solid ${theme}55;
      background: rgba(0, 0, 0, 0.30);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      box-shadow: 0 4px 20px ${theme}20;
      position: sticky;
      top: 0;
      z-index: 30;
      transition: border-color 0.6s ease, box-shadow 0.6s ease;
    }
    .ap-header-top {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    .ap-brand {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .ap-brand-logo {
      width: 48px;
      height: 48px;
      object-fit: contain;
      transition: filter 0.4s ease, transform 0.3s ease;
      filter: drop-shadow(0 0 10px ${theme}40);
    }
    .ap-brand-logo:hover { transform: rotate(12deg) scale(1.1); }
    .ap-brand-title {
      font-size: 1.875rem;
      font-weight: 700;
      color: #fff;
      margin: 0;
      line-height: 1.2;
    }
    .ap-brand-sub {
      margin: 0;
      font-size: 0.875rem;
      color: ${theme};
      transition: color 0.6s ease;
    }
    .ap-back-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 8px;
      background: transparent;
      border: 2px solid ${theme}70;
      color: ${theme}cc;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.3s ease;
    }
    .ap-back-btn:hover {
      background: ${theme}15;
      box-shadow: 0 0 15px ${theme}50;
      color: #fff;
      transform: scale(1.04);
    }

    /* ── Tab nav ─────────────────────────────────────────────── */
    .ap-tabs-row {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px 16px;
    }
    .ap-tabs {
      display: inline-flex;
      padding: 4px;
      border-radius: 10px;
      border: 1px solid ${theme}45;
      background: rgba(0,0,0,0.45);
      transition: border-color 0.6s ease;
    }
    .ap-tab {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 22px;
      border-radius: 7px;
      background: transparent;
      color: ${theme}cc;
      border: none;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.3s ease;
    }
    .ap-tab.active {
      background: ${theme};
      color: #fff;
      box-shadow: 0 0 18px ${theme}70;
    }
    .ap-tab:not(.active):hover { background: ${theme}20; }

    /* ── Hero ─────────────────────────────────────────────────── */
    .ap-hero {
      max-width: 1200px;
      margin: 0 auto;
      padding: 36px 16px 16px;
      text-align: center;
    }
    .ap-hero-logo {
      width: 80px;
      height: 80px;
      margin: 0 auto;
      object-fit: contain;
      filter: drop-shadow(0 0 18px ${theme}bb);
      animation: apFloat 4s ease-in-out infinite;
      transition: filter 0.6s ease;
    }
    .ap-hero-title {
      margin: 12px 0 4px;
      font-size: 2.25rem;
      font-weight: 800;
      color: ${theme};
      letter-spacing: 0.08em;
      text-shadow: 0 0 20px ${theme}80, 0 2px 6px rgba(0,0,0,0.8);
      transition: color 0.6s ease, text-shadow 0.6s ease;
    }
    .ap-hero-sub {
      margin: 0;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    /* ── Main content ─────────────────────────────────────────── */
    .ap-main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 32px 16px 80px;
    }

    /* ── About Us card ───────────────────────────────────────── */
    .ap-about-card {
      border-radius: 16px;
      border: 1px solid ${THEMES.about}60;
      background: rgba(0,0,0,0.60);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      padding: 36px;
      box-shadow: 0 0 40px ${THEMES.about}20, inset 0 1px 0 ${THEMES.about}20;
      animation: apGlowRed 3.5s ease-in-out infinite;
    }
    @keyframes apGlowRed {
      0%,100% { box-shadow: 0 0 30px ${THEMES.about}20, inset 0 1px 0 ${THEMES.about}15; }
      50%     { box-shadow: 0 0 55px ${THEMES.about}40, inset 0 1px 0 ${THEMES.about}30; }
    }
    .ap-section-head {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 24px;
    }
    .ap-section-icon {
      padding: 12px;
      border-radius: 10px;
      display: inline-flex;
      flex-shrink: 0;
    }
    .ap-section-icon.red   { background: ${THEMES.about}25;   border: 1px solid ${THEMES.about}55; }
    .ap-section-icon.brown { background: ${THEMES.screenie}25; border: 1px solid ${THEMES.screenie}55; }
    .ap-section-title { margin: 0; font-size: 30px; font-weight: 700; }
    .ap-section-title.red   { color: ${THEMES.about}; }
    .ap-section-title.brown { color: ${THEMES.screenie}; text-shadow: 0 0 20px ${THEMES.screenie}50; }
    .ap-section-sub { margin: 3px 0 0; font-size: 13px; color: rgba(255,255,255,0.45); }
    .ap-divider {
      height: 1px;
      background: linear-gradient(to right, transparent, ${THEMES.about}50, transparent);
      margin: 24px 0;
    }
    .ap-body-text { color: #e5e7eb; font-size: 17px; line-height: 1.8; margin: 0; }
    .ap-accent-red   { color: ${THEMES.about};   font-weight: 600; }
    .ap-accent-brown { color: ${THEMES.screenie}; font-weight: 600; }
    .ap-muted { color: rgba(255,255,255,0.45); font-style: italic; }
    .ap-cta-row { display: flex; justify-content: center; margin-top: 32px; }
    .ap-discord-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 28px;
      border-radius: 10px;
      background: ${THEMES.about};
      color: #fff;
      text-decoration: none;
      font-size: 15px;
      font-weight: 600;
      box-shadow: 0 0 24px ${THEMES.about}60;
      transition: all 0.3s ease;
    }
    .ap-discord-btn:hover { transform: scale(1.06); box-shadow: 0 0 40px ${THEMES.about}80; }

    /* ── Screenie gallery ────────────────────────────────────── */
    .ap-gallery-header { margin-bottom: 28px; }
    .ap-gallery {
      display: grid;
      grid-template-columns: repeat(1, minmax(0, 1fr));
      gap: 16px;
    }
    @media (min-width: 640px) {
      .ap-gallery { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    @media (min-width: 1024px) {
      .ap-gallery { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    }

    .ap-gallery-item {
      border-radius: 14px;
      overflow: hidden;
      border: 1px solid ${THEMES.screenie}40;
      background: rgba(0,0,0,0.45);
      box-shadow: 0 4px 18px ${THEMES.screenie}12;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
    }
    .ap-gallery-item:hover {
      border-color: ${THEMES.screenie}90;
      box-shadow: 0 8px 36px ${THEMES.screenie}40;
      transform: scale(1.03) translateY(-2px);
    }
    .ap-gallery-frame {
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 10;
      overflow: hidden;
    }
    .ap-gallery-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
      display: block;
    }
    .ap-gallery-item:hover .ap-gallery-frame img { transform: scale(1.08); }

    /* Hover overlay hint */
    .ap-gallery-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.3s ease;
    }
    .ap-gallery-item:hover .ap-gallery-overlay {
      background: rgba(0,0,0,0.25);
    }
    .ap-gallery-overlay-icon {
      opacity: 0;
      transform: scale(0.7);
      transition: all 0.3s ease;
      background: rgba(0,0,0,0.55);
      border-radius: 50%;
      padding: 10px;
      color: #fff;
      font-size: 22px;
    }
    .ap-gallery-item:hover .ap-gallery-overlay-icon {
      opacity: 1;
      transform: scale(1);
    }

    .ap-gallery-badge {
      position: absolute;
      top: 10px;
      left: 10px;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 700;
      background: rgba(0,0,0,0.65);
      border: 1px solid ${THEMES.screenie}80;
      color: ${THEMES.screenie};
      backdrop-filter: blur(8px);
      letter-spacing: 0.08em;
      z-index: 2;
    }

    /* ── Lightbox ─────────────────────────────────────────────── */
    .ap-lightbox {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background: rgba(0,0,0,0.94);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: apLbFadeIn 0.2s ease;
    }
    @keyframes apLbFadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    .ap-lightbox-img {
      max-width: 90vw;
      max-height: 82vh;
      object-fit: contain;
      border-radius: 10px;
      box-shadow: 0 0 80px rgba(0,0,0,0.8), 0 0 30px ${THEMES.screenie}30;
      animation: apLbScale 0.22s ease;
    }
    @keyframes apLbScale {
      from { transform: scale(0.92); opacity: 0; }
      to   { transform: scale(1);    opacity: 1; }
    }
    .ap-lightbox-close {
      position: absolute;
      top: 18px;
      right: 22px;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.2);
      color: #fff;
      border-radius: 50%;
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .ap-lightbox-close:hover { background: rgba(255,255,255,0.2); transform: scale(1.1); }
    .ap-lightbox-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0,0,0,0.55);
      border: 1px solid ${THEMES.screenie}55;
      color: #fff;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .ap-lightbox-nav:hover {
      background: ${THEMES.screenie}40;
      border-color: ${THEMES.screenie}99;
      transform: translateY(-50%) scale(1.1);
    }
    .ap-lightbox-nav.prev { left: 20px; }
    .ap-lightbox-nav.next { right: 20px; }
    .ap-lightbox-badge {
      position: absolute;
      bottom: 22px;
      left: 50%;
      transform: translateX(-50%);
      padding: 5px 16px;
      border-radius: 20px;
      background: rgba(0,0,0,0.65);
      border: 1px solid ${THEMES.screenie}60;
      color: ${THEMES.screenie};
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.1em;
      backdrop-filter: blur(8px);
    }

    /* ── Footer ──────────────────────────────────────────────── */
    .ap-footer {
      border-top: 1px solid ${theme}40;
      padding: 24px 0;
      background: rgba(0,0,0,0.35);
      backdrop-filter: blur(8px);
    }
    .ap-footer-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-wrap: wrap;
      gap: 14px;
    }
    .ap-footer-text { font-size: 0.875rem; transition: color 0.6s ease; }
    .ap-footer-discord {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 8px;
      background: ${theme};
      color: #fff;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      box-shadow: 0 0 15px ${theme}40;
      transition: all 0.3s ease;
    }
    .ap-footer-discord:hover { box-shadow: 0 0 25px ${theme}60; opacity: 0.9; transform: scale(1.05); }

    /* ── Animations ──────────────────────────────────────────── */
    @keyframes apFloat {
      0%,100% { transform: translateY(0);   }
      50%     { transform: translateY(-8px); }
    }

    /* ── Mobile ──────────────────────────────────────────────── */
    @media (max-width: 640px) {
      .ap-hero { padding: 28px 16px 12px; }
      .ap-hero-logo { width: 64px; height: 64px; }
      .ap-hero-title { font-size: 1.75rem; }
      .ap-about-card { padding: 20px; }
      .ap-section-title { font-size: 22px; }
      .ap-body-text { font-size: 15px; }
      .ap-brand-title { font-size: 1.25rem; }
      .ap-lightbox-nav.prev { left: 8px; }
      .ap-lightbox-nav.next { right: 8px; }
    }
  `;

  return (
    <>
      <style>{pageStyles}</style>

      <div className="ap-page">
        {/* ── Background layers ── */}
        <div className="ap-bg-layer" />
        <div className={`ap-art-layer ${isAbout ? "visible" : "hidden"}`} />
        <div className={`ap-art-overlay ${isAbout ? "visible" : "hidden"}`} />
        <div className={`ap-screenie-bg ${!isAbout ? "visible" : "hidden"}`} />

        {/* ── Lightbox ── */}
        {lightboxIdx !== null && (
          <div className="ap-lightbox" onClick={closeLightbox}>
            <button
              className="ap-lightbox-close"
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            >
              <X size={20} />
            </button>
            <button
              className="ap-lightbox-nav prev"
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            >
              <ChevronLeft size={24} />
            </button>
            <img
              src={galleryItems[lightboxIdx].src}
              alt={`Screenshot ${lightboxIdx + 1}`}
              className="ap-lightbox-img"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="ap-lightbox-nav next"
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            >
              <ChevronRight size={24} />
            </button>
            <div className="ap-lightbox-badge">
              {lightboxIdx + 1} / {galleryItems.length}
            </div>
          </div>
        )}

        {/* ── Foreground content ── */}
        <div className="ap-content">

          {/* HEADER */}
          <header className="ap-header">
            <div className="ap-header-top">
              <div className="ap-brand">
                <img src={cruelLogo} alt="Cruel's Logo" className="ap-brand-logo" />
                <div>
                  <h1 className="ap-brand-title">About Cruel</h1>
                  <p className="ap-brand-sub">AQW Best/Worst Guild</p>
                </div>
              </div>
              <button className="ap-back-btn" onClick={onBack}>
                ← Back to Guide
              </button>
            </div>

            {/* Section tabs */}
            <div className="ap-tabs-row">
              <div className="ap-tabs">
                <button
                  className={`ap-tab${section === "about" ? " active" : ""}`}
                  onClick={() => setSection("about")}
                  style={
                    section === "about"
                      ? { background: THEMES.about, boxShadow: `0 0 18px ${THEMES.about}70` }
                      : { color: `${THEMES.about}cc` }
                  }
                >
                  <Users size={15} />
                  About Us
                </button>
                <button
                  className={`ap-tab${section === "screenie" ? " active" : ""}`}
                  onClick={() => setSection("screenie")}
                  style={
                    section === "screenie"
                      ? { background: THEMES.screenie, boxShadow: `0 0 18px ${THEMES.screenie}70` }
                      : { color: `${THEMES.screenie}cc` }
                  }
                >
                  <Camera size={15} />
                  Screenie
                </button>
              </div>
            </div>
          </header>

          {/* HERO — only shown on About Us */}
          {section === "about" && (
            <section className="ap-hero">
              <img src={cruelLogo} alt="Cruel" className="ap-hero-logo" />
              <h2 className="ap-hero-title">CRUEL</h2>
            </section>
          )}

          {/* CONTENT */}
          <main className="ap-main">

            {/* ─── ABOUT US ─── */}
            {section === "about" && (
              <div className="ap-about-card">
                <div className="ap-section-head">
                  <span className="ap-section-icon red">
                    <Users size={22} color={THEMES.about} />
                  </span>
                  <h3 className="ap-section-title red">About Us</h3>
                </div>
                <div className="ap-divider" />
                <p className="ap-body-text">
                  We are{" "}
                  <span className="ap-accent-red">Cruel</span>, We drag each
                  others down, We suck each others wiwi and we love our leader{" "}
                  <span className="ap-accent-red">Xyronius</span> and{" "}
                  <span className="ap-accent-red">HBK</span>{" "}
                  <span className="ap-muted">
                    (jk this web is only a test)
                  </span>
                </p>
              </div>
            )}

            {/* ─── SCREENIE ─── */}
            {section === "screenie" && (
              <div>
                <div className="ap-gallery-header ap-section-head">
                  <span className="ap-section-icon brown">
                    <Camera size={22} color={THEMES.screenie} />
                  </span>
                  <div>
                    <h3 className="ap-section-title brown">Screenie</h3>
                    <p className="ap-section-sub">Click any photo to view full screen</p>
                  </div>
                </div>

                <div className="ap-gallery">
                  {galleryItems.map((item, idx) => (
                    <div
                      key={item.id}
                      className="ap-gallery-item"
                      onClick={() => openLightbox(idx)}
                    >
                      <div className="ap-gallery-frame">
                        <img src={item.src} alt={`Screenshot ${item.id}`} />
                        <div className="ap-gallery-overlay">
                          <span className="ap-gallery-overlay-icon">⛶</span>
                        </div>
                        <div className="ap-gallery-badge">
                          #{item.id.toString().padStart(2, "0")}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>

          {/* FOOTER */}
          <footer className="ap-footer">
            <div className="ap-footer-inner">
              <span className="ap-footer-text" style={{ color: `${theme}cc` }}>
                Need help with ultra clears?
              </span>
              <a
                href="https://discord.gg/aqwcruel"
                target="_blank"
                rel="noopener noreferrer"
                className="ap-footer-discord"
              >
                <DiscordIcon className="h-5 w-5" />
                <span>Join Our Discord</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
