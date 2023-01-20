import React from 'react'
import ReactDOM from 'react-dom/client'

import { Footer, Sidebar } from './Layouts'
import { Advantages, Gallery, Main, Platforms, Team } from './containers'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <div className="container">
      <Sidebar />
      <Main />
      <Advantages />
      <Team />
      <Platforms />
      <Gallery />
      <Footer />
    </div>
  </React.StrictMode>
)
