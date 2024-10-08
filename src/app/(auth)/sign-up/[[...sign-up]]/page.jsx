'use client'
import { SignUp, useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';

export default function Page() {
  const { isSignedIn, userId } = useAuth();

  useEffect(() => {
    if (isSignedIn && userId) {
      // Call the API to store user info in the DB
      fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      }).catch((error) => console.error('Error storing user:', error));
    }
  }, [isSignedIn, userId]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignUp />
    </div>
  );
}
