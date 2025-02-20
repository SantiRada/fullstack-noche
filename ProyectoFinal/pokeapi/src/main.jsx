import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './reset.css'
import './style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)