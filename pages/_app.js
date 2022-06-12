import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
// wrap in SessionProvider to maintain state
return (

<SessionProvider session={session}>
  <Component {...pageProps} />
</SessionProvider>

)
  
}

export default MyApp
