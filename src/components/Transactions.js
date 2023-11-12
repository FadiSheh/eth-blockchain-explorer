import React, { useContext } from 'react'
import { BlocksContext } from './BlocksContext'
import { timeAgo } from './utils'
import { Utils } from 'alchemy-sdk'
import './style.css'

function Transactions () {
  const { blocksData } = useContext(BlocksContext)

  if (!blocksData || blocksData.length === 0) {
    return <div className='loading'>Loading...</div>
  } else {
    let transactionsHistory = blocksData[0].transactions.slice(0, 10)
    let timestamp = timeAgo(blocksData[0].timestamp)

    return (
      <div className='blocks-container'>
        <h2>Latest Transactions</h2>
        <table>
          <tbody>
            {transactionsHistory.map((block, index) => (
              <tr key={index}>
                <td>
                  <img src='doc.png' alt='Logo' className='logo' />
                </td>
                <td>
                  <div className='hash'>{block.hash}</div>
                  <div className='timestamp'>{timestamp}</div>
                </td>
                <td>
                  <div className='transcationAddress'> From: {block.from}</div>
                  <div className='transcationAddress'>To: {block.to}</div>
                </td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  <div className='value-button'>
                    <span className='value'>
                      {parseFloat(
                        parseFloat(
                          Utils.formatUnits(block.value, 'ether')
                        ).toFixed(5)
                      ).toString()}
                    </span>{' '}
                    <span className='currency'>ETH</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
export default Transactions
