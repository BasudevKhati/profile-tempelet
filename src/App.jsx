import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import { Index } from './Component/ToRoute';
import { SettingBar } from './Component/SettingBar';
import { MyAccount } from './Component/MyAccount';



function App() {

  const SECTION = styled.section`
    width: 100vw;
    height: 100vh;
    padding: 8px;
    background-color:  #5964FF;
  `
  

  return ( 
    <SECTION>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} >
              <Route  path="setting" element={<SettingBar />}>
                <Route path="MyAccount" element={<MyAccount />}/>
              </Route>
            </Route>
          </Routes>
        </Router>
    </SECTION>
  )
};

export default App;
