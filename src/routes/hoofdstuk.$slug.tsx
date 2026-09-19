import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteShell, StatusBadge } from "@/components/site-shell";
import { chapters, claims, sources } from "@/lib/dossier-data";

export const Route = createFileRoute("/hoofdstuk/$slug")({
  loader: ({params}) => { const chapter=chapters.find(c=>c.slug===params.slug); if(!chapter) throw notFound(); return chapter; },
  head:({loaderData})=>({meta:[{title:loaderData?`${loaderData.title} — Achter het profiel`:"Hoofdstuk niet gevonden"},{name:"description",content:loaderData?.deck??"Dit hoofdstuk bestaat niet."},{property:"og:title",content:loaderData?.title??"Hoofdstuk niet gevonden"},{property:"og:description",content:loaderData?.deck??"Dit hoofdstuk bestaat niet."},{property:"og:type",content:"article"},{name:"twitter:card",content:"summary"}]}),
  component: ChapterPage,
  notFoundComponent:()=> <SiteShell><main className="page-wrap"><header className="page-intro"><p className="eyebrow">404</p><h1>Dit hoofdstuk bestaat niet.</h1><Link to="/">Terug naar het dossier</Link></header></main></SiteShell>
});
function ChapterPage(){const chapter=Route.useLoaderData(); const index=chapters.findIndex(c=>c.slug===chapter.slug); const previous=chapters[index-1]; const following=chapters[index+1]; const chapterClaims=claims.filter(c=>c.chapter===chapter.nr); const sourceIds=[...new Set(chapterClaims.flatMap(c=>c.sources))]; return <SiteShell><main>
  <header className="chapter-hero"><div className="mx-auto max-w-5xl"><div className="chapter-meta"><span>Dossier 01</span><span>{chapter.nr} / 06</span><span>8 min. lezen</span></div><p className="eyebrow text-alert">Hoofdstuk {chapter.nr}</p><h1>{chapter.title}</h1><p>{chapter.deck}</p></div></header>
  <div className="reader-layout"><aside className="reader-index"><p className="eyebrow">In dit hoofdstuk</p>{chapter.sections.map((s,i)=><a href={`#deel-${i+1}`} key={s[0]}><span>0{i+1}</span>{s[0]}</a>)}<Link to="/claims">Claimregister →</Link></aside>
  <article className="article-body">{chapter.sections.map((s,i)=><section id={`deel-${i+1}`} key={s[0]}><p className="section-number">0{i+1}</p><h2>{s[0]}</h2><p>{s[1]}</p>{i===0&&chapterClaims[0]&&<div className="inline-claim"><div><code>{chapterClaims[0].id}</code><StatusBadge status={chapterClaims[0].status}/></div><strong>{chapterClaims[0].title}</strong></div>}</section>)}
  {sourceIds.length>0&&<section className="chapter-sources"><p className="eyebrow">Geraadpleegde bronnen</p>{sourceIds.map(id=>{const s=sources.find(x=>x.id===id);return s?<a href={s.url} target="_blank" rel="noreferrer" key={id}><code>{id}</code><span>{s.publisher} — {s.title}</span>↗</a>:null})}</section>}
  </article></div>
  <nav className="chapter-nav">{previous?<Link to="/hoofdstuk/$slug" params={{slug:previous.slug}}><ArrowLeft/> <span><small>Vorige</small>{previous.title}</span></Link>:<Link to="/"><ArrowLeft/><span><small>Terug</small>Voorpagina</span></Link>}{following?<Link className="next" to="/hoofdstuk/$slug" params={{slug:following.slug}}><span><small>Volgende</small>{following.title}</span><ArrowRight/></Link>:<Link className="next" to="/bronnen"><span><small>Verder</small>Bronnenregister</span><ArrowRight/></Link>}</nav>
  </main></SiteShell>}