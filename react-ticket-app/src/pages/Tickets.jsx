import React, { useState, useEffect } from 'react'
import TicketCard from '../components/TicketCard'
import TicketForm from '../components/TicketForm'
import { loadTickets, saveTickets } from '../utils/storage'

function uid(){ return Math.random().toString(36).slice(2,9) }

export default function Tickets(){
  const [tickets, setTickets] = useState([])
  const [editing, setEditing] = useState(null)
  const [showForm, setShowForm] = useState(false)
  useEffect(()=> setTickets(loadTickets()), [])

  function createTicket(data){
    const t = { id: uid(), ...data, createdAt: Date.now(), updatedAt: Date.now() }
    const arr = [t, ...tickets]
    setTickets(arr); saveTickets(arr); setShowForm(false)
    alert('Ticket created')
  }

  function updateTicket(id, data){
    const arr = tickets.map(t=> t.id===id ? {...t, ...data, updatedAt: Date.now()} : t)
    setTickets(arr); saveTickets(arr); setEditing(null); alert('Ticket updated')
  }

  function deleteTicket(id){
    const arr = tickets.filter(t=> t.id!==id)
    setTickets(arr); saveTickets(arr); alert('Ticket deleted')
  }

  return (
    <section>
      <h2>Tickets</h2>
      <div style={{display:'flex', gap:8}}>
        <button onClick={()=>{setShowForm(true); setEditing(null)}}>New Ticket</button>
      </div>
      <div style={{marginTop:12}}>
        {showForm && <div className="card"><TicketForm onCancel={()=>setShowForm(false)} onSave={createTicket} /></div>}
        {editing && <div className="card"><h3>Editing</h3><TicketForm initial={editing} onCancel={()=>setEditing(null)} onSave={(d)=>updateTicket(editing.id,d)} /></div>}
      </div>
      <div style={{marginTop:12}} className="grid">
        {tickets.length===0 && <div className="card">No tickets yet</div>}
        {tickets.map(t=> <TicketCard key={t.id} ticket={t} onEdit={(tk)=>{setEditing(tk); setShowForm(false)}} onDelete={deleteTicket} />)}
      </div>
    </section>
  )
}
