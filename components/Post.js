import React from 'react'
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

function Post({ id, username, userimg, img, caption }) {
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

    <div className='flex justify-between px-4 pt-4 pb-4'>
    <div className='flex space-x-4'>
        <HeartIcon className='btn'/>
        <ChatIcon className='btn'/>
        <PaperAirplaneIcon className='btn'/>
    </div>
    <BookmarkIcon className='btn' />
    </div> 
    
    <div>
        <p className='p-5 truncate'>
            <span className='font-bold mr-2'>
                {username}
            </span>
            {caption}
        </p>
    </div>

    <div>
        {/* input box */}
        <form className='flex items-center p-4'>
            <EmojiHappyIcon className='h-7'/>
            <input 
            placeholder='Add a comment... (be nice)'
            type = "text" 
            className='border-none flex-1 focus:ring-0 outline-none'/>
            <button className='font-semibold text-blue-400'>Post</button>
        </form>
    </div>


    </div>
  );
}

export default Post