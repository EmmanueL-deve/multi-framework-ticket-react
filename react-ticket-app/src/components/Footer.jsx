import React from 'react'

export default function Footer(){
  return (
    <footer className="footer" role="contentinfo" aria-label="Footer">
      <div className="footer-inner">
        <div>© {new Date().getFullYear()} TicketApp — EMIRATE</div>
        <div>Built with ❤️ • Accessible • Responsive</div>
      </div>
    </footer>
  )
}
