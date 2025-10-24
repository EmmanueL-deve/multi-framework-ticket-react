import React from 'react'
import { loadTickets } from '../utils/storage'
import { Link } from 'react-router-dom'

export default function Dashboard(){
  const tickets = loadTickets()
  const total = tickets.length
  const open = tickets.filter(t=>t.status==='open').length
  const resolved = tickets.filter(t=>t.status==='closed').length

  return (
    <section>
      <h2>Dashboard</h2>
      <div className="grid" style={{gridTemplateColumns:'repeat(3,1fr)'}}>
        <div className="card"><h3>Total Tickets</h3><p style={{fontSize:18}}>{total}</p></div>
        <div className="card"><h3>Open</h3><p style={{fontSize:18}}>{open}</p></div>
        <div className="card"><h3>Resolved</h3><p style={{fontSize:18}}>{resolved}</p></div>
      </div>
      <div style={{marginTop:16}}>
        <Link to="/tickets"><button>Go to Tickets</button></Link>
      </div>
    </section>
  )
}
