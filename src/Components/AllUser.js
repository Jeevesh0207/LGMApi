import React, { useState } from 'react'
import Pagination from './Pagination'
import Data from './Data'
function AllUser({  userData }) {
    const [currentPage,setcurrentPage]=useState(1)
    const [postperPage,setpostperPage]=useState(6)

    const lastPostIndex=currentPage*postperPage
    const firstPostIndex=lastPostIndex-postperPage
    const currentPost=userData.slice(firstPostIndex,lastPostIndex)
    return (
        <>
            <Data currentPost={currentPost} />
            <Pagination
            totalPost={userData.length}
            postperPage={postperPage}
            setcurrentPage={setcurrentPage}
            currentPage={currentPage} />
        </>
    )
}

export default AllUser