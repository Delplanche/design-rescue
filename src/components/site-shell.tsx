import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const navigation = [
  ["Manifest", "/"], ["Dossier", "/dossier"], ["Boek", "/boek"],
  ["Filosofie", "/filosofie"], ["Juridisch", "/juridisch"],
  ["Ontkoppeling", "/ontkoppeling"], ["Archief", "/archief"],
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="dossier-canvas min-h-screen text-foreground">
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="site-wordmark" aria-label="De Marktplaats van de Ziel, voorpagina">
          <span>De Marktplaats</span><span>van de Ziel</span>
        </Link>
        <nav className="desktop-nav" aria-label="Hoofdnavigatie">
          {navigation.map(([label,to])=><Link key={to} to={to} className="nav-link" activeOptions={{exact:to==="/"}}>{label}</Link>)}
        </nav>
        <Button variant="ghost" size="icon" className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Menu sluiten" : "Menu openen"}>{open ? <X/> : <Menu/>}</Button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobiele navigatie">
        {navigation.map(([label,to])=><Link key={to} to={to} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>}
    </header>
    {children}
    <footer className="archive-footer"><div className="footer-inner"><div><p className="footer-kicker">Onafhankelijke onderzoeks- en essaypublicatie</p><p className="footer-title">De Marktplaats van de Ziel</p><p>Feitelijk dossier: Achter het profiel · Editie 01 · Online correcties zijn leidend.</p></div><div><p className="footer-kicker">Auteur</p><p>Jona Zeno De Smet<br/><span>Delplanche</span></p></div><nav aria-label="Voetnavigatie"><Link to="/archief">Archief</Link><Link to="/claims">Claims</Link><Link to="/bronnen">Bronnen</Link><Link to="/methodologie">Methode</Link><a href="mailto:redactie@achterhetprofiel.nl">Correctie <ArrowUpRight/></a></nav></div><div className="footer-base"><span>Openbaar archief voor controle en debat</span><span>© 2026 Jona Zeno De Smet</span></div></footer>
  </div>;
}

export function StatusBadge({ status }: { status: string }) {
  const key = status.toLowerCase().replaceAll(" ", "-");
  return <span className={`status-badge status-${key}`}><i />{status}</span>;
}