import { useState } from 'react';

function Posts() {
    const [post, setPost] = useState([
        { id: 1, title: "post pertama" },
        { id: 2, title: "post kedua" },
        
    ]);

    return (
        <div style={{padding: "2rem"}}>
            <h1>Post Page</h1>

            <ul>
                {post.map(post => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Posts;