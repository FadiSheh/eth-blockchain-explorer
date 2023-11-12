import React, { useContext } from 'react'
import { BlocksContext } from './BlocksContext'
import { timeAgo } from './utils'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import './style.css'

function Blocks () {
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
    return
  } else {
    const lastTenBlocks = blocksData.slice(-10)

    return (
      <div className='blocks-container'>
        <h2>Latest Blocks</h2>
        <table>
          <tbody>
            {lastTenBlocks.map((block, index) => (
              <tr key={index}>
                <td>
                  <img src='block.png' alt='Logo' className='logo' />
                </td>

                <td onClick={() => handleBlockClick(block)}>
                  <div className='block-number clickable'>{block.number}</div>

                  <div className='timestamp'>{timeAgo(block.timestamp)}</div>
                </td>
                <td>
                  <div className='fee-recipient-container'>
                    <div className='fee-recipient-label'>Fee recipient:</div>
                    <div className='fee-recipient'>{block.miner}</div>
                  </div>
                  <div className='transaction-count'>
                    <span className='transactions'>
                      {block.transactions.length}
                    </span>
                    <span> txns</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='view-all-container'>
          <Link to='/all-blocks' className='view-all-button'>
            View All Blocks
          </Link>
        </div>
      </div>
    )
  }
}
export default Blocks
