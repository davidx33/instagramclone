import React from 'react'
import faker from "faker"

function Stories() {

    React.useEffect(() => {
        const suggestions = [...Array[20]].map((_, i) => ({
            ...faker.helpers.contextualCard()
        })

        )
    }, [])
  return (
    <div>
        {/* use Fakerjs to input fake data */}
    </div>
  )
}

export default Stories