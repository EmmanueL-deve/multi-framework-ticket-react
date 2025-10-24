import React, { useState, useEffect } from 'react'

export default function TicketForm({initial, onCancel, onSave}){
  const [title,setTitle] = useState(initial?.title || '')
  const [desc,setDesc] = useState(initial?.description || '')
  const [status,setStatus] = useState(initial?.status || 'open')
  const [priority,setPriority] = useState(initial?.priority || 'medium')
  const [errors,setErrors] = useState({})

  useEffect(()=> setErrors({}), [title, status])

  function validate(){
    const e = {}
    if(!title || title.trim()==='') e.title = 'Title is required'
    if(!['open','in_progress','closed'].includes(status)) e.status = 'Choose a valid status'
    if(desc && desc.length>1000) e.description = 'Description too long'
    setErrors(e)
    return Object.keys(e).length===0
  }

  function submit(e){
    e.preventDefault()
    if(!validate()) return
    onSave({ title: title.trim(), description: desc.trim(), status, priority })
  }

  return (
    <form onSubmit={submit} aria-label="Ticket form">
      <div className="form-group">
        <label htmlFor="t-title">Title</label>
        <input id="t-title" value={title} onChange={e=>setTitle(e.target.value)} aria-invalid={errors.title?true:false} />
        {errors.title && <small role="alert" style={{color:'red'}}>{errors.title}</small>}
      </div>
      <div className="form-group">
        <label htmlFor="t-desc">Description</label>
        <textarea id="t-desc" rows="4" value={desc} onChange={e=>setDesc(e.target.value)}></textarea>
        {errors.description && <small role="alert" style={{color:'red'}}>{errors.description}</small>}
      </div>
      <div className="form-group">
        <label htmlFor="t-status">Status</label>
        <select id="t-status" value={status} onChange={e=>setStatus(e.target.value)}>
          <option value="open">open</option>
          <option value="in_progress">in_progress</option>
          <option value="closed">closed</option>
        </select>
        {errors.status && <small role="alert" style={{color:'red'}}>{errors.status}</small>}
      </div>
      <div className="form-group">
        <label htmlFor="t-priority">Priority</label>
        <select id="t-priority" value={priority} onChange={e=>setPriority(e.target.value)}>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </div>
      <div style={{display:'flex', gap:8}}>
        <button type="submit">Save</button>
        <button type="button" className="secondary" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  )
}
