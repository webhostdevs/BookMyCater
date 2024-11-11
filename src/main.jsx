import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-ewda4aowim00fxep.us.auth0.com"
    clientId="YIJjRXFRaguYdJtGRgQpFIucPQ6uRNcl"
    authorizationParams={{ redirect_uri: window.location.origin }}
    cacheLocation="localstorage"
  >
    <StrictMode>
      <App />
    </StrictMode>
  </Auth0Provider>
);
