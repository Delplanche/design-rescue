import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="dossier-canvas min-h-screen text-foreground">
    <header className="site-header">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3" aria-label="Achter het profiel, voorpagina">
          <span className="signal-mark" /><span className="font-serif text-xl">Achter het profiel</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Hoofdnavigatie">
          <Link to="/hoofdstuk/$slug" params={{ slug: "markt-achter-het-profiel" }} className="nav-link">Lees</Link>
          <Link to="/claims" className="nav-link">Claims</Link><Link to="/bronnen" className="nav-link">Bronnen</Link><Link to="/methodologie" className="nav-link">Methode</Link>
        </nav>
        <button className="icon-button md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Menu sluiten" : "Menu openen"}>{open ? <X size={19}/> : <Menu size={19}/>}</button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobiele navigatie">
        <Link to="/hoofdstuk/$slug" params={{ slug: "markt-achter-het-profiel" }} onClick={() => setOpen(false)}>Lees het dossier</Link>
        <Link to="/claims" onClick={() => setOpen(false)}>Claims</Link><Link to="/bronnen" onClick={() => setOpen(false)}>Bronnen</Link><Link to="/methodologie" onClick={() => setOpen(false)}>Methodologie</Link>
      </nav>}
    </header>
    {children}
    <footer className="border-t border-glass-line"><div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6">
      <div><p className="font-serif text-2xl">Achter het profiel</p><p className="mt-2 max-w-sm text-sm text-muted-foreground">Een controleerbare onderzoeksuitgave over commerciële digitale intimiteit.</p></div>
      <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm sm:justify-end"><Link to="/methodologie">Methodologie</Link><Link to="/bronnen">Bronnen</Link><a href="mailto:redactie@achterhetprofiel.nl">Correctie melden <ArrowUpRight className="inline" size={13}/></a></div>
    </div></footer>
  </div>;
}

export function StatusBadge({ status }: { status: string }) {
  const key = status.toLowerCase().replaceAll(" ", "-");
  return <span className={`status-badge status-${key}`}><i />{status}</span>;
}