import React from 'react'
import Post from './Post'

const DUMMY_DATA = [
    {
        id: '123', 
        username: "davidxu33",
        userimg: "JeremyLin.png",
        img: "JeremyLin.png",
        caption: "Linsanity is one of the best things to ever happen <3"
    }

]
function Posts() {
  return (
    <div>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Posts