import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing(){
  return (
    <section>
      <div className="hero" role="region" aria-label="Hero">
        <div className="decor-circle circle-1" aria-hidden="true"></div>
        <div className="decor-circle circle-2" aria-hidden="true"></div>
        <h1>TicketApp — Manage your tasks with ease</h1>
        <p>Simple, responsive ticket management. Create, track, and resolve issues quickly.</p>
        <div style={{marginTop:16, display:'flex', gap:8}}>
          <Link to="/auth/signup"><button>Get Started</button></Link>
          <Link to="/auth/login"><button className="secondary">Login</button></Link>
        </div>
        <div className="wave" aria-hidden="true" dangerouslySetInnerHTML={{__html: document.querySelector('link[rel="preload-wave"]') ? '' : ''}}></div>
      </div>

      <div style={{height:24}} />
      <div className="grid" role="region" aria-label="Features">
        <div className="card"><h3>Fast</h3><p>Built for speed and simplicity.</p></div>
        <div className="card"><h3>Accessible</h3><p>Keyboard friendly, good contrast.</p></div>
        <div className="card"><h3>Consistent</h3><p>Same UI across pages.</p></div>
      </div>
    </section>
  )
}
