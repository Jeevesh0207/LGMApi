import React from 'react'

function Loading() {
  return (
    <>
      <div className='Loading'>
        <div className='Top'>
          <h1>Don't carry a heavy load </h1>
          <h1> let us do it</h1>
          <div className='circle'>
          </div>
        </div>
        <img src={require('../img/transport.png')} alt='png'></img>
      </div>
    </>
  )
}

export default Loading