import { useEffect, useState } from "react";
import './Posts.css'
import FormPosts from "./formPost.jsx";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        
      });
  }, []);

  const handleAddPost = (newPost) => {
  setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div className="posts">
      <h1>Posts</h1>
      <FormPosts onAddPost={handleAddPost} />
      <ul>
        {posts.slice(0, 10).map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>       
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts;