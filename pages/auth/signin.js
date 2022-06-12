import { async } from '@firebase/util'
import { getProviders, signIn as SignIntoProvider } from "next-auth/react"
import React from 'react'

function signIn({ providers }) {
    return (
    <>
    {Object.values(providers).map((provider) => (
      <div key={provider.name}>
        <button onClick={() => SignIntoProvider(provider.id)}>
          Sign in with {provider.name}
        </button>
      </div>
    ))}
  </>
    )
}
// serverside rendering
export async function getServerSideProps() {
    // gets the providers for google from nextauth
    const providers = await getProviders();

    return {
        props: {
            providers,
        }
    }

}
export default signIn