'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';


export function Loginbutton() {
    const { data: session, status } = useSession();
    console.log(session, status);

    if (status === "loading") {
        return <>
            <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center backdrop-blur-md text-white z-50">
                <div className="w-12 h-12 border-t-2 border-blue-500 border-solid rounded-full animate-spin"></div>
                <div className='text-black mt-2 text-sm'>Please Wait</div>
            </div>
        </>
    }

    if (status === 'authenticated') {
        return null; // Hide the login button when authenticated
    }
    return (
       <button
      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md ml-2"
      onClick={() => signIn('github')}
    >
      Login with Github
    </button>
    );
}


