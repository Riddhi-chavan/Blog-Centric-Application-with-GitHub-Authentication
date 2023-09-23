import Link from 'next/link'
import Image from 'next/image'
import styles from './Navmenu.module.css'
import { SignInButton } from './component/Buttons';



export default function NavMenu(){
    return  (
    <nav className={styles.nav}>
    <Link href={"/"}>
       <Image 
       className='bg-white rounded-full w-20 '
       src="/logo-social.png"
       width={100}
       height={10}
       alt='NextSpace Logo'
       />
       </Link>
       <ul className={styles.links}>
        <li className='mr-14 border-x-2 px-10'>
            <Link href={'/about'}>About</Link>  
        </li>
        <li className='mr-2  pr-10'>
            <Link href={'/user'}>User</Link>
        </li>
        <li>
          <SignInButton/>
        </li>
       </ul>
    </nav>
    );
}