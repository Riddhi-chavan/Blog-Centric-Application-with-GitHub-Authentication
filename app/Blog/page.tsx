// Page.tsx
"use client";
import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface DataItem {
  id: number;
  title: string;
  slug: string;
  content: string;
  // Add other properties as needed
}

async function getData(): Promise<DataItem[]> {
  const res = await fetch('http://localhost:3000/api/content');

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default function Page() {
  const { data: session, status } = useSession();
  const [data, setData] = useState<DataItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error : any) {
        console.error(error.message);
      }
    };

    if (status === 'authenticated') {
      fetchData();
    } else if (status === 'loading') {
      // You can handle loading state if needed
    } else {
      // Redirect to the login page if not authenticated
      router.push('/Login');
    }
  }, [status, router]);

  return (
    <main className="flex flex-wrap justify-center">
      {data.map((item: DataItem) => (
        <div key={item.id} className="bg-white shadow-xl rounded-lg p-6 m-4 w-80 mt-10">
          <h3 className="text-xl font-semibold mb-2">Name: {item.title}</h3>
          <h3 className="text-gray-600 mb-2">Slug: {item.slug}</h3>
          <h3 className="text-gray-700">Content: {item.content}</h3>
        </div>
      ))}
    </main>
  );
}
