import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppThemeProvider } from './theme.jsx'
import { Provider } from 'react-redux'
import store from './store.js'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <App />
        <Toaster position="top-right" />
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>
)
