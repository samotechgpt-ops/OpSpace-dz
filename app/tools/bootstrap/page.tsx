'use client';import {useState} from 'react';
export default function BootstrapTool(){const [email,setEmail]=useState('');const [password,setPassword]=useState('');
async function go(){const r=await fetch('/api/admin/bootstrap',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});alert(r.status+' '+r.statusText+'\n'+await r.text());}
return (<div className='hero'><h1>Créer le Super-Admin</h1><label>Email</label><input value={email} onChange={e=>setEmail(e.target.value)}/><label>Mot de passe</label><input value={password} onChange={e=>setPassword(e.target.value)}/><div style={{marginTop:12}}><button className='btn' onClick={go}>Créer</button></div></div>);}
