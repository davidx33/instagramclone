import { async } from '@firebase/util'
import React from 'react'

function signIn() {
  return (
    <div>I am the sign in page</div>
  )
}
// serverside rendering
export async function getServerSideProps() {
    
}
export default signIn