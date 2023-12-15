
import FollowButton from "@/app/component/FollowButton/FollowButton";
import {prisma} from '../../../lib/prisma'
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

interface Props {
    params : {
      id : string;
    };
}

export async function generateMetadata({params}: Props) : Promise<Metadata> {
    const user = await prisma.user.findUnique({ where : {  id : params.id}});
   return {title : `User profile of ${user ?.name }`};
    
}


export default async function UserProfile({params} : Props) {
    const user = await prisma.user.findUnique({ where : {  id : params.id}});
    const {name , bio, image} = user ?? {} ;
    return(
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto mt-16">
        <div className="flex">
        <div className="flex ">
        <h1 className="text-2xl font-semibold mb-4 mr-20 ">{name}</h1>
        </div>
        <div style={{ marginLeft: '10rem' }}>
        <button>
            <Link href='/dashboard' >Edit</Link>
        </button>
        </div>
        </div>
        <Image
            className="w-64 h-64 object-cover rounded-full mx-auto mb-4"
            src={image ?? '/mememan.webp'}
            alt={`${name}'s profile`}
        />
        <div className="text-lg font-semibold mb-2">Bio</div>
        <p className="text-gray-600 mb-4">{bio}</p>
        
        <FollowButton targetUserId={params.id} />
    
        {/* Add other account-related information or actions as needed */}
    </div>
    
    );
}