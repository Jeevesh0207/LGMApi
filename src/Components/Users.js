import React from 'react'
import Loading from './Loading'
import AllUser from './AllUser'
function Users({ loading, userData }) {
  return (
    <div>
      {
        (loading) ? <Loading /> :
          <AllUser loading={loading} userData={userData} />
      }
    </div>
  )
}

export default Users