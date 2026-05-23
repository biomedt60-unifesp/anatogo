import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { DexPage } from './pages/DexPage'
import { EntryPage } from './pages/EntryPage'
import { GuiaPage } from './pages/GuiaPage'
import { IntroPage } from './pages/IntroPage'
import { LoadingPage } from './pages/LoadingPage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'

function getBasename() {
  const base = import.meta.env.BASE_URL
  if (base === '/') return undefined
  return base.endsWith('/') ? base.slice(0, -1) : base
}

export default function App() {
  return (
    <BrowserRouter basename={getBasename()}>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/entrada" element={<Navigate to="/login?view=signin" replace />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/guia" element={<GuiaPage />} />
        <Route path="/dex" element={<DexPage />} />
        <Route path="/dex/:slug" element={<EntryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
