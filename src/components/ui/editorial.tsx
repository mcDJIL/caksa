import type { ReactNode } from "react";
import { Link } from "react-router";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow"><span />{children}</div>;
}

export function EyebrowBlack({ children }: { children: ReactNode }) {
  return <div className="eyebrow text-black "><span />{children}</div>;
}

export function ArrowLink({ to, children }: { to: string; children: ReactNode }) {
  return <Link className="arrow-link" to={to}>{children} <b>↗</b></Link>;
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
