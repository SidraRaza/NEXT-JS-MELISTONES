interface Post {
    id: string;
    title: string;
    content: string;
  }
  
  const posts: Record<string, Post> = {
    '1': { id: '1', title: 'First Post', content: 'This is the content of the first post.' },
    '2': { id: '2', title: 'Second Post', content: 'This is the content of the second post.' },
  };
  
  export default function PostPage({ params }: { params: { id: string } }) {
    const post = posts[params.id];
  
    if (!post) {
      return <div className="text-center text-red-500">Post not found</div>;
    }
  
    return (
    
           <div className="w-[300px] mx-auto p-8 my-60 text-center border-2 border-white shadow-lg bg-white">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg">{post.content}</p>
  
     </div>
    );
  }
  
