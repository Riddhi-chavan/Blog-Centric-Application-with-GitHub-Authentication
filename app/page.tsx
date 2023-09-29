import Image from 'next/image'
import Link from 'next/link';
import { SignInButton } from './component/Buttons';
import { Loginbutton } from './component/Loginbutton';




export default async function Home() {

  return (
    <>
<div className="min-h-screen " style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20210826/pngtree-blue-water-wave-ocean-background-hd-image_770489.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div>
  <div className="text-center pt-40">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Space</h1>
        <p className="text-gray-600 mb-8">here you can view and share Blogs</p>
        <Link href="/Blog">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2">
            Go to Blog
          </button>
        </Link>
        <Link href="/">
          <Loginbutton  />
        </Link>
      </div>
  </div>
    </div>


    </>
  )
}
