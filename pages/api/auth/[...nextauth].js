
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { SessionProvider } from "next-auth/react";


export default NextAuth({
    providers: [   
        GoogleProvider({    
            clientId: process.env.GOOGLE_CLIENT_ID,     
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
// add more providers here
    ],
    secret: process.env.NEXT_PUBLIC_SECRET,
    
    pages: {
        signIn: "/auth/signin",
        
    },
    callbacks: {
        async session({ session, token, user }) {
            session.user.username = session.user.name
            .split(" ")
            .join("")
            .toLocaleLowerCase();
            // from David Xu -> DavidXu -> davidxu
            session.user.uid = token.sub
            // sub is th e user id that comes back from Google
            return session;
        },
    },
});
