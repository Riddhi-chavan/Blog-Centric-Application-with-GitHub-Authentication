

async function getData() {
  const res = await fetch('http://localhost:3000/api/content')
   

 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getData()
   console.log(data);
  return  <main className="flex flex-wrap justify-center">
    {
      data.map((data : any) => (
        <div className="bg-white shadow-xl rounded-lg p-6 m-4 w-80 mt-10">
        <h3  className="text-xl font-semibold mb-2">Name : {data.title}</h3>
        <h3 className="text-gray-600 mb-2">Slug : {data.slug}</h3>
        <h3  className="text-gray-700">Content : {data.content}</h3>
        </div>
        
      ))
    }
  </main>
}