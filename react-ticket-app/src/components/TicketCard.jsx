import React from 'react'

function colorClass(status){
  if(status==='open') return 'status-open';
  if(status==='in_progress') return 'status-in_progress';
  return 'status-closed';
}

export default function TicketCard({ticket, onEdit, onDelete}){
  return (
    <article className="card" aria-labelledby={'t-'+ticket.id}>
      <h3 id={'t-'+ticket.id}>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <div style={{display:'flex',gap:8,alignItems:'center',marginTop:8}}>
        <span className={`status-tag ${colorClass(ticket.status)}`}>{ticket.status.replace('_',' ')}</span>
        <small>Priority: {ticket.priority || 'medium'}</small>
      </div>
      <div style={{marginTop:10, display:'flex', gap:8}}>
        <button onClick={()=>onEdit(ticket)}>Edit</button>
        <button onClick={()=>{ if(confirm('Delete this ticket?')) onDelete(ticket.id) }}>Delete</button>
      </div>
    </article>
  )
}
