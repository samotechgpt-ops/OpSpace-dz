'use client';import {useState} from 'react';
export default function LoginPage(){const [email,setEmail]=useState('');const [password,setPassword]=useState('');
async function doLogin(){const r=await fetch('/api/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});alert(await r.text());}
return (<div className='hero'><h1>Connexion</h1><label>Email</label><input value={email} onChange={e=>setEmail(e.target.value)}/><label>Mot de passe</label><input type='password' value={password} onChange={e=>setPassword(e.target.value)}/><div style={{marginTop:12}}><button className='btn' onClick={doLogin}>Se connecter</button></div></div>);}
