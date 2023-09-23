'use client';

export function ProfileForm({user} : any){
    const updateUser =async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData  = new FormData(e.currentTarget);

        const body  = {
            name :  formData.get('name'),
            bio : formData.get('bio'),
            age : formData.get('age'),
            image: formData.get('image'),
        };

        const res  = await fetch('/api/user',{
            method : 'PUT',
            body : JSON.stringify(body),
            headers : {
                'Content-Type' : 'application/json',
            },
        }
        );

    }
    return(
    <>
   <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
    <h2 className="text-2xl font-semibold mb-4 text-center">Edit your Profile</h2>
    <form onSubmit={updateUser} className="space-y-4">
        <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <input
                type="text"
                name="name"
                defaultValue={user?.name ?? ''}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
        </div>
        <div className="mb-4">
            <label htmlFor="bio" className="block text-gray-600">Bio</label>
            <textarea
                name="bio"
                cols={30}
                rows={10}
                defaultValue={user?.bio ?? ''}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>
        </div>
        <div className="mb-4">
            <label htmlFor="age" className="block text-gray-600">Age</label>
            <input
                type="text"
                name="age"
                defaultValue={user?.age ?? 0}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
        </div>
        <div className="mb-4">
            <label htmlFor="image" className="block text-gray-600">Profile Image Url</label>
            <input
                type="text"
                name="image"
                defaultValue={user?.image ?? ''}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
        </div>
        <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
            Save
        </button>
    </form>
</div>


    </>

    );
}