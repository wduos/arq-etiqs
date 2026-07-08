/*
import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App

import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';

function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <div className="app-layout">
      <sidebar>
        <button onClick={() => setCurrentTab('dashboard')}>Dashboard</button>
        <button onClick={() => setCurrentTab('settings')}>Settings</button>
      </sidebar>

      <main>
        {currentTab === 'dashboard' && <Dashboard />}
        {currentTab === 'settings' && <Settings />}
      </main>
    </div>
  );
}

*/
import { useState } from 'react'
import DSVLogo from './assets/dsv-logo.png'
import iconMenu from './assets/icons/menu.svg'

function App() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="App">
      <header>
        <button type="button" onClick={() => setShowSidebar(!showSidebar)}>
          <img src={iconMenu} alt="icone de menu" />
        </button>
        <img src={DSVLogo} alt="logo" />
      </header>

      <sidebar className={showSidebar ? 'sidebar show' : 'sidebar hide'}>
        <button type="button">Home</button>
        <small>BAT</small>
        <button type="button">Recebimento [REC]</button>
        <button type="button">Expedição [EXP]</button>
        <button type="button">Reporte de Transferência</button>
        <small>HUAWEI</small>
        <button type="button">Expedição</button>
      </sidebar>
    </div>
  )
}

export default App
