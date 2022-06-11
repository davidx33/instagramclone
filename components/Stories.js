import React from 'react'
import { Faker, faker } from '@faker-js/faker';

function Stories() {

React.useEffect(() => {

    const [suggestions, setSuggestions] = React.useState([])

    const suggestions = [...Array(20)].map((_, i) => ({
        username: faker.image.avatar(),
        avatar: faker.internet.userName(),
        id: i
    }));
}, [])

setSuggestions(suggestions)

  return (
    <div>
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