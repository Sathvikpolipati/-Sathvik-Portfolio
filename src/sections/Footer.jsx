export function Footer() {
  return (
    <footer style={{ textAlign:'center', padding:'3rem 2rem', color:'var(--muted)', fontFamily:"'JetBrains Mono',monospace", fontSize:'0.72rem', borderTop:'1px solid var(--border)', position:'relative', zIndex:2, letterSpacing:'0.06em' }}>
      <p>Designed & built by <span style={{ color:'var(--violet)' }}>Sathvik Polipati</span> &nbsp;·&nbsp; B.Tech CSE · NBKRIST &nbsp;·&nbsp; © 2025</p>
      <p style={{ marginTop:'0.4rem', fontSize:'0.65rem', opacity:0.6 }}>Cyber Security · Full-Stack Development · AI/ML</p>
    </footer>
  );
}