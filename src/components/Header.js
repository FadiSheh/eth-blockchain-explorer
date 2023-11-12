import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './style.css'

function Header () {
  const [ethPrice, setEthPrice] = useState(null)

  useEffect(() => {
    const getEthPrice = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
        )
        const data = await response.json()
        setEthPrice(data.ethereum.usd)
      } catch (error) {
        console.error('Error fetching ETH price:', error)
      }
    }

    getEthPrice()
  }, [])

  return (
    <header>
      <div className='header-content'>
        <img src='blockchain_2152349.png' alt='Logo' className='logoHeader' />
        {/* "https://www.freepik.com/icons/blockchain" Icon by Good Ware */}
        <h1>Ethereum Blockchain Explorer</h1>
      </div>
      <div className='eth-price'>
        Current Price: {ethPrice ? `$${ethPrice}` : 'Loading...'}
      </div>

      <nav>
        <Link to='/'>Home</Link> |<Link to='/all-blocks'> All Blocks</Link>
      </nav>
    </header>
  )
}

export default Header
