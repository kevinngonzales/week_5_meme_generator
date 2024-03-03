import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import necessary components
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// wrap app with QueryClientProvider at the root level to provide the query client to all components
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={new QueryClient}>
  <App />
</QueryClientProvider>
)
