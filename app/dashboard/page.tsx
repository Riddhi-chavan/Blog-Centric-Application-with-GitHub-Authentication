
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { ProfileForm } from "./ProfileForm";

export default async function  Dashboard() {
    const session = await getServerSession(authOptions);

    if(!session){
       <Link href="/api/auth/signin">Sign in </Link>
    }

    const currentUserEmail = session?.user?.email!;
    const user = await prisma.user.findUnique({
       where : {
        email : currentUserEmail ,
       },
    });
    return(
        <>
             <ProfileForm user={user}/>
        </>
    );
}