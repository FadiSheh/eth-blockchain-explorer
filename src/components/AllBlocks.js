import React, { useContext } from 'react'
import { BlocksContext } from './BlocksContext'
import { timeAgo } from './utils'
import { useNavigate } from 'react-router-dom'

import './style.css'

function AllBlocks () {
  const { blocksData } = useContext(BlocksContext)
  const navigate = useNavigate()

  const handleBlockClick = block => {
    const blockState = {
      number: block.number,
      timestamp: block.timestamp,
      txs: block.transactions.length,
      hash: block.hash,
      parentHash: block.parentHash,
      gasLimit: block.gasLimit.toString(),
      gasUsed: block.gasUsed.toString(),
      miner: block.miner
    }
    navigate(`/block/${block.number}`, { state: { block: blockState } })
  }
  if (!blocksData || blocksData.length === 0) {
    return <div className='loading'>Loading...</div>
  } else {
    return (
      <div className='blocks-container'>
        <h2>All Blocks</h2>
        <table>
          <thead>
            <tr>
              <th>Block</th>
              <th>Age</th>
              <th>Txn</th>
              <th>Fee Recipient</th>
              <th>Gas Used</th>
              <th>Gas Limit</th>
              <th>Base Fee (Gwei)</th>
            </tr>
          </thead>
          <tbody>
            {blocksData.map((block, index) => (
              <tr key={index}>
                <td onClick={() => handleBlockClick(block)}>
                  <div className='block-number clickable'>{block.number}</div>
                </td>
                <td>
                  <div className='timestamp'>{timeAgo(block.timestamp)}</div>
                </td>
                <td>
                  <div className='transactions'>
                    {block.transactions.length}
                  </div>
                </td>
                <td>
                  <div className='fee-recipient'>{block.miner}</div>{' '}
                </td>
                <td>
                  <div>{block.gasUsed.toString()}</div>
                </td>
                <td>
                  <div>{block.gasLimit.toString()}</div>
                </td>
                <td>
                  <div>
                    {Number(
                      (block.baseFeePerGas.toString() / 1000000000).toFixed(2)
                    )}
                  </div>
                </td>

                <td>
                  <div>{block.gasPrice}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
export default AllBlocks
