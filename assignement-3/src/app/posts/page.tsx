import Link from 'next/link';

export default function PostsPage() {
  const posts = [
    { id: '1', title: 'First Post' },
    { id: '2', title: 'Second Post' },
  ];

  return (
    <div className="w-[300px] mx-auto p-8 h-[600px] text-center border-2 border-white shadow-lg bg-white">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}    className="text-blue-500 hover:underline border-1">
            {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
