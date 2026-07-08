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

function App() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="App">
      <header>
        <div>
          <button type="button" onClick={() => setShowSidebar(!showSidebar)}>
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-name="menu">
              <g>
                <path d="M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z" />
                <path d="M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z" />
                <path d="M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z" />
              </g>
            </svg>
          </button>
          <img id="DSV-logo" src={DSVLogo} alt="logo" />
        </div>

        <button type="button">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="print-wifi">
            <path d="m23.375 8.577c-.269-.482-.875-.657-1.36-.39-.482.269-.657.877-.39 1.36.245.441.375.943.375 1.452v5c0 1.654-1.346 3-3 3v-2c0-1.654-1.346-3-3-3h-8c-1.654 0-3 1.346-3 3v2c-1.654 0-3-1.346-3-3v-5c0-1.654 1.346-3 3-3h6c.553 0 1-.447 1-1s-.447-1-1-1h-4v-2c0-1.103.897-2 2-2 .553 0 1-.447 1-1s-.447-1-1-1c-2.206 0-4 1.794-4 4v2c-2.757.001-5 2.244-5 5.001v5c0 2.757 2.243 5 5 5 0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3 2.757 0 5-2.243 5-5v-5c0-.847-.216-1.685-.625-2.423zm-6.375 12.423c0 .552-.448 1-1 1h-8c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h8c.552 0 1 .448 1 1zm2.374-14.343c-1.086-.871-2.662-.871-3.748 0-.432.346-1.06.276-1.406-.154-.346-.431-.276-1.061.154-1.406 1.812-1.453 4.439-1.453 6.252 0 .431.346.5.976.154 1.406-.348.433-.977.498-1.406.154zm-8.1-2.779c-.38-.4-.363-1.033.038-1.413 3.469-3.289 8.906-3.289 12.375 0 .401.38.418 1.013.038 1.413-.38.402-1.013.418-1.413.038-2.699-2.557-6.926-2.557-9.625 0-.4.381-1.033.364-1.413-.038zm6.225 4.122c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
          </svg>
        </button>
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
