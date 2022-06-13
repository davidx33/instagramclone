import React, { useState } from 'react'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from 
"@heroicons/react/solid";
import { useSession } from 'next-auth/react';
import { addDoc, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { db, storage } from "../firebase"
import Moment from 'react-moment';
import { reactStrictMode } from '../next.config';

function Post({ id, username, userimg, img, caption }) {
    const { data: session } = useSession();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);


    React.useEffect(() => 
        onSnapshot(query(collection(db, 'posts', id, 'comments'),
        orderBy('timestamp', 'desc')), (snapshot) => 
        setComments(snapshot.docs)), [db]);

    React.useEffect(() => onSnapshot(collection(db, 'posts', id, 'likes'),
    (snapshot) => setLikes(snapshot.docs)
    ),
    []
    );

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment; 
        setComment('');

        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
            
        });
    };
  return (
    <div className='bg-white my-7 border rounded-sm'>
    {/* header up top, then img below, buttons, captions,
    then the comments, the input box */}
    <div className='flex items-center p-5'> 
        <img src = {userimg} alt = "" 
        className='rounded-full h-12 w-12 object-contain
        border p-1 mr-3'/>
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5' />
    </div>

    <img src= {img} alt = "" className='object-cover w-full'/>
{/* Buttons for the post */}

{session && (
    <div className='flex justify-between px-4 pt-4 pb-4'>
    <div className='flex space-x-4'>
        <HeartIcon className='btn'/>
        <ChatIcon className='btn'/>
        <PaperAirplaneIcon className='btn'/>
    </div>
    <BookmarkIcon className='btn' />
    </div> 
)}
    
    <div>
        <p className='p-5 truncate'>
            <span className='font-bold mr-2'>
                {username}
            </span>
            {caption}
        </p>
    </div>

    <div>

        {comments.length > 0 && (
            <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>

                {comments.map(comment => (

                    <div 
                    className='flex items-center space-x-2 mb-3'
                    key = {comment.id}>
                        <img 
                        className='h-7 rounded-full'
                        src = {comment.data().userImage} 
                        alt = "" />
                        <p className='text-sm flex-1'>
                            <span className='font-bold pr-1.5'>
                                {comment.data().username}
                            </span>
                            
                            {comment.data().comment}
                        </p>

                        <Moment fromNow className='pr-5 text-xs'>
                            {comment.data().timestamp?.toDate()}
                        </Moment>
                    </div>
                ))}
            
            </div>

        )} 

        {session && (
             <form className='flex items-center p-4'>
             <EmojiHappyIcon className='h-7'/>
             <input 
             placeholder='Add a comment...'
             type = "text" 
             value= {comment}
             onChange={e => setComment(e.target.value)}
             className='border-none flex-1 focus:ring-0 outline-none'/>
             <button type = 'submit' 
             disabled = {!comment.trim()} 
             onClick={sendComment}
             className = 'font-semibold text-blue-400'>Post</button>
         </form>

        )}
        {/* input box */}
    </div>


    </div>
  );
}

export default Post