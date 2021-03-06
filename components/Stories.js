import React from 'react'
import { Faker, faker } from '@faker-js/faker';
import Story from './Story';
import { useSession } from "next-auth/react";

function Stories() {
    const [suggestions, setSuggestions] = React.useState([]);
    const { data: session } = useSession();

React.useEffect(() => {

    const suggestions = [...Array(20)].map((_, i) => ({
        username: faker.internet.userName(),
        avatar: faker.image.avatar(),
        id: i
    }));
    setSuggestions(suggestions)
}, [])


  return (
    
    <div className='flex space-x-2 p-6
    bg-white mt-8 border-gray-20 border rounded-sm scrollbar-hide overflow-x-scroll scrollbar-thin 
    scrollbar-thumb-black'>

        {session && (
            <Story 
            src= {session.user.image}
            username={session.user.username}
            />
        )}

        {suggestions.map (profile => (
        <Story key={profile.id} 
            img = {profile.avatar} 
            username = {profile.username}/>
        ))}
        {/* use Fakerjs to input fake data */}
    </div>
  )
}

export default Stories