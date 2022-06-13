import { collection, onSnapshot } from 'firebase/firestore';
import { useSession } from 'next-auth/react'
import React from 'react'
import { db } from '../firebase';
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
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        onSnapshot(collection(db, ))

    })
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