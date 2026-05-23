import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const ghRedirect = sessionStorage.getItem('gh-pages-redirect')
if (ghRedirect) {
  sessionStorage.removeItem('gh-pages-redirect')
  window.history.replaceState(null, '', ghRedirect)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
