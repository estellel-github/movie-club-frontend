import { useState } from "react";

interface Comment {
  id: string;
  user: string;
  text: string;
  date: string;
  avatar?: string;
}

interface CommentsSectionProps {
  comments?: Comment[];
}

export default function CommentsSection({
  comments = [],
}: CommentsSectionProps) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      console.log("New Comment Submitted:", newComment);
      setNewComment("");
    }
  };

  return (
    <div className="container mx-auto p-6 rounded-lg mt-4 text-base">
      <h2>Comments</h2>

      {comments.length === 0 ? (
        <div className="container mx-auto p-6 bg-stone-700 text-stone-400 rounded-lg mt-4 text-lg text-center">
          No comments yet. Add a comment!
        </div>
      ) : (
        <div className="mt-4 space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="chat align-center">
              <div className="chat-header">
                <span className="text-base">{comment.user}</span>
                <time className="text-base opacity-50 ml-2">
                  {comment.date}
                </time>
              </div>
              <div className="chat-bubble bg-stone-700 text-neutral-200">
                {comment.text}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Comment Input */}
      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          className="w-full p-2 rounded-lg bg-stone-900 text-white"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit" className="btn btn-warning w-full mt-2">
          Add Comment
        </button>
      </form>
    </div>
  );
}
