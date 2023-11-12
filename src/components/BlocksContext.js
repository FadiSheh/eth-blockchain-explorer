import React, { createContext, useState, useEffect } from 'react'
import { alchemy } from '../alchemyConf'

export const BlocksContext = createContext({
  blocksData: [] // Default value
})

export const BlocksProvider = ({ children }) => {
  const [blocksData, setBlocksData] = useState([])

  useEffect(() => {
    const getBlocksData = async () => {
      const number = await alchemy.core.getBlockNumber()
      let blocks = []
      for (let i = number; i > number - 50; i--) {
        const blockData = await alchemy.core.getBlockWithTransactions(i)

        blocks.push(blockData)
      }
      setBlocksData(blocks)
    }

    getBlocksData()
  }, [])

  return (
    <BlocksContext.Provider value={{ blocksData }}>
      {children}
    </BlocksContext.Provider>
  )
}
