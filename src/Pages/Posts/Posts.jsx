import { useState, useEffect } from 'react';

function Posts() {
    const [post, setPost] = useState([])

    useEffect(() => {
        setPost([
            { id: 1, title: "pertama" },
            { id: 2, title: "kedua" },
        ])
    }, [])
        
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