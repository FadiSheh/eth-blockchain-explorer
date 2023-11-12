// BlockDetails.js
import React from 'react'
import { useLocation } from 'react-router-dom'

function BlockDetails () {
  const location = useLocation()
  const block = location.state?.block

  if (!block) {
    return <div>No block data available.</div>
  }

  return (
    <div className='blocks-container'>
      <h2>Block Details</h2>
      <div>
        <strong>Number:</strong> {block.number}
      </div>
      <div>
        <strong>Timestamp:</strong>{' '}
        {new Date(block.timestamp * 1000).toLocaleString()}
      </div>
      <div>
        <strong>Transactions:</strong> {block.txs}
      </div>
      <div>
        <strong>Hash:</strong> {block.hash}
      </div>
      <div>
        <strong>Parent Hash:</strong> {block.parentHash}
      </div>
      <div>
        <strong>Gas Limit:</strong> {block.gasLimit}
      </div>
      <div>
        <strong>Gas Used:</strong> {block.gasUsed}
      </div>
      <div>
        <strong>Miner:</strong> {block.miner}
      </div>
      {/* You can add more details here if needed */}
    </div>
  )
}

export default BlockDetails
