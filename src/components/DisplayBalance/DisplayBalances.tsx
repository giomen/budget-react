import React from 'react'
import DisplayBalance from './DisplayBalance'

const DisplayBalances = () => {
  return (
    <div className="resumeGrid">
        <div className="resumeGridItems">
          <DisplayBalance label='Income' value='1000.00' type='income'></DisplayBalance>
        </div>
        <div className="resumeGridItems">
          <DisplayBalance label='Outcome' value='500.00' type='outcome'></DisplayBalance>
        </div>
      </div>

  )
}

export default DisplayBalances
