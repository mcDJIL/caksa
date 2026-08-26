import type { ReactNode } from "react";

export default function PageHero({
  label,
  title,
  description,
  image,
  actionLabel,
  onActionClick,
  children,
}: {
  label: string
  title: ReactNode
  description: string
  image: string
  actionLabel?: string
  onActionClick?: () => void
  children: ReactNode
}) {
  return <>
    <section className="page-hero min-w-0">
        <div className="page-hero-image">
            <img src={image} alt="" />
        </div>
        <div className="page-hero-grid" />
        <div className="page-hero-meta max-[380px]:!left-[14px] max-[380px]:!right-[14px]">
            <span>CAKSA / {label.toUpperCase()}</span>
            <span>07°16′S — 112°47′E</span>
        </div>
        <div className="page-hero-content max-[380px]:!left-[14px] max-[380px]:!max-w-[calc(100vw-28px)]">
            <span className="page-kicker">[ {label.toUpperCase()} ]</span>
            <h1 className="max-[380px]:!text-[2.95rem]">{title}</h1>
            <p className="max-[380px]:!max-w-[270px]">{description}</p>
            {actionLabel && onActionClick && (
                <button type="button" className="arrow-link page-hero-cta" onClick={onActionClick}>
                    {actionLabel} <b>↓</b>
                </button>
            )}
        </div>
        <div className="page-hero-line max-[380px]:!left-[14px] max-[380px]:!right-[14px]">
            <span>GALA AKASA WIRYA SATYA</span>
            <i />
            <span>SCROLL TO EXPLORE ↓</span>
        </div>
        <div className="page-hero-stamp max-[380px]:!right-[14px]">
            CAKSA<br />▲<br />2025
        </div>
        <div className="page-hero-vertical">
            POLITEKNIK ELEKTRONIKA NEGERI SURABAYA
        </div>
    </section>
    {children}
</>; }
