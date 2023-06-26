import React from 'react'
import axios from 'axios'

function Navbar({ setLoading, setuserData, userData ,setboolmain}) {
  const LogoClick=()=>{
    setboolmain(true)
  }
  const Click = async () => {
    setboolmain(false)
    setLoading(true)
    let arr = []
    const Fun1 = (id) => {
      console.log(id)
      try {
        axios.get(`https://reqres.in/api/users?page=${id}`)
          .then((res) => {
            res.data.data.map(item => arr.push(item))
            if (id === 1) {
              Fun1(2)
            }
            if (id === 2) {
              setTimeout(() => {
                setLoading(false)
                setuserData(arr)
                console.log(userData)
              }, 5990)
              return
            }
          })
      }
      catch (err) {
        console.log(err)
      }

    }
    Fun1(1)
  }
  return (
    <div className='Navbar'>
      <div className='Left' onClick={LogoClick}>
        <img src={require('../img/logo.png')} alt='png' />
        <h1>JR<span>Shop</span></h1>
      </div>
      <div className='Right'>
        <i className="fa-solid fa-users"></i>
        <button onClick={() =>Click()}>Get User</button>
      </div>
    </div>
  )
}

export default Navbar