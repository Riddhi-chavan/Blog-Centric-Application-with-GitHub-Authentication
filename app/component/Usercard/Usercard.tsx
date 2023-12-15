import  Link from "next/link";
import './UserCard.module.css' 
import Image from "next/image";

interface Props {
    id : any ;
    name : any ;
    age : any;
    image : any ;
    bio: any;

}

export default function Usercard({id, name ,   bio, image }: Props){
return (
   <div className="flex items-center space-x-4 p-4 border rounded-lg shadow-lg mt-32 max-w-5xl ml-44">
    <Image 
    src={image?? '/mememan.webp'}
    alt={`${name}'s profile`}
    className="w-16 h-16 rounded-full"
    width="20"
    height="20"
    />
    <div className="flex">
        <div>
        <h3 className="text-lg font-semibold">
            <Link href={`/user/${id}`} className="text-blue-500 hover:underline">{name}</Link>
        </h3>
        <p className="text-gray-600 mr-44">Bio : {bio}</p>
        </div>
        <div style={{ marginLeft: '30rem' }}>
        <button >
            <Link href='/dashboard' >
               Edit
            </Link>
        </button>
        </div>
    </div>
   </div>
);
}

