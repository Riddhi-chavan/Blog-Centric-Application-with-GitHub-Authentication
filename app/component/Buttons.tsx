'use client'; 

import  {useSession , signIn , signOut } from 'next-auth/react';
import Image from 'next/image';
import Link  from 'next/link';

export function SignInButton(){
    const {data  : session , status} = useSession();
    console.log(session , status);

    if(status ==="loading"){
        return<>...</>
    }
    
    if(status === 'authenticated'){
        return (
            <>
            <div className='flex  mr-10 border-l-2  h-24  ml-6 pl-3'>
                <div className='flex pt-8 pl-3'>
            <Link href={`http://localhost:3000/api/auth/signin`}>
                <Image
                src={session.user?.image?? '/mememan.webp'}
                width={32}
                height={32}
                alt='your name'/>  
            </Link>
            </div>
            <button onClick={()=> signOut()}  className='ml-3 '>Sign  Out </button>
            
            </div>
            </>
        );
    }

}

export function SignOutButton(){
    return <button onClick={()=> signOut()} className='border-l-19  ' >Sign  Out </button>
}