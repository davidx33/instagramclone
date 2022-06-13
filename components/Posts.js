import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
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
        const unsubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp',
        'desc')), snapshot => { 
            setPosts(snapshot.docs)
        });

        return unsubscribe;

    }, [db])
     
  return (
    <div>
        {posts.map((post) => (
            <Post 
            key = {post.id} 
            id = {post.id}
            username = {post.data().username}
            userimg = {post.data().profileImg}
            img = {post.data().image }
            caption = {post.data().caption}
                />

        ))}

    </div>
  )
}

export default Posts