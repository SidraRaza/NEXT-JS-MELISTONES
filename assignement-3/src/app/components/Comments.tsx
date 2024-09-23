'use client';
// components/Comments.tsx
import { useState } from 'react';

export default function Comments() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment(''); // Clear the input after adding
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="flex-grow p-2 border rounded-md"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {comments.map((comment, index) => (
          <li key={index} className="p-2 border-b">
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
}
