export const metadata = { title: 'OpSpace-DZ' };
import './theme.css';
export default function RootLayout({ children }) {
  return (<html lang="fr"><body>
    <header className="header"><div className="container header-inner">
      <img src="/opspace-logo.svg" alt="OpSpace-DZ"/><nav style={{marginLeft:16}}>
        <a href="/" style={{marginRight:12}}>Accueil</a>
        <a href="/admin" style={{marginRight:12}}>Admin</a>
        <a href="/login">Connexion</a>
      </nav></div></header>
    <main className="container">{children}</main>
    <footer className="container" style={{opacity:.6,padding:'14px 0'}}>© {new Date().getFullYear()} OpSpace-DZ</footer>
  </body></html>); }