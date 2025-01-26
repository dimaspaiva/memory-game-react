import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

function bootstrap() {
  const rootContainer = document.getElementById('root')
  if (!rootContainer) {
    throw new Error('Root container do not exists')
  }

  createRoot(rootContainer).render(
    <StrictMode>
    <App />
  </StrictMode>,
)
}

bootstrap()
