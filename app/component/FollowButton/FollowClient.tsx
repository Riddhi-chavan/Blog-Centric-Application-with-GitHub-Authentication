'use client'
import { useRouter } from "next/navigation";

import { useState, useTransition } from "react";

 

interface Props{
  targetUserId : string ;
  isFollowing : boolean ;
}

export default function FollowClient({targetUserId ,isFollowing} : Props){
  const router = useRouter();
  const [isPending , startTransitoin] = useTransition();
  const [isFetching , setFetching] =  useState(false);
  const isMutating  = isFetching || isPending ; 

  const follow  = async () =>{
    setFetching(true);

    const res = await fetch('http://localhost:3000/api/follow', {
      method : 'POST',
      body : JSON.stringify({targetUserId}),
      headers : {
        'Content-Type' :  'application/json'
      }
    });
    setFetching(false); 
    console.log(res);
    startTransitoin(() => router.refresh());

  }

  const unfollow = async () => {
     setFetching(true);
     const res = await fetch(`api/follow?targetUserId=${targetUserId}`, {
      method : 'DELETE',
     });
     setFetching(false);
    startTransitoin(() => router.refresh());

  }
 
  if(isFollowing){
    return (
      <button onClick={unfollow}>{!isMutating ? 'Unfollow'  : '...'}</button>
    )
  }
  else{
    return(
      <button onClick={follow}>{!isMutating ? 'Follow'  : '...'}</button>
    )
  }
}