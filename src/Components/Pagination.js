import React from 'react'

function Pagination({ totalPost, postperPage, setcurrentPage, currentPage }) {
  console.log(totalPost)
  console.log(postperPage)
  console.log(currentPage)
  let page=[]
  for(let i=1;i<=Math.ceil(totalPost/postperPage);i++){
    page.push(i)
  }
   
  return (
    <div className='Pagbtn'>
       {
          page.map((item,id)=>{
            return(
              <button key={id}
              onClick={()=>setcurrentPage(item)}
              className={item===currentPage ?"active":""}>
              {item}
              </button>
            )
          })
        }
    </div>
  )
}

export default Pagination