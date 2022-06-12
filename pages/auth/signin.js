
import { getProviders, signIn as SignIntoProvider } from "next-auth/react"
import React from 'react'
import Header from '../../components/Header'

function signIn({ providers }) {
    return (
    <>
    <Header />
    <div className='flex flex-col items-center 
    justify-center min-h-screen py-2 px-14 text-center'>
        <img 
        className='w-80'
        src = "https://links.papareact.com/ocw" 
        alt = ""/>
    <p>
       This is David Xu's Instagram platform. Built with Next.js, React, and Tailwind CSS. Authentication is powered by Firebase and NextAuthJS. Fake profiles and data from Faker JS.
    </p>
    <div className='mt-40'>
    {Object.values(providers).map((provider) => (
      <div key={provider.name}>
        <button className='p-3 bg-blue-500 rounded-lg text-white' 
        onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })}>
          Sign in with {provider.name}
        </button>
      </div>
    ))}
    </div>
    </div>
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
        },
    };

}
export default signIn