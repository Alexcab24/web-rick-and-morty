// import '@fontsource-variable/open-sans';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { ApolloProvider } from '@apollo/client'
import client from './graphql/client.ts'

import './styles/global.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>
)
