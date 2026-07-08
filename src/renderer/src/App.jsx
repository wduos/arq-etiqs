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
import { printerIP, printerPort, setPrinterIP, setPrinterPort } from './helpers/GlobalConfig'

function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="App">
      <header>
        <div>
          <button type="button" onClick={() => setShowSidebar(!showSidebar)}>
            <svg viewBox="0 0 490.667 490.667" xmlns="http://www.w3.org/2000/svg" data-name="menu">
              <g>
                <path d="M469.333,224h-448C9.551,224,0,233.551,0,245.333c0,11.782,9.551,21.333,21.333,21.333h448   c11.782,0,21.333-9.551,21.333-21.333C490.667,233.551,481.115,224,469.333,224z" />
                <path d="M21.333,117.333h448c11.782,0,21.333-9.551,21.333-21.333s-9.551-21.333-21.333-21.333h-448C9.551,74.667,0,84.218,0,96   S9.551,117.333,21.333,117.333z" />
                <path d="M469.333,373.333h-448C9.551,373.333,0,382.885,0,394.667C0,406.449,9.551,416,21.333,416h448   c11.782,0,21.333-9.551,21.333-21.333C490.667,382.885,481.115,373.333,469.333,373.333z" />
              </g>
            </svg>
          </button>
          <img id="DSV-logo" src={DSVLogo} alt="logo" />
        </div>

        <button type="button" onClick={() => setShowModal(!showModal)}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="print-wifi">
            <path d="m23.375 8.577c-.269-.482-.875-.657-1.36-.39-.482.269-.657.877-.39 1.36.245.441.375.943.375 1.452v5c0 1.654-1.346 3-3 3v-2c0-1.654-1.346-3-3-3h-8c-1.654 0-3 1.346-3 3v2c-1.654 0-3-1.346-3-3v-5c0-1.654 1.346-3 3-3h6c.553 0 1-.447 1-1s-.447-1-1-1h-4v-2c0-1.103.897-2 2-2 .553 0 1-.447 1-1s-.447-1-1-1c-2.206 0-4 1.794-4 4v2c-2.757.001-5 2.244-5 5.001v5c0 2.757 2.243 5 5 5 0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3 2.757 0 5-2.243 5-5v-5c0-.847-.216-1.685-.625-2.423zm-6.375 12.423c0 .552-.448 1-1 1h-8c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h8c.552 0 1 .448 1 1zm2.374-14.343c-1.086-.871-2.662-.871-3.748 0-.432.346-1.06.276-1.406-.154-.346-.431-.276-1.061.154-1.406 1.812-1.453 4.439-1.453 6.252 0 .431.346.5.976.154 1.406-.348.433-.977.498-1.406.154zm-8.1-2.779c-.38-.4-.363-1.033.038-1.413 3.469-3.289 8.906-3.289 12.375 0 .401.38.418 1.013.038 1.413-.38.402-1.013.418-1.413.038-2.699-2.557-6.926-2.557-9.625 0-.4.381-1.033.364-1.413-.038zm6.225 4.122c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
          </svg>
        </button>
      </header>

      <aside className={showSidebar ? 'sidebar show' : 'sidebar hide'}>
        <button type="button">Home</button>
        <small>BAT</small>
        <button type="button">Recebimento [REC]</button>
        <button type="button">Expedição [EXP]</button>
        <button type="button">Reporte de Transferência</button>
        <small>HUAWEI</small>
        <button type="button">Expedição</button>
      </aside>

      <div className={showModal ? 'modal show' : 'modal hide'}>
        <div className="modalMask" onClick={() => setShowModal(!showModal)}></div>
        <div className="modalContent">
          <h2 className="modalTitle">Configuração da Impressora</h2>
          <button className="closeModalBtn" type="button" onClick={() => setShowModal(!showModal)}>
            <svg viewBox="0 0 24 24" data-name="cross">
              <path d="M14.121,12,18,8.117A1.5,1.5,0,0,0,15.883,6L12,9.879,8.11,5.988A1.5,1.5,0,1,0,5.988,8.11L9.879,12,6,15.882A1.5,1.5,0,1,0,8.118,18L12,14.121,15.878,18A1.5,1.5,0,0,0,18,15.878Z" />
            </svg>
          </button>
          <hr />
          <div>
            <h3>Endereço de IP</h3>
            <div className="printerInfoContainer">
              <p>{printerIP}</p>
              <svg data-name="pencil" viewBox="0 0 24 24">
                <path d="M22.987,5.451c-.028-.177-.312-1.767-1.464-2.928-1.157-1.132-2.753-1.412-2.931-1.44-.237-.039-.479,.011-.682,.137-.118,.073-2.954,1.849-8.712,7.566C3.135,14.807,1.545,17.213,1.48,17.312c-.091,.14-.146,.301-.159,.467l-.319,4.071c-.022,.292,.083,.578,.29,.785,.188,.188,.443,.293,.708,.293,.025,0,.051,0,.077-.003l4.101-.316c.165-.013,.324-.066,.463-.155,.1-.064,2.523-1.643,8.585-7.662,5.759-5.718,7.548-8.535,7.622-8.652,.128-.205,.178-.45,.14-.689Zm-9.17,7.922c-4.93,4.895-7.394,6.78-8.064,7.263l-2.665,.206,.206-2.632c.492-.672,2.393-3.119,7.312-8.004,1.523-1.512,2.836-2.741,3.942-3.729,.01,.002,.02,.004,.031,.006,.012,.002,1.237,.214,2.021,.98,.772,.755,.989,1.93,.995,1.959,0,.004,.002,.007,.002,.011-.999,1.103-2.245,2.416-3.78,3.94Zm5.309-5.684c-.239-.534-.597-1.138-1.127-1.656-.524-.513-1.134-.861-1.674-1.093,1.139-.95,1.908-1.516,2.309-1.797,.419,.124,1.049,.377,1.481,.8,.453,.456,.695,1.081,.81,1.469-.285,.4-.851,1.159-1.798,2.278Z" />
              </svg>
            </div>
            <h3>Porta</h3>
            <div className="printerInfoContainer">
              <p>{printerPort}</p>
              <svg data-name="pencil" viewBox="0 0 24 24">
                <path d="M22.987,5.451c-.028-.177-.312-1.767-1.464-2.928-1.157-1.132-2.753-1.412-2.931-1.44-.237-.039-.479,.011-.682,.137-.118,.073-2.954,1.849-8.712,7.566C3.135,14.807,1.545,17.213,1.48,17.312c-.091,.14-.146,.301-.159,.467l-.319,4.071c-.022,.292,.083,.578,.29,.785,.188,.188,.443,.293,.708,.293,.025,0,.051,0,.077-.003l4.101-.316c.165-.013,.324-.066,.463-.155,.1-.064,2.523-1.643,8.585-7.662,5.759-5.718,7.548-8.535,7.622-8.652,.128-.205,.178-.45,.14-.689Zm-9.17,7.922c-4.93,4.895-7.394,6.78-8.064,7.263l-2.665,.206,.206-2.632c.492-.672,2.393-3.119,7.312-8.004,1.523-1.512,2.836-2.741,3.942-3.729,.01,.002,.02,.004,.031,.006,.012,.002,1.237,.214,2.021,.98,.772,.755,.989,1.93,.995,1.959,0,.004,.002,.007,.002,.011-.999,1.103-2.245,2.416-3.78,3.94Zm5.309-5.684c-.239-.534-.597-1.138-1.127-1.656-.524-.513-1.134-.861-1.674-1.093,1.139-.95,1.908-1.516,2.309-1.797,.419,.124,1.049,.377,1.481,.8,.453,.456,.695,1.081,.81,1.469-.285,.4-.851,1.159-1.798,2.278Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
