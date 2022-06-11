import React from 'react'
import Post from './Post'

const posts = [
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
        {posts.map((post) => (
            <Post 
            key = {post.id} 
            id = {post.id}
            username = {post.username}
            userimg = {post.userimg}
            img = {post.img}
            caption = {post.caption}
                />

        ))}
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