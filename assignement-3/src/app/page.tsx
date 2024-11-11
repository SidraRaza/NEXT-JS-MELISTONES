// src/app/page.tsx

import Link from 'next/link';


export default function Home() {
  return (
    <>
    
      <main className="max-w-[600px] h-[660px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="text-center pt-24">
          <h1 className="text-4xl font-bold">Welcome to My Blog!</h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover insightful articles and stories on various topics.
          </p>
          <Link href="/posts" className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-md">
      
              Read the Latest Posts
       
          </Link>
        </section>

    
      </main>
    </>
  );
}
