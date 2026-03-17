import{w as h,r as m,j as e,H as x,o as f,F as w,t as v}from"./index-BKqN0j-e.js";import{L as y,S as j}from"./satellite-DPNlBhZ-.js";import{G as E}from"./git-branch-KRkSJgXp.js";const k=h("/space-tech-radar/index.html"),N='Lampata are proud maintainers of the Earth Observation Tech Radar. It tracks the open-source tools, standards, and practices shaping downstream earth observation science, analytics, and applied delivery. <a href="https://github.com/sunnydean/space-tech-radar" target="_blank" rel="noreferrer noopener">View the GitHub repository</a>.',R=`
  :root {
    --bg: transparent;
    --ink: #00458b;
    --muted: rgba(0, 69, 139, 0.72);
    --line: rgba(0, 69, 139, 0.12);
    --accent: #00458b;
    --core-color: #00458b;
    --focus-ring: rgba(245, 215, 4, 0.56);
    --ring-stroke: rgba(0, 69, 139, 0.22);
    --axis-stroke: rgba(0, 69, 139, 0.3);
    --ring-label-fill: #00458b;
    --ring-label-stroke: #ffffff;
    --popup-border: rgba(0, 69, 139, 0.14);
    --popup-bg: rgba(255, 255, 255, 0.98);
    --popup-shadow: 0 18px 34px rgba(0, 69, 139, 0.14);
    --popup-meta: rgba(0, 69, 139, 0.72);
    --mode-btn-border: rgba(0, 69, 139, 0.18);
    --mode-btn-bg1: rgba(255, 255, 255, 0.98);
    --mode-btn-bg2: rgba(245, 247, 250, 0.98);
    --mode-btn-color: #00458b;
    --mode-btn-hover-color: #00376f;
    --mode-btn-shadow: 0 10px 26px rgba(0, 69, 139, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.82);
    --beam-col-start: rgba(245, 215, 4, 0.08);
    --beam-col-mid: rgba(245, 215, 4, 0.7);
    --beam-col-end: rgba(245, 215, 4, 0.08);
    --beam-glow: rgba(245, 215, 4, 0.28);
  }

  html,
  body {
    color: var(--ink);
    background: transparent;
  }

  .wrap {
    max-width: none;
    padding: 1.05rem 1.25rem 3.2rem;
  }

  header {
    margin-bottom: 1.15rem;
  }

  #radar-title,
  .quad-title,
  .core-title,
  .story h2,
  .quadrant-details h2 {
    font-family: "Space Grotesk", "Public Sans", sans-serif;
  }

  #radar-subtitle,
  .quad-entry,
  .story,
  .meta,
  .quadrant-description {
    font-family: "Space Grotesk", "Public Sans", sans-serif;
  }

  #radar-title {
    font-size: clamp(2.45rem, 4.7vw, 4.55rem);
    line-height: 0.94;
    letter-spacing: -0.05em;
    white-space: nowrap;
    gap: 0.28rem;
  }

  #radar-title > span:last-child {
    white-space: nowrap;
  }

  #radar-subtitle {
    max-width: 60rem;
    margin: 1rem auto 0;
    font-size: clamp(1.08rem, 1.28vw, 1.3rem);
    font-weight: 600;
    line-height: 1.72;
    letter-spacing: -0.01em;
    color: rgba(0, 69, 139, 0.86);
  }

  #radar-subtitle a {
    color: #00458b;
    font-weight: 800;
    text-decoration: underline;
    text-decoration-color: rgba(245, 215, 4, 0.9);
    text-underline-offset: 0.18em;
  }

  .mode-word-toggle {
    appearance: none;
    -webkit-appearance: none;
    border: 0;
    border-radius: 0;
    background: transparent;
    padding: 0;
    min-width: 0;
    color: inherit;
    opacity: 1;
    font-weight: 800;
    pointer-events: none;
    cursor: default;
    box-shadow: none;
    -webkit-text-fill-color: currentColor;
  }

  .mode-word-toggle:hover,
  .mode-word-toggle:focus-visible,
  .mode-word-toggle:active {
    transform: none;
    color: inherit;
    border-color: transparent;
    background: transparent;
    box-shadow: none;
  }

  .mode-word-toggle:disabled {
    opacity: 1;
    color: inherit;
    -webkit-text-fill-color: currentColor;
  }

  .mode-visual {
    display: none !important;
  }

  .mode-switch {
    gap: 0.34rem;
    margin-right: 0;
  }
`;function _(o){const t=o.contentDocument;if(!(t!=null&&t.head))return null;let i=t.getElementById("lampata-radar-overrides");i||(i=t.createElement("style"),i.id="lampata-radar-overrides",i.textContent=R,t.head.appendChild(i));const s=t.getElementById("radar-subtitle"),r=t.getElementById("mode-toggle"),a=t.getElementById("mode-visual");return s&&(s.innerHTML=N),r&&(r.disabled=!0,r.setAttribute("aria-disabled","true"),r.setAttribute("tabindex","-1")),a&&(a.disabled=!0,a.setAttribute("aria-disabled","true"),a.setAttribute("tabindex","-1")),t}function A(){const o=m.useRef(null),[t,i]=m.useState(1580);return m.useEffect(()=>{const s=o.current;if(!s)return;let r=null,a=null,l=null;const d=()=>{var u,g;const n=s.contentDocument;if(!n)return;const p=Math.max(((u=n.body)==null?void 0:u.scrollHeight)??0,((g=n.documentElement)==null?void 0:g.scrollHeight)??0);p>0&&i(p+18)},b=()=>{const n=_(s);if(!(n!=null&&n.body)){r=window.requestAnimationFrame(b);return}d(),a=new ResizeObserver(d),a.observe(n.body),l=new MutationObserver(d),l.observe(n.body,{subtree:!0,childList:!0,characterData:!0,attributes:!0})},c=()=>{r!==null&&window.cancelAnimationFrame(r),r=window.requestAnimationFrame(b)};return s.addEventListener("load",c),c(),()=>{s.removeEventListener("load",c),r!==null&&window.cancelAnimationFrame(r),a==null||a.disconnect(),l==null||l.disconnect()}},[]),e.jsx("iframe",{ref:o,title:"Earth Observation Tech Radar",src:k,className:"block w-full border-0 bg-transparent",style:{height:`${t}px`}})}function L(){return e.jsxs("div",{className:"site-shell min-h-screen bg-background",children:[e.jsx(x,{}),e.jsxs("main",{className:"relative overflow-hidden bg-white px-6 pb-20 pt-56",children:[e.jsxs("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_50%_0%,rgba(0,69,139,0.08),transparent_64%)]"}),e.jsx("div",{className:"absolute left-[10%] top-36 h-24 w-24 rounded-full border border-[#00458b]/7"}),e.jsx("div",{className:"absolute right-[11%] top-40 h-18 w-18 rounded-full border border-[#f5d704]/22"}),e.jsx("div",{className:"absolute inset-x-0 top-[11.75rem] mx-auto h-px max-w-6xl bg-[linear-gradient(90deg,transparent,rgba(0,69,139,0.16),transparent)]"}),e.jsx("div",{className:"absolute inset-x-0 top-34 mx-auto h-40 max-w-5xl [background-image:radial-gradient(circle,rgba(0,69,139,0.14)_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.16]"})]}),e.jsx("section",{children:e.jsx("div",{className:"relative z-10 mx-auto max-w-7xl",children:e.jsx(A,{})})}),e.jsxs("section",{className:"relative z-10 pt-14",children:[e.jsx("div",{className:"mx-auto grid max-w-6xl gap-5 md:grid-cols-3",children:[{icon:y,title:"Earth observation focus",copy:"A curated view of the open-source tools, standards, and practices shaping applied EO work."},{icon:E,title:"Open-source oriented",copy:"Built to point teams toward inspectable, reusable, community-driven technology choices."},{icon:j,title:"Maintained by Lampata",copy:"Updated as part of Lampata's research and engineering work across geo-spatial AI and open science."}].map(o=>{const t=o.icon;return e.jsxs("article",{className:"relative overflow-hidden rounded-[1.1rem] border border-[#00458b]/8 bg-[#fbfdff] p-6 shadow-[0_22px_50px_-46px_rgba(0,69,139,0.2)]",children:[e.jsx("div",{className:"absolute right-0 top-0 h-18 w-18 rounded-bl-[1.1rem] bg-[#f5d704]/14"}),e.jsx("div",{className:"brand-gold-fill mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-[#00458b]",children:e.jsx(t,{className:"h-5 w-5"})}),e.jsx("h3",{className:"font-display text-[1.4rem] leading-tight tracking-[-0.04em] text-[#00458b]",children:o.title}),e.jsx("p",{className:"mt-3 text-sm leading-7 text-[#00458b]/68",children:o.copy})]},o.title)})}),e.jsx("div",{className:"mx-auto mt-10 flex max-w-6xl justify-center",children:e.jsxs("a",{href:"https://github.com/sunnydean/space-tech-radar",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 text-sm font-semibold text-[#00458b] transition-opacity hover:opacity-72",children:["View the radar repository",e.jsx(f,{className:"h-4 w-4"})]})})]})]}),e.jsx(w,{})]})}v.createRoot(document.getElementById("root")).render(e.jsx(L,{}));
