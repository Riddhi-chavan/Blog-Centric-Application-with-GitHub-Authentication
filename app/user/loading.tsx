export default function loadingUsers(){
    return <div>
      <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center backdrop-blur-md text-white z-50">
                <div className="w-12 h-12 border-t-2 border-blue-500 border-solid rounded-full animate-spin"></div>
                <div className='text-black mt-2 text-sm'>Loading User Data</div>
            </div>
    </div>
}   