import React from 'react';
import DailyQuote from './components/DailyQuote';
import { ClerkProvider } from '@clerk/nextjs';

function MyApp({ Component, pageProps }) {
    console.log('Clerk Publishable Key:', process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
    return (
        <ClerkProvider
            publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
            {/* You can include the DailyQuote component here if you want it on all pages */}
            <DailyQuote />
            <Component {...pageProps} />
        </ClerkProvider>
    );
}

export default MyApp;
