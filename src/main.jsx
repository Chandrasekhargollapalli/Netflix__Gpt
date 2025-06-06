
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppStore from './Redux/AppStore.js'


createRoot(document.getElementById('root')).render(
    
<BrowserRouter>
<Provider store={AppStore}>
    <App />
    </Provider>
    </BrowserRouter>
 
)
