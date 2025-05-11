import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "antd/dist/reset.css"; // Estilos do Ant Design
import AppRoutes from './routes/AppRoutes';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)
