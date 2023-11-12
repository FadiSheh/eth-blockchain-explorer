import React from 'react'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AllBlocks from './components/AllBlocks'
import BlockDetails from './components/BlockDetails'

import { BlocksProvider } from './components/BlocksContext'

import { Routes, Route } from 'react-router-dom'

function App () {
  return (
    <BlocksProvider>
      <div className='App'>
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/all-blocks' element={<AllBlocks />} />
            <Route path='/block/:blockNumber' element={<BlockDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BlocksProvider>
  )
}

export default App
