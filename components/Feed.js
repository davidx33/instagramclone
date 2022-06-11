import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
// Structure:

// On the left, have the stories and the posts, stories at the top
// On the right, have a mini profile and suggested followers

function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
    xl:grid-cols-3 xl:max-w-6xl mx-auto'>
        <section className='col-span-2'>
            <Stories />
            <Posts />
        </section>

        <section>

        </section>

    </main>
  )
}

export default Feed