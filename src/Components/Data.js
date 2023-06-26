import React from 'react'

function Data({currentPost}) {
    
  return (
    
        <div className='Alluser'>
                {
                    currentPost.map((item , id) => {
                        return (
                            <div className='card' key={id} >
                                <div className={`Top Top${id}`}>
                                    <img src={item.avatar} alt='png' />
                                </div>
                                <div className='extra'></div>
                                <div className='Name'>
                                    <p><i class="fa-solid fa-address-card"></i> {item.first_name}</p>
                                    <p><i class="fa-solid fa-address-card"></i> {item.last_name}</p>
                                </div>
                                <div className='Email'>
                                    <p><i class="fa-solid fa-envelope"></i>{item.email}</p>
                                </div>
                            </div>

                        )
                    })
                } 
            </div>
    
  )
}

export default Data