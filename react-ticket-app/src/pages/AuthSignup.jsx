import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signupMock } from '../utils/auth'

export default function Signup(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const navigate = useNavigate()

  function submit(e){
    e.preventDefault()
    try{
      signupMock(email,password)
      navigate('/dashboard')
    }catch(err){
      setError(err.message || 'Signup failed')
    }
  }

  return (
    <section style={{maxWidth:480, margin:'0 auto'}}>
      <h2>Sign up</h2>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        {error && <div role="alert" style={{color:'red'}}>{error}</div>}
        <div style={{display:'flex', gap:8, marginTop:8}}>
          <button type="submit">Create account</button>
        </div>
      </form>
    </section>
  )
}
