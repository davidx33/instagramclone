import '../styles/globals.css';
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
// wrap in SessionProvider to maintain state
return (
<SessionProvider session={session}>
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
</SessionProvider>
  )  
}

export default MyApp
