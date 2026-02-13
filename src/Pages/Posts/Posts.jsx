import { useEffect, useState } from "react";
import './Posts.css'
import FormPosts from "./formPost.jsx";
import useFetch from "../../hooks/useFetch.js";

function Posts() {
  const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts");

  const [posts, setPosts] = useState([]);

  useEffect(() => { 
    if (data) {
      setPosts(data);
    }
  }, [data]);

  const handleAddPost = (newPost) => {
  setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }



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