import Transactions from './Transactions'
import Blocks from './Blocks'

function Home () {
  return (
    <div className='dashboard'>
      <Blocks />
      <Transactions />
    </div>
  )
}

export default Home
