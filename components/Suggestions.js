import React from 'react'
import { Faker, faker } from '@faker-js/faker';

function Suggestions() {
    const [suggestions, setSuggestions] = React.useState([]);

    React.useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => (
            {
                id: i,
                username: faker.internet.userName(),
                avatar: faker.image.avatar(),
                companyname: faker.company.companyName(),
            }))
            setSuggestions(suggestions);
    }, [])
  return (
    <div className='mt-4 ml-10'>
        <div className='flex justify-between text-sm mb-5'>
            <h3 
            className='text-sm font-bold text-gray-400'>
                Suggestions for you
            </h3>
            <button className='text-gray-600 font-semibold'>See All</button>
        </div>

        {suggestions.map((profile) => (
                <div key = {profile} className='flex
                items-center justify-between mt-3'>
                    <img src = {profile.avatar} alt = ""
                    className='w-10 h-10 rounded-full p-[2px]'/>

                    <div className='flex-1 ml-4'>
                        <h2>{profile.username}</h2>
                        <h3>Works at {profile.companyname}</h3>
                    </div>
                </div>
            ))}
    </div>
  );
}

export default Suggestions